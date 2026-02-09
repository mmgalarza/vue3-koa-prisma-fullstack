# Ventas

Base: `http://localhost:{PORT}` (por defecto `3000`)

Este recurso se expone actualmente solo bajo dashboard (ADMIN).

## POST `/api/dashboard/ventas`
Crea una venta y descuenta stock `FINAL`.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Body (JSON)** (Zod `crearVentaSchema`):
- `idProducto` (number int positive, required)
- `cantidad` (number positive, required)
- `idAlmacen` (number int positive, required)
- `idListaPvp` (number int positive, required)

**Reglas de negocio (service)**
- Exige stock suficiente en `AjustesStockDetalle` con `estado=FINAL`.
- Exige precio existente para `(idProducto, idListaPvp)` en `Precios`.
- Descuenta stock FINAL creando un `AjustesStockDetalle` con `cantidad` negativa.

**Response 201**
Devuelve el registro creado por `prisma.ventas.create(...)`.

**TODO**
- En `prisma/schema.prisma` no aparece el modelo `Ventas`, por lo que no se puede documentar con precisión la forma del objeto de respuesta (campos/ids). Confirmar schema/cliente Prisma en uso.

**Errores típicos**
- `Stock FINAL insuficiente para la venta`
- `No existe precio para este producto en la lista indicada`

**Códigos de estado**
- `201` creado
- `400` body inválido / regla de negocio
- `401` sin token / token inválido
- `403` no admin
