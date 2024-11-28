import { allPosts } from "@/.contentlayer/generated"
import Mdx from "@/components/Mdx";
import formatDate from "@/lib/DateFormat";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slugParams.split("/"),
    }));
}
interface Props{
    params:{
        slug:string[];
    }
}
const PostDetailPage = ({params}:Props) => {
    const post = allPosts.find((post) => post.slugParams === params.slug[0]);
    if(!post){
        return redirect("/")
    }
    return (
        <div className="xl:relative">
            <div className="max-w-2xl mx-auto">
                <article>
                    <header className="flex flex-col">
                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">{post.title}</h1>
                        <time dateTime={post.date} className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"><span className="h-4 w-0.5 bg-zinc-200 dark:bg-zinc-500"/><span className="ml-2">{formatDate(post.date)}</span></time>
                    </header>
                    <div className="mt-8 prose dark:prose-invert pb-24 max-w-lg md:max-w-2xl">
                        <Mdx code={post.body.code}/>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default PostDetailPage