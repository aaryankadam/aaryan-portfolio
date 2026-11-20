import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      order: z.number(),
      stack: z.array(z.string()),
      status: z.enum(['shipped', 'in-progress']),
      metric: z.string().optional(),
      repo: z.url().optional(),
      demo: z.url().optional(),
      cover: image().optional(),
    }),
});

export const collections = { projects };
