/*
  Migración manual corregida
  - Añade idEmpresa de forma nullable
  - Migra datos existentes
  - Luego fuerza NOT NULL
  - Finalmente elimina tablas obsoletas
*/

-- =========================
-- 1. ELIMINAR FKs PRIMERO
-- =========================

ALTER TABLE "Config" DROP CONSTRAINT "Config_idActividadSelected_fkey";
ALTER TABLE "Config" DROP CONSTRAINT "Config_idEmpresaSelected_fkey";
ALTER TABLE "Config" DROP CONSTRAINT "Config_idUsuarioSelected_fkey";

ALTER TABLE "UsuarioEmpresa" DROP CONSTRAINT "UsuarioEmpresa_idEmpresa_fkey";
ALTER TABLE "UsuarioEmpresa" DROP CONSTRAINT "UsuarioEmpresa_idRol_fkey";
ALTER TABLE "UsuarioEmpresa" DROP CONSTRAINT "UsuarioEmpresa_idUsuario_fkey";

-- =========================
-- 2. NUEVAS COLUMNAS (NULLABLE)
-- =========================

ALTER TABLE "Actividad"
ADD COLUMN "activa" BOOLEAN NOT NULL DEFAULT false;

ALTER TABLE "Usuarios"
ADD COLUMN "idEmpresa" INTEGER;

ALTER TABLE "Registro"
ADD COLUMN "idEmpresa" INTEGER;

-- =========================
-- 3. MIGRAR DATOS EXISTENTES
-- =========================

-- Usuarios ← UsuarioEmpresa
UPDATE "Usuarios" u
SET "idEmpresa" = ue."idEmpresa"
FROM "UsuarioEmpresa" ue
WHERE ue."idUsuario" = u."idUsuario";

-- Registro ← Actividad
UPDATE "Registro" r
SET "idEmpresa" = a."idEmpresa"
FROM "Actividad" a
WHERE r."idActividad" = a."idActividad";

-- =========================
-- 4. FORZAR NOT NULL
-- =========================

ALTER TABLE "Usuarios"
ALTER COLUMN "idEmpresa" SET NOT NULL;

ALTER TABLE "Registro"
ALTER COLUMN "idEmpresa" SET NOT NULL;

-- =========================
-- 5. FOREIGN KEYS
-- =========================

ALTER TABLE "Usuarios"
ADD CONSTRAINT "Usuarios_idEmpresa_fkey"
FOREIGN KEY ("idEmpresa")
REFERENCES "Empresas"("idEmpresa")
ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "Registro"
ADD CONSTRAINT "Registro_idEmpresa_fkey"
FOREIGN KEY ("idEmpresa")
REFERENCES "Empresas"("idEmpresa")
ON DELETE RESTRICT ON UPDATE CASCADE;

-- =========================
-- 6. ÍNDICES
-- =========================

CREATE INDEX "Actividad_idEmpresa_activa_idx"
ON "Actividad" ("idEmpresa", "activa");

-- =========================
-- 7. ELIMINAR TABLAS OBSOLETAS
-- =========================

DROP TABLE "Config";
DROP TABLE "UsuarioEmpresa";
