import Link from 'next/link'
import Image from 'next/image'
import { blogType } from "../type/blog"

export default async function BlogPosts() {
  const resp = await fetch('http://localhost/api/blogs')
  const blogs:BlogType[] = await resp.json()
  console.info(blogs)
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 sm:text-4xl">
            My toughts about programming, and stuff
          </h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            Passionate about writing innavative, and up-to-datte content.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {blogs.slice(0,3).map((blog) => (
	      <Link href={`/blog/${blog.id}`} key={blog.id} className="block group">
              <div className="relative">
                <div className="relative h-64 overflow-hidden shadow-xl rounded-lg">
		  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={`/${blog.image}`} width={500} height={500} 
                    alt={blog.title} quality={50} loading="lazy"
                    className="w-full h-full object-fit transform transition-all duration-500 hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-gray-500 dark:text-gray-200">
                    {blog.body}
                  </p>
                </div>
              </div>
	      </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
