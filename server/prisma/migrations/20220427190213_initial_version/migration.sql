-- CreateEnum
CREATE TYPE "EnumResourceResourceType" AS ENUM ('Article', 'Podcast', 'Video');

-- CreateTable
CREATE TABLE "User" (
    "calendar" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "roles" TEXT[],
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

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
    "priority" INTEGER NOT NULL,
    "ResourceIDId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userIDId" TEXT NOT NULL,

    CONSTRAINT "ResourceSuggestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "abstract" TEXT NOT NULL,
    "authors" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "imageURL" TEXT,
    "link" TEXT NOT NULL,
    "relaseDate" TIMESTAMP(3) NOT NULL,
    "resourceType" "EnumResourceResourceType" NOT NULL,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Keyword" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "parentIDId" TEXT,
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
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

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
ALTER TABLE "Keyword" ADD CONSTRAINT "Keyword_parentIDId_fkey" FOREIGN KEY ("parentIDId") REFERENCES "Keyword"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
