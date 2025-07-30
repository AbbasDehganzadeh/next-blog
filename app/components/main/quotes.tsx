'use client';

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@heroui/react"
import Quote from '../common/cards/quote/quote';
import LoadingSpinner from '../common/loading-spinner';

interface IQuote {
  q: string,
  a: string,
}

const fallbackData: IQuote[] = [
  {
    q: "The only way to do great work is to love what you do.",
    a: "Steve Jobs"
  },
  {
    q: "Innovation distinguishes between a leader and a follower.",
    a: "Steve Jobs"
  },
  {
    q: "Stay hungry, stay foolish.",
    a: "Steve Jobs"
  },
  {
    q: "The future belongs to those who believe in the beauty of their dreams.",
    a: "Eleanor Roosevelt"
  },
  {
    q: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    a: "Winston Churchill"
  }
]

export default function Quotes() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const { status, data, error, isLoading } = useQuery<IQuote[], Error>({
    queryKey: ['quotes'], queryFn: async () => {
      const resp = await fetch("http://zenquotes.io/api/quotes")
      console.log(resp.status)
      if (resp.ok) return resp.json()
  }})

  const handlePrevious = () => {
    setCurrentIndex(v => (v - 1 + 5) % 5)
  }
  const handleNext = () => {
    setCurrentIndex(v => (v + 1) % 5)
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative max-x-3xl mx-auto p-6 bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow-md">
      <div className="relative w-full overflow-hidden rounded-xl">
	{error && <div className="text-sm text-amber-500 dark:text-amber-300 text-center mb-4">
	  'error while fetching quotes!!'
	</div>}
	{<div className="flex transition-transform duration-500 ease-in"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
          {(data ? data : fallbackData).slice(0, 6).map((item, index) => (
            <Quote key={index} quote={item.q} author={item.a} />
          ))}
        </div>}
      </div>
      <Button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-grey-700 rounded-full shadow-lg hover:bg-indigo-400 focus:bg-indigo-400"
        color="primary" variant="ghost" size="sm" onPress={handlePrevious}>
        &lt;</Button>
      <Button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-grey-700 rounded-full shadow-lg hover:bg-indigo-400 focus:bg-indigo-400"
        color="primary" variant="ghost" size="sm" onPress={handleNext}>
        &gt;</Button>
    </div>
  )
}
