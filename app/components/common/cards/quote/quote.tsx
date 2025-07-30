import { Card, CardBody } from '@heroui/card';

interface QuoteProps {
  quote: string,
  author: string,
}

export default function Quote({quote, author}: QuoteProps) {
  return (
    <div className="w-full flex-shrink-0 p-2 transition-shadow duriton-300">
    <Card className="bg-white dark:bg-gray-700 shadow-md hover:shadow-hg ">
      <CardBody>
        <p className="text-xl text-justify text-grey-900 mb-4">{quote}</p>
        <p className='text-sm text-semibold text-grey-700 text-right'>- {author}</p>
      </CardBody>
    </Card>
    </div>
  );
}
