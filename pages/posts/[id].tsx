import { getAllPostIds, getPostData } from '../../lib/posts'
import Links from '../links'

export default function Post({ postData }: { postData: any }) {
    return (
        <main className="min-h-screen bg-hero dark:bg-hero-dark
        py-8 flex flex-col justify-center relative overflow-hidden lg:py-12
        ">
            <div className="w-full px-6 py-12 bg-white dark:bg-slate-900 shadow-xl shadow-slate-700/10 dark:shadow-slate-900/10 ring-1 ring-slate-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">

                <Links />

                <article className="mt-16 prose prose-slate mx-auto lg:prose-lg dark:prose-invert">
                    <h3 >{postData.title}</h3>
                    <div
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </article>
            </div>

        </main >

    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}