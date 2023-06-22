import { getSortedPostsData } from '../lib/posts';
import Links from './links';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: { allPostsData: any }) {
  return (
    <main
      className='bg-hero dark:bg-hero-dark min-h-screen flex flex-col justify-center items-center text-center text-black dark:text-white'
    >
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-slate-900 dark:text-white">Vithushan&apos;s Blog</h2>
            <p className="font-light text-slate-500 sm:text-xl dark:text-slate-400 mb-6">
              A blog about my life, my thoughts, and my projects.
            </p>

            <Links />
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {
              allPostsData.map(({ id, date, title, description, author, authorPfpUrl }: { id: string, date: string, title: string, description: string, author: string, authorPfpUrl: string }) => (
                <PostCard key={id} title={title} description={description} date={date} author={author} authorPfpUrl={authorPfpUrl} id={id} />
              ))
            }
          </div>
        </div>
      </section>

    </main>
  );
}

function PostCard({ title, description, date, author, authorPfpUrl, id }: { title: string, description: string, date: string, author: string, authorPfpUrl: string, id: string }) {
  return (
    <article className="p-6 bg-slate-50 border border-slate-200 shadow-md dark:bg-slate-900 dark:border-slate-700">
      <div className="flex justify-between items-center mb-5 text-slate-500">
        <span className="text-sm">{date}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white"><a href="#">{title}</a></h2>
      <p className="mb-5 font-light text-slate-500 dark:text-slate-400">{
        description
      }</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img className="w-7 h-7 rounded-full" src={
            authorPfpUrl
          } alt="avatar" />
          <span className="font-medium dark:text-white">
            {author}
          </span>
        </div>
        <a href={`posts/${id}`} className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
          Read more
          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </article>
  )
} 