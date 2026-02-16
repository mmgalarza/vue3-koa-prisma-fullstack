/*
  Warnings:

  - The values [PREPARACION] on the enum `EstadoComanda` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EstadoComanda_new" AS ENUM ('PENDIENTE', 'SINCOCINA', 'FINALIZADA', 'ENTREGADA', 'ANULADA');
ALTER TABLE "public"."Comanda" ALTER COLUMN "estado" DROP DEFAULT;
ALTER TABLE "Comanda" ALTER COLUMN "estado" TYPE "EstadoComanda_new" USING ("estado"::text::"EstadoComanda_new");
ALTER TYPE "EstadoComanda" RENAME TO "EstadoComanda_old";
ALTER TYPE "EstadoComanda_new" RENAME TO "EstadoComanda";
DROP TYPE "public"."EstadoComanda_old";
ALTER TABLE "Comanda" ALTER COLUMN "estado" SET DEFAULT 'PENDIENTE';
COMMIT;
