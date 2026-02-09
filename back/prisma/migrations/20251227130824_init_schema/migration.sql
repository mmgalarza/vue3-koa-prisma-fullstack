/*
  Warnings:

  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "RolUsuario" AS ENUM ('ADMIN', 'OPERA', 'GRABA', 'REVISA');

-- AlterTable
ALTER TABLE "Actividad" ALTER COLUMN "idEmpresa" SET DEFAULT 1,
ALTER COLUMN "inicio" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "fin" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "estado" SET DEFAULT 'PENDIENTE';

-- AlterTable
ALTER TABLE "Almacenes" ALTER COLUMN "idEmpresa" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "Categorias" ALTER COLUMN "idEmpresa" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "Listas" ALTER COLUMN "idProveedor" SET DEFAULT 1,
ALTER COLUMN "refNo" SET DEFAULT '0001',
ALTER COLUMN "fecha" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ListasDet" ALTER COLUMN "idLista" SET DEFAULT 1,
ALTER COLUMN "idProducto" SET DEFAULT 1,
ALTER COLUMN "precio" SET DEFAULT 0,
ALTER COLUMN "descuento" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Productos" ALTER COLUMN "idCategoria" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "Proveedores" ADD COLUMN     "idEmpresa" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Registro" ALTER COLUMN "idTipoDoc" SET DEFAULT 'DOC',
ALTER COLUMN "comprobNo" SET DEFAULT '0000000001',
ALTER COLUMN "fecha" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "idActividad" SET DEFAULT 1,
ALTER COLUMN "idUsuario" SET DEFAULT 1,
ALTER COLUMN "idEmpresa" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "RegistroDet" ALTER COLUMN "idRegistro" SET DEFAULT 1,
ALTER COLUMN "idAlmacen" SET DEFAULT 1,
ALTER COLUMN "idProducto" SET DEFAULT 1,
ALTER COLUMN "precio" SET DEFAULT 0,
ALTER COLUMN "cantidad" SET DEFAULT 0,
ALTER COLUMN "descuento" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Talonarios" ALTER COLUMN "nombre" SET DEFAULT 'Talonario',
ALTER COLUMN "inicio" SET DEFAULT 1,
ALTER COLUMN "fin" SET DEFAULT 1000,
ALTER COLUMN "actual" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "TiposDoc" ALTER COLUMN "nombre" SET DEFAULT 'Documento',
ALTER COLUMN "propio" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Usuarios" ADD COLUMN     "rol" "RolUsuario" NOT NULL DEFAULT 'OPERA',
ALTER COLUMN "idEmpresa" SET DEFAULT 1;

-- DropTable
DROP TABLE "Roles";

-- AddForeignKey
ALTER TABLE "Proveedores" ADD CONSTRAINT "Proveedores_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresas"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;
