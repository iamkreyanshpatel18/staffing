-- DropForeignKey
ALTER TABLE `jobapplication` DROP FOREIGN KEY `JobApplication_userId_fkey`;

-- DropIndex
DROP INDEX `JobApplication_userId_fkey` ON `jobapplication`;

-- AlterTable
ALTER TABLE `jobapplication` MODIFY `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `JobApplication` ADD CONSTRAINT `JobApplication_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
