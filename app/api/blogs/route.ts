import { NextRequest, NextResponse } from "next/server";
const db = require('better-sqlite3')('blog.sql');

export async function GET(req: NextRequest) {
    const rows = db.prepare('SELECT * FROM blogs');
    const data = []
    for (const row of rows.iterate()) {
      data.push(row)
      console.log(row);
    }

    return new NextResponse(JSON.stringify(data))
}
