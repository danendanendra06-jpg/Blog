export const articles = [
  {
    id: 1,
    slug: 'sharpening-the-axe',
    title: 'Sharpening the Axe',
    tag: 'Preparation',
    readingTime: '4 min read',
    publishDate: 'May 20, 2026',
    description: 'Give me six hours to chop down a tree and I will spend the first four sharpening the axe. Why preparation is key in software engineering.',
    // We will use React components to render the content natively in the page instead of raw HTML string for better safety and Next.js optimization.
    // The content is small enough to just put directly into the page component or a separate component file.
  },
  {
    id: 2,
    slug: 'industry-perspectives',
    title: 'Some Industry Perspectives',
    tag: 'Industry',
    readingTime: '8 min read',
    publishDate: 'May 20, 2026',
    description: 'An overview of how modern tech landscapes are evolving, focusing on ethical AI, data privacy, and the responsibilities of developers.',
  },
  {
    id: 3,
    slug: 'self-development',
    title: 'Need for Self Development',
    tag: 'Growth',
    readingTime: '3 min read',
    publishDate: 'May 20, 2026',
    description: 'Technology moves fast, but the human mind can adapt. Exploring continuous learning, mental well-being, and career growth.',
  }
];

export function getArticleBySlug(slug) {
  return articles.find(article => article.slug === slug);
}
