import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://nextjs.org/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="http://localhost:3001/next.svg"
            className="h-8"
            alt="Next Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            My Blog
          </span>
        </a>
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
    </nav>
  );
}
