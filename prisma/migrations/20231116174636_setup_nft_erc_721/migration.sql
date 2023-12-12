-- CreateTable
CREATE TABLE "ERC721" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "external_url" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "animation_url" TEXT,
    "youtube_url" TEXT
);

-- CreateTable
CREATE TABLE "Attribute" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "display_type" TEXT,
    "trait_type" TEXT,
    "value" TEXT,
    "erc721Id" INTEGER NOT NULL,
    CONSTRAINT "Attribute_erc721Id_fkey" FOREIGN KEY ("erc721Id") REFERENCES "ERC721" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ERC721_uuid_key" ON "ERC721"("uuid");

-- CreateIndex
CREATE INDEX "ERC721_id_uuid_idx" ON "ERC721"("id", "uuid");
