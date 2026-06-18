import {
  boolean,
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  type PgTableWithColumns,
} from "drizzle-orm/pg-core";

const beverageTable: Omit<PgTableWithColumns<any>, 'enableRLS'> = pgTable("beverage", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  image: text("image"),
  category: text("category"),
  volume: integer("volume"),
  stock: integer("stock").default(0).notNull(),
  isAvailable: boolean("is_available").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}).enableRLS();

export const beverage: typeof beverageTable = beverageTable;
