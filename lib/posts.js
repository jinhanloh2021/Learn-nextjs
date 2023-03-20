import { readFile } from 'fs/promises';

// Used in getStaticProps. Server side.
export const getPost = async (slug) => {
  const data = await readFile(`content/posts/${slug}.json`, 'utf-8');
  console.log('Data: ', data);
  return JSON.parse(data);
};
