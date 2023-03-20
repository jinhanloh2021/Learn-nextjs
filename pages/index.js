import { getSlugs, getAllPosts } from '@/lib/posts';
import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps() {
  const posts = await getAllPosts();
  const slugs = await getSlugs();
  return {
    props: { slugs, posts },
  };
}

export default function Home({ slugs, posts }) {
  console.log('[HomePage] render posts: ', posts);
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/posts/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
