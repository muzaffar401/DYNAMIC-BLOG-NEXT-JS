import { allPosts } from '@/.contentlayer/generated'
import PostCard from '@/components/Post_Card';
export default function HomePage() {
  return (
    <>
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Writing on software design, company building, and the aerospace industry.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          All of my long-form thoughts on programming, leadership, product design, and
          more, collected in chronological order.
        </p>
      </header>
      <div className='mt-16 sm:mt-20'>
        <div className='md:border-l-2 md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 '>
          <div className='flex flex-col max-w-3xl mb-16 space-y-16'>
            {allPosts.map((post) => (
              <PostCard key={post._id} post={post} />
              
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
