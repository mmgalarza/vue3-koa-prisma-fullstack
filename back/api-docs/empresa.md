# Empresa

Base: `http://localhost:{PORT}` (por defecto `3000`)

Modelo Prisma `Empresas` (PK fija `idEmpresa = 1`). Campos:
- `idEmpresa` (number)
- `nombre` (string)
- `email` (string | null)
- `calle` (string)
- `numero` (string | null)
- `ciudad` (string)
- `provincia` (string)
- `codigoPostal` (string)
- `pais` (string)
- `contacto` (string | null)
- `activo` (boolean)

## GET `/api/empresa/`
Obtiene la empresa (público).

**Auth**: No

**Response 200**
```json
{
  "empresa": {
    "idEmpresa": 1,
    "nombre": "ACME",
    "email": "info@acme.com",
    "calle": "...",
    "numero": "...",
    "ciudad": "...",
    "provincia": "...",
    "codigoPostal": "...",
    "pais": "...",
    "contacto": "...",
    "activo": true
  }
}
```

**TODO**
- Confirmar comportamiento cuando no existe registro `idEmpresa=1` (podría devolver `empresa: null`).

## PUT `/api/dashboard/empresa`
Actualiza la empresa (ruta ADMIN del dashboard).

**Auth**: Sí (JWT + `rol=ADMIN`)

**Body (JSON)** (Zod `EmpresaUpdateSchema`):
- `nombre` (string, required, min 2)
- `email` (string, opcional, email)
- `calle` (string, opcional)
- `numero` (string, opcional)
- `ciudad` (string, opcional)
- `provincia` (string, opcional)
- `codigoPostal` (string, opcional)
- `pais` (string, opcional)
- `contacto` (string, opcional)
- `activo` (boolean, opcional)

**Ejemplo request**
```http
PUT /api/dashboard/empresa
Authorization: Bearer <jwt>
Content-Type: application/json

{
  "nombre": "ACME SRL",
  "email": "info@acme.com",
  "activo": true
}
```

**Response 200**
```json
{
  "empresa": { /* Empresas */ },
  "message": "Empresa actualizada correctamente"
}
```

**Códigos de estado**
- `200` ok
- `400` body inválido
- `401` sin token / token inválido
- `403` no admin
