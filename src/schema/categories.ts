import { z } from "zod";

export const CreateCategorySchema = z.object({
  name: z.string(),
});

export type createCategorySchema = z.infer<typeof CreateCategorySchema>;
