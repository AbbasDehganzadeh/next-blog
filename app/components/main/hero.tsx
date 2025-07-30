'use client';

import { Button, Input } from "@heroui/react"

export default function Hero() {
  return (
    <>
      <header className="flex flex-col justify-center">
        <h1 className="my-2 text-center text-bold text-2xl">Hello Next js</h1>
        <p className="space-md text-center text-semibold">explore my blog</p>
      </header>
      <div className="max-w-2xl mt-5 mx-auto flex justify-center">
        <Input type="text" className="my-auto"
	variant="faded" placeholder="Ente you wand!" />
      <Button className="px-auto py-1 text-bold text-2xl text-grey-700 rounded-md shadow-md"
        color="primary" variant="solid" size="md">
        Go!</Button>
      </div>
    </>
  );
}
