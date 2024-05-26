-- AlterTable
ALTER TABLE "Dialog" ALTER COLUMN "picture_url" DROP NOT NULL,
ALTER COLUMN "last_message" DROP NOT NULL,
ALTER COLUMN "sent_time" DROP NOT NULL;
