-- CreateTable
CREATE TABLE "Category" (
    "Id" SERIAL NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "password" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "Id" SERIAL NOT NULL,
    "description" TEXT,
    "dt_inicial" TIMESTAMP(3) NOT NULL,
    "dt_final" TIMESTAMP(3) NOT NULL,
    "category_id" INTEGER NOT NULL,
    "user_Id" INTEGER NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Activity_category_id_key" ON "Activity"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "Activity_user_Id_key" ON "Activity"("user_Id");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
