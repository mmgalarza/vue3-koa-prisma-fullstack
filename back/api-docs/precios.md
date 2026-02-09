# Precios y Listas PVP

Base: `http://localhost:{PORT}` (por defecto `3000`)

Este recurso se expone actualmente solo bajo dashboard (ADMIN).

Modelo Prisma `ListasPvp`:
- `idListaPvp` (number)
- `nombre` (string)
- `criterio` (`AUTOMATICO` | `MANUAL` | `COSTO_MARGEN` | `POR_CATEGORIA` | `PROMOCION`)
- `fechaGen` (datetime)

Modelo Prisma `Precios` (por item en lista):
- `idPrecio` (number)
- `idListaPvp` (number)
- `idProducto` (number)
- `precioVenta` (Decimal)
- `costoBase` (Decimal)
- `margen` (Decimal | null)

## POST `/api/dashboard/precios/generar-lista`
Genera una lista de precios automática para productos `rol=FABRICADO`.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Body (JSON)** (Zod `generarListaPreciosSchema`):
- `nombre` (string, required, min 1)
- `margen` (number, required, min 0) — porcentaje: 20 = 20%
- `productosIds` (number[], opcional) — limita a productos específicos

**Reglas de negocio (service)**
- Crea una `ListasPvp` con `criterio=AUTOMATICO`.
- Considera solo productos `FABRICADO` y `activo=true`.
- Para cada producto exige al menos una orden de fabricación `FINALIZADA`.
- Toma el último `costoUnitario` desde `AjustesStockDetalle` en estado `FABRICADO`.
- Calcula `precioVenta = costoUnitario * (1 + margen/100)` y crea registros en `Precios`.

**Response 201**
Devuelve la lista creada (no incluye los items `Precios` en la respuesta actual).

```json
{
  "idListaPvp": 1,
  "nombre": "Lista Enero",
  "criterio": "AUTOMATICO",
  "fechaGen": "2026-01-03T00:00:00.000Z"
}
```

**Errores típicos**
- `El producto "<nombre>" no tiene órdenes de fabricación finalizadas`

**Códigos de estado**
- `201` creado
- `400` body inválido / regla de negocio
- `401` sin token / token inválido
- `403` no admin
