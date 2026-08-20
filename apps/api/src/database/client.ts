import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../generated/prisma/client.js";

let prisma: PrismaClient | undefined;

function getConnectionString() {
  const connectionString =
    process.env.DATABASE_POSTGRES_PRISMA_URL ?? process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("A Neon database connection variable is required");
  }

  return connectionString;
}

export function getPrisma() {
  if (!prisma) {
    const adapter = new PrismaNeon({ connectionString: getConnectionString() });
    prisma = new PrismaClient({ adapter });
  }

  return prisma;
}
