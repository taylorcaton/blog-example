export default {
    title: `Test Post`,
    tags: ['react', 'navi', 'first'],
    spoiler: "A test file that shows that markdown files can be easily served",
    getContent: () => import('./document.mdx'),
  }