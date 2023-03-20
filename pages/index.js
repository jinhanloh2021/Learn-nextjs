import { getSlugs } from '@/lib/posts';
import Head from 'next/head';

export async function getStaticProps() {
  const slugs = await getSlugs();
  return {
    props: {
      slugs,
    },
  };
}

export default function Home({ slugs }) {
  console.log('[HomePage] render slugs: ', slugs);
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </main>
    </>
  );
}
