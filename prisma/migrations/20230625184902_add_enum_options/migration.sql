/*
  Warnings:

  - The `intervalUnit` column on the `Events` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `reminderUnit` column on the `Events` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `priority` column on the `Todos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `notesView` column on the `UserPreferences` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `notesSort` column on the `UserPreferences` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `notesSortDirection` column on the `UserPreferences` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `interval` on table `Events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reminder` on table `Events` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "TodoPriority" AS ENUM ('unset', 'low', 'medium', 'high', 'very_high');

-- CreateEnum
CREATE TYPE "TimeIntervalUnit" AS ENUM ('unset', 'minute', 'hour', 'day', 'week', 'month', 'year');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin', 'user');

-- CreateEnum
CREATE TYPE "notesSortDirection" AS ENUM ('asc', 'desc');

-- CreateEnum
CREATE TYPE "notesSort" AS ENUM ('created', 'updated', 'alphabetical', 'custom');

-- CreateEnum
CREATE TYPE "NotesView" AS ENUM ('list', 'grid', 'tile');

-- AlterTable
ALTER TABLE "Events" ALTER COLUMN "start" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "end" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "interval" SET NOT NULL,
ALTER COLUMN "interval" SET DEFAULT 0,
DROP COLUMN "intervalUnit",
ADD COLUMN     "intervalUnit" "TimeIntervalUnit" NOT NULL DEFAULT 'unset',
ALTER COLUMN "reminder" SET NOT NULL,
ALTER COLUMN "reminder" SET DEFAULT 0,
DROP COLUMN "reminderUnit",
ADD COLUMN     "reminderUnit" "TimeIntervalUnit" NOT NULL DEFAULT 'unset';

-- AlterTable
ALTER TABLE "Todos" DROP COLUMN "priority",
ADD COLUMN     "priority" "TodoPriority" NOT NULL DEFAULT 'unset';

-- AlterTable
ALTER TABLE "UserOAuths" ADD COLUMN     "roles" TEXT[];

-- AlterTable
ALTER TABLE "UserPreferences" DROP COLUMN "notesView",
ADD COLUMN     "notesView" "NotesView" NOT NULL DEFAULT 'grid',
DROP COLUMN "notesSort",
ADD COLUMN     "notesSort" "notesSort" NOT NULL DEFAULT 'created',
DROP COLUMN "notesSortDirection",
ADD COLUMN     "notesSortDirection" "notesSortDirection" NOT NULL DEFAULT 'desc';

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'user';
