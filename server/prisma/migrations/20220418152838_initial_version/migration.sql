/*
  Warnings:

  - You are about to drop the column `workplace` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `CurrentSource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PastSource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SourceDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CurrentSourceToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PastSourceToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CurrentSourceToUser" DROP CONSTRAINT "_CurrentSourceToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_CurrentSourceToUser" DROP CONSTRAINT "_CurrentSourceToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_PastSourceToUser" DROP CONSTRAINT "_PastSourceToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_PastSourceToUser" DROP CONSTRAINT "_PastSourceToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "workplace",
ADD COLUMN     "calendar" JSONB;

-- DropTable
DROP TABLE "CurrentSource";

-- DropTable
DROP TABLE "PastSource";

-- DropTable
DROP TABLE "SourceDetail";

-- DropTable
DROP TABLE "_CurrentSourceToUser";

-- DropTable
DROP TABLE "_PastSourceToUser";

-- CreateTable
CREATE TABLE "ResourceHistory" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "readDate" TIMESTAMP(3),
    "sourceIDId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userIDId" TEXT NOT NULL,

    CONSTRAINT "ResourceHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResourceSuggestion" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "ResourceIDId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userIDId" TEXT NOT NULL,

    CONSTRAINT "ResourceSuggestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "abstract" TEXT NOT NULL,
    "authorS" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "relaseDate" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Keyword" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Keyword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Synonym" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "keywordIdId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Synonym_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_KeywordToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_KeywordToResource" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Resource_link_key" ON "Resource"("link");

-- CreateIndex
CREATE UNIQUE INDEX "Keyword_name_key" ON "Keyword"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Synonym_name_key" ON "Synonym"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_KeywordToUser_AB_unique" ON "_KeywordToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_KeywordToUser_B_index" ON "_KeywordToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_KeywordToResource_AB_unique" ON "_KeywordToResource"("A", "B");

-- CreateIndex
CREATE INDEX "_KeywordToResource_B_index" ON "_KeywordToResource"("B");

-- AddForeignKey
ALTER TABLE "ResourceHistory" ADD CONSTRAINT "ResourceHistory_sourceIDId_fkey" FOREIGN KEY ("sourceIDId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceHistory" ADD CONSTRAINT "ResourceHistory_userIDId_fkey" FOREIGN KEY ("userIDId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceSuggestion" ADD CONSTRAINT "ResourceSuggestion_ResourceIDId_fkey" FOREIGN KEY ("ResourceIDId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceSuggestion" ADD CONSTRAINT "ResourceSuggestion_userIDId_fkey" FOREIGN KEY ("userIDId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Synonym" ADD CONSTRAINT "Synonym_keywordIdId_fkey" FOREIGN KEY ("keywordIdId") REFERENCES "Keyword"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_KeywordToUser" ADD FOREIGN KEY ("A") REFERENCES "Keyword"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_KeywordToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_KeywordToResource" ADD FOREIGN KEY ("A") REFERENCES "Keyword"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_KeywordToResource" ADD FOREIGN KEY ("B") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
