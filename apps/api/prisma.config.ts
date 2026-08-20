import "dotenv/config";
import { defineConfig } from "prisma/config";

const migrationUrl =
  process.env.DATABASE_POSTGRES_URL_NON_POOLING ??
  process.env.DATABASE_URL ??
  "postgresql://prisma:prisma@127.0.0.1:5432/binsaqib";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations"
  },
  datasource: {
    url: migrationUrl
  }
});
