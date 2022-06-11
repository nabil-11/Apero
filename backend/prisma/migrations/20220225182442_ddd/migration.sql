-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tel` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'LIVREUR',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_tel_key`(`tel`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameCategory` VARCHAR(191) NULL,
    `DescProduit` VARCHAR(191) NULL,
    `iconCategory` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Category_nameCategory_key`(`nameCategory`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomProduit` VARCHAR(191) NULL,
    `DescProduit` VARCHAR(191) NULL,
    `ImageProduit` VARCHAR(191) NULL,
    `prixProduit` DECIMAL(65, 30) NULL,
    `unit` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `CatNom` VARCHAR(191) NULL,

    UNIQUE INDEX `Produit_ImageProduit_key`(`ImageProduit`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Command` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `etat` VARCHAR(191) NULL DEFAULT 'ATTENTE',
    `cartTotalAmount` DECIMAL(65, 30) NULL,
    `cartTotalQuantity` DECIMAL(65, 30) NULL,
    `NomClient` VARCHAR(191) NULL,
    `TelClient` VARCHAR(191) NULL,
    `Ville` VARCHAR(191) NULL,
    `Rue` VARCHAR(191) NULL,
    `Zip` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Produit` ADD CONSTRAINT `Produit_CatNom_fkey` FOREIGN KEY (`CatNom`) REFERENCES `Category`(`nameCategory`) ON DELETE CASCADE ON UPDATE CASCADE;
