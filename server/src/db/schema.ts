
import { serial, text, pgTable, timestamp } from 'drizzle-orm/pg-core';

export const messagesTable = pgTable('messages', {
  id: serial('id').primaryKey(),
  text: text('text').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// TypeScript type for the table schema
export type Message = typeof messagesTable.$inferSelect;
export type NewMessage = typeof messagesTable.$inferInsert;

// Export all tables for proper query building
export const tables = { messages: messagesTable };
