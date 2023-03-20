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

export default function FirstPostPage({ post: { title, body } }) {
  console.log('[FirstPost] render: ', title);
  return (
    <>
      <Head>
        <title>{title + ' - My Blog'}</title>
      </Head>
      <main>
        <h1>{title}</h1>
        <p>{body}</p>
      </main>
    </>
  );
}
