import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import type { Sql } from "postgres";

const databaseUrl: string = Deno.env.get("DATABASE_URL")!;
const client: Sql = postgres(databaseUrl, { prepare: false });
const dbClient: ReturnType<typeof drizzle> = drizzle(client);

export const db: typeof dbClient = dbClient;
