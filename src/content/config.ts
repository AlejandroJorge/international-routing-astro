import { z, defineCollection } from "astro:content";
import { allowedLanguages } from "../config";

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		lang: z.enum(["en", "es", "fr"]),
		draft: z.boolean(),
	}),
});

export const collections = {
	blog: blogCollection,
};
