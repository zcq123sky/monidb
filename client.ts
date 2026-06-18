import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import type { Sql } from "postgres";

const databaseUrl = Deno.env.get("DATABASE_URL");
if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}
const client: Sql = postgres(databaseUrl, { prepare: false });
const dbClient: ReturnType<typeof drizzle> = drizzle(client);

export const db: typeof dbClient = dbClient;
