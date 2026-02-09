# Órdenes de Fabricación

Base: `http://localhost:{PORT}` (por defecto `3000`)

Este recurso se expone actualmente solo bajo dashboard (ADMIN).

Modelo Prisma `OrdenFabricacion` (campos principales):
- `idOrden` (number)
- `fecha` (datetime)
- `estado` (`PLANIFICADA` | `EN_PROCESO` | `FINALIZADA` | `CANCELADA`)
- `idProducto` (number)
- `cantidadPlan` (Decimal)
- `cantidadReal` (Decimal | null)
- `idAlmacen` (number)
- `observaciones` (string | null)

## POST `/api/dashboard/ordenes-fabricacion`
Crea una orden de fabricación.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Body (JSON)** (Zod `createOrdenFabricacionSchema`):
- `idProducto` (number int positive, required) — producto a fabricar
- `idAlmacen` (number int positive, required)
- `cantidadPlan` (number positive, required)

**Reglas de negocio (service)**
- El producto debe existir y tener `rol=FABRICADO`.
- Valida stock suficiente de cada componente del producto (stock por `AjustesStockDetalle`, según `EstadoStock`).
- Crea la orden en estado `PLANIFICADA`.
- Registra consumos (referencia) en `OrdenFabricacionConsumo`.

**Response 201**
Orden creada (`OrdenFabricacion`).

**Errores típicos**
- `Producto no existe`
- `Solo se pueden fabricar productos FABRICADOS`
- `Stock insuficiente para el componente <nombre>`

## POST `/api/dashboard/ordenes-fabricacion/:id/finalizar`
Finaliza una orden y realiza movimientos de stock.

**Auth**: Sí (JWT + `rol=ADMIN`)

**Path params**
- `id` (number) — `idOrden`

**Reglas de negocio (service)**
- La orden debe existir.
- La orden debe estar en `EN_PROCESO`.
- `cantidadReal` debe estar definida y ser > 0.

**Response 200**
```json
{
  "idOrden": 1,
  "cantidadProducida": 10,
  "costoTotal": 123.45,
  "costoUnitario": 12.345
}
```

**TODO**
- No hay endpoint documentado para pasar una orden a `EN_PROCESO` ni para setear `cantidadReal`; confirmar flujo completo.

**Códigos de estado**
- `201` create
- `200` finalizar
- `400` validación/reglas de negocio
- `401` sin token / token inválido
- `403` no admin
