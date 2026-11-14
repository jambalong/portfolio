import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()),
    archived: z.boolean().default(false),
  }),
});

export const collections = { blog };
