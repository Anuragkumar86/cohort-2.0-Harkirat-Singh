-- CreateEnum
CREATE TYPE "Type" AS ENUM ('ADD', 'MUL');

-- CreateTable
CREATE TABLE "Calculator" (
    "id" SERIAL NOT NULL,
    "a" INTEGER NOT NULL,
    "b" INTEGER NOT NULL,
    "operation" "Type" NOT NULL,
    "result" INTEGER NOT NULL,

    CONSTRAINT "Calculator_pkey" PRIMARY KEY ("id")
);
