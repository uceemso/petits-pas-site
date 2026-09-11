import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date(),
    category: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    imageWidth: z.number().default(1200),
    imageHeight: z.number().default(800),
    slug: z.string(),
    readingTime: z.string().default('4 min de lecture'),
    draft: z.boolean().default(false)
  })
});

export const collections = { articles };
