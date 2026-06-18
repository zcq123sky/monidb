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

const toyTable: Omit<PgTableWithColumns<any>, 'enableRLS'> = pgTable("toy", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  image: text("image"),
  category: text("category"),
  material: text("material"),
  size: text("size"),
  stock: integer("stock").default(0).notNull(),
  isAvailable: boolean("is_available").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}).enableRLS();

export const toy: typeof toyTable = toyTable;
