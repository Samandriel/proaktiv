-- DropForeignKey
ALTER TABLE "Tracker" DROP CONSTRAINT "Tracker_trackerGroupId_fkey";

-- AlterTable
ALTER TABLE "Tracker" ALTER COLUMN "trackerGroupId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tracker" ADD CONSTRAINT "Tracker_trackerGroupId_fkey" FOREIGN KEY ("trackerGroupId") REFERENCES "TrackerGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
