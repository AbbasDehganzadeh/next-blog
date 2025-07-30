import Link from 'next/link';

export default function Footer() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex items-center">
        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
          <li>
            <Link
              href="/"
              className="text-gray-900 dark:text-white hover:underline"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-gray-900 dark:text-white hover:underline"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-900 dark:text-white hover:underline"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
