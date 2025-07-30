import { NextRequest, NextResponse } from "next/server";
const db = require('better-sqlite3')('blog.sql');

export async function GET(req: NextRequest, {params}: {params:{id:number}}) {
    const {id} = params;
    const row = db.prepare('SELECT * FROM blogs WHERE id = ?').get(id);
    if (!row) return new NextResponse({"message": `blog witi id ${id} not found!`})
    return new NextResponse(JSON.stringify(row))
}
