-- DropForeignKey
ALTER TABLE "Usuarios" DROP CONSTRAINT "Usuarios_idEmpresa_fkey";

-- AlterTable
ALTER TABLE "Usuarios" ALTER COLUMN "idEmpresa" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresas"("idEmpresa") ON DELETE SET NULL ON UPDATE CASCADE;
