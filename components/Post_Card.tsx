import { Post } from "@/.contentlayer/generated"
import formatDate from "@/lib/DateFormat"
import { ArrowRightIcon, CalendarIcon } from "lucide-react"
import Link from "next/link"

interface Props{
    post:Post
}
const PostCard = ({post}:Props) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
        <div className="md:col-span-3 relative group flex flex-col items-start">
            <h2 className="font-semibold text-base tracking-tight text-zinc-800 dark:text-zinc-100">
                <div className="absolute z-0 bg-purple-100/50 -inset-x-4 -inset-y-6 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-purple-800/20" />
                <Link href={post.slug}>
                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                <span className="relative z-10">{post.title}</span>
                </Link>
            </h2>
            <span className="relative z-10 order-first flex items-center text-xs text-zinc-900 dark:text-zinc-500 uppercase font-semibold">
                <CalendarIcon className="w-3 h-3 mr-1"/>
                <span>{formatDate(post.date)}</span>
            </span>
            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {post.description}
            </p>
            <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-purple-500">
                    <span>Read article</span>
                    <ArrowRightIcon className="w-4 h-4 ml-1"/>
            </div>
        </div>
    </article>
  )
}

export default PostCard