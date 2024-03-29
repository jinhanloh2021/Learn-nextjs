import Head from 'next/head';
import { getPost } from '../lib/posts';

// Only executed on the server. Server side.
export async function getStaticProps() {
  console.log('[FirstPost] getStaticProps');
  const post = await getPost('first-post');
  return {
    props: { post },
  };
}

export default function FirstPostPage({ post: { title, body, date } }) {
  console.log('[FirstPost] render: ', title);
  return (
    <>
      <Head>
        <title>{title + ' - My Blog'}</title>
      </Head>
      <main>
        <p>{date}</p>
        <h1>{title}</h1>
        <article dangerouslySetInnerHTML={{ __html: body }} />
      </main>
    </>
  );
}
