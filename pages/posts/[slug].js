import Head from 'next/head';
import { getPost, getSlugs } from '../../lib/posts';

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

// Only executed on the server. Server side.
export async function getStaticProps({ params: { slug } }) {
  console.log('[Post] getStaticProps: ', slug);
  const post = await getPost(slug);
  return {
    props: { post },
  };
}

export default function postPage({ post: { title, body, date } }) {
  console.log('[Post] render: ', title);
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
