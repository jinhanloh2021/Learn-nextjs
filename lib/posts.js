import { readFile, readdir } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

// Used in getStaticProps. Server side.
export const getPost = async (slug) => {
  const source = await readFile(`content/posts/${slug}.md`, 'utf8');
  const {
    data: { date, title },
    content,
  } = await matter(source);
  const body = marked(content);
  return { date, title, body };
};

export async function getSlugs() {
  const files = await readdir('content/posts');
  const suffix = '.md';
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
}

// export async function getTitles() {
//   slugs = await getSlugs();
//   const titleList = slugs.map(async (slug) => {
//     const { date, title, body } = await getPost(slug);
//     return title;
//   });
//   return titleList;
// }
