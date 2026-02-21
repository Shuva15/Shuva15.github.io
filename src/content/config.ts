import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    collection: z.string(), // series name
  }),
});

export const collections = {
  blog,
};