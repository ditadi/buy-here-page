
import { z } from 'zod';

// Simple message schema
export const messageSchema = z.object({
  id: z.number(),
  text: z.string(),
  created_at: z.coerce.date()
});

export type Message = z.infer<typeof messageSchema>;

// Input schema for creating messages
export const createMessageInputSchema = z.object({
  text: z.string()
});

export type CreateMessageInput = z.infer<typeof createMessageInputSchema>;
