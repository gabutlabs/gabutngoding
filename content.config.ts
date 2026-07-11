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
        url: z.string().optional(),
        github: z.string().optional(),
        is_private: z.boolean().optional().default(false),
        icon: z.string().optional(),
        technologies: z.array(z.string()).optional(),
        demo_credentials: z.object({
          username: z.string().optional(),
          password: z.string().optional(),
          note: z.string().optional()
        }).optional()
      }),
    }),
  },
});
