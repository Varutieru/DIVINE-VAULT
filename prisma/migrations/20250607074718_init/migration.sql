-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "item_name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "size_name" TEXT NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariation" (
    "variation_id" SERIAL NOT NULL,
    "item_id" INTEGER NOT NULL,
    "variation_name" TEXT NOT NULL,
    "size_id" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "ProductVariation_pkey" PRIMARY KEY ("variation_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_item_name_key" ON "Item"("item_name");

-- CreateIndex
CREATE UNIQUE INDEX "Size_size_name_key" ON "Size"("size_name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariation_variation_name_key" ON "ProductVariation"("variation_name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariation_item_id_size_id_key" ON "ProductVariation"("item_id", "size_id");

-- AddForeignKey
ALTER TABLE "ProductVariation" ADD CONSTRAINT "ProductVariation_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariation" ADD CONSTRAINT "ProductVariation_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
