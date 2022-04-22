/*
  Warnings:

  - You are about to drop the column `authorS` on the `Resource` table. All the data in the column will be lost.
  - Added the required column `authors` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resourceType` to the `Resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priority` to the `ResourceSuggestion` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EnumResourceResourceType" AS ENUM ('Article', 'Podcast', 'Video');

-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "authorS",
ADD COLUMN     "authors" JSONB NOT NULL,
ADD COLUMN     "resourceType" "EnumResourceResourceType" NOT NULL;

-- AlterTable
ALTER TABLE "ResourceSuggestion" ADD COLUMN     "priority" INTEGER NOT NULL;
