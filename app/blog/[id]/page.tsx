import { useParams } from 'next/navigation'
import { blogType } from "../../type/blog"

interface BlogProps {
  params: Promise<{
    id: number,
  }>,
}
export default async function BlogPost({params}, BlogProps) {
  const { id } = params
  if (!id) {redirect("/not-found")}

  const resp = await fetch(`http://localhost/api/blogs/${id}`)
  const blog:BlogType = await resp.json()
  if (!blog) {redirect("/not-found")}

  return (
              <article className="min-h-screen py-12 bg-grey-50 dark:bg-grey-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		  <div className="relative h-[250px] mb-8 rounded-xl overflow-hidden shadow-2xl">
		  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
                  <img
                    src={`/${blog.image}`}
                    alt={blog.title}
                    className="w-full h-full object-fit"
                  />
                  <h1 className="absolute bottom-8 left-8 right-8 text-4xl font-extrabold text-white">
                    {blog.title}
                  </h1>
                  </div>
                <div className="prose prose-lg dark:prose-invert max-w-none p-8">
                  <p className="text-gray-700 dark:text-gray-500 text-justify leading-relaved">
                    {blog.body}
                  </p>
                </div>
                </div>
              </article>
  )
}
