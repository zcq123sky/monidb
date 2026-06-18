import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const databaseUrl = Deno.env.get("DATABASE_URL")!;
const client = postgres(databaseUrl, { prepare: false });
const db = drizzle(client);   // ✅ 直接传入 client

export {db};
