import { PrismaClient } from "@prisma/client";

declare global {
    namespace NodeJS {
        interface Global {}
    }
}

//add prisma to the nodeJS global type
interface CustomNobeJsGlobal extends NodeJS.Global {
    prisma: PrismaClient;
}

//prevent multiple instances of Prisma Client in development
declare const global: CustomNobeJsGlobal;

const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
