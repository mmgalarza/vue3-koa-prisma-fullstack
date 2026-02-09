/*
  Warnings:

  - The values [FACTURADA] on the enum `EstadoOp` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EstadoOp_new" AS ENUM ('BORRADOR', 'CONFIRMADA', 'ANULADA');
ALTER TABLE "Operaciones" ALTER COLUMN "estado" TYPE "EstadoOp_new" USING ("estado"::text::"EstadoOp_new");
ALTER TYPE "EstadoOp" RENAME TO "EstadoOp_old";
ALTER TYPE "EstadoOp_new" RENAME TO "EstadoOp";
DROP TYPE "public"."EstadoOp_old";
COMMIT;

-- AlterTable
ALTER TABLE "Usuarios" ALTER COLUMN "activo" SET DEFAULT false;
