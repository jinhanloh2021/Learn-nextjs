import { readFile } from 'fs/promises';
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
