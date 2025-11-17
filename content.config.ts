import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: "data",
      source: "projects/**.json",
      schema: z.object({
        project_name: z.string(),
        description: z.string(),
        image: z.string(),
        url: z.string(),
      }),
    }),
  },
});
