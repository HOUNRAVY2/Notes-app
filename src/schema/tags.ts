import { z } from "zod";

export const TagsSchema = z.object({
  name: z.string(),
});

export type tagsSchemaType = z.infer<typeof TagsSchema>;
