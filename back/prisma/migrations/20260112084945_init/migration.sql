/*
  Warnings:

  - The values [REGISTRADO] on the enum `Rol` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Rol_new" AS ENUM ('ADMIN', 'USER');
ALTER TABLE "public"."Usuarios" ALTER COLUMN "rol" DROP DEFAULT;
ALTER TABLE "Usuarios" ALTER COLUMN "rol" TYPE "Rol_new" USING ("rol"::text::"Rol_new");
ALTER TYPE "Rol" RENAME TO "Rol_old";
ALTER TYPE "Rol_new" RENAME TO "Rol";
DROP TYPE "public"."Rol_old";
ALTER TABLE "Usuarios" ALTER COLUMN "rol" SET DEFAULT 'USER';
COMMIT;

-- AlterTable
ALTER TABLE "Usuarios" ALTER COLUMN "rol" SET DEFAULT 'USER';
