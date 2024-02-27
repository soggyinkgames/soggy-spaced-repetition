import {defineCollection, z} from "astro:content";

const booksCollection = defineCollection({
    schema: ({image}) => 
    z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string().max(50, {
            message: "You must keep the name to 50 characters or less",
        }),
    }),
});

const tagsCollection = defineCollection({
    schema: z.object({
        selected: z.string(),
        color: z.string(),
        location: z.string(),
        annotation: z.string(),
        book: z.string(),
    }),
});

export const collections = {
    'books': booksCollection,
    'tags': tagsCollection,
};