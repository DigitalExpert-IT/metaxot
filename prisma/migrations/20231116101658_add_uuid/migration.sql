/*
  Warnings:

  - You are about to drop the column `uudi` on the `ERC721` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ERC721" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "external_url" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "uuid" TEXT
);
INSERT INTO "new_ERC721" ("description", "external_url", "id", "image", "name") SELECT "description", "external_url", "id", "image", "name" FROM "ERC721";
DROP TABLE "ERC721";
ALTER TABLE "new_ERC721" RENAME TO "ERC721";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
