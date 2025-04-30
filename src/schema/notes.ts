import { z } from "zod";

export const CreateNoteSchema = z.object({
  title: z.string(),
  content: z.string(),
  categoryId: z.number().optional(),
});

export type createNoteSachemaType = z.infer<typeof CreateNoteSchema>;
