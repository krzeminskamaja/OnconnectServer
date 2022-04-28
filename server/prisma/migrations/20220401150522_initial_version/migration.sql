-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "roles" TEXT[],
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "workplace" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PastSource" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PastSource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CurrentSource" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "sourceId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CurrentSource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SourceDetail" (
    "abstract" TEXT,
    "author" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "keyword" TEXT,
    "title" TEXT,
    "uniqueSourceKey" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SourceDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CurrentSourceToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PastSourceToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "SourceDetail_uniqueSourceKey_key" ON "SourceDetail"("uniqueSourceKey");

-- CreateIndex
CREATE UNIQUE INDEX "_CurrentSourceToUser_AB_unique" ON "_CurrentSourceToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CurrentSourceToUser_B_index" ON "_CurrentSourceToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PastSourceToUser_AB_unique" ON "_PastSourceToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PastSourceToUser_B_index" ON "_PastSourceToUser"("B");

-- AddForeignKey
ALTER TABLE "_CurrentSourceToUser" ADD FOREIGN KEY ("A") REFERENCES "CurrentSource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CurrentSourceToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PastSourceToUser" ADD FOREIGN KEY ("A") REFERENCES "PastSource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PastSourceToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
