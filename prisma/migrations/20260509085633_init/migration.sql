-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phonenumber` VARCHAR(191) NOT NULL,
    `skill` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `experience` INTEGER NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `resume` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
