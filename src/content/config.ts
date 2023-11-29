import {defineCollection, z} from "astro:content";

const booksCollection = defineCollection({
    schema: ({image}) => 
    z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
    }),
});

const tagsCollection = defineCollection({
    schema: z.object({
        red: z.string(),
        blue: z.string(),
        green: z.string(),
        yellow: z.string(),
    }),
});

export const collections = {
    'books': booksCollection,
    'tags': tagsCollection,
};