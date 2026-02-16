# API Documentation - Subdominio Cocina (Módulo Svelte)

## 1. Contexto y Reglas de Negocio
- **Exclusión**: Una comanda solo puede ser tomada si `idCocinero` es `null`.
- **Integridad**: No se puede finalizar una comanda si existen items con `estaListo: false`.
- **Notificación**: Todas las acciones de escritura (`PATCH`, `POST`) disparan un evento a través del **Supervisor (WS)**.

---

## 2. Endpoints de Comandas

### GET /comandas
**Descripción**: Obtiene el tablero actual de cocina (Pendientes, Abiertas, Listas).
- **Respuesta (200 OK)**:
  ```json
  [
    {
      "id": "uuid",
      "idOperacion": 123,
      "estado": "PENDIENTE | EN_PREPARACION | LISTA",
      "idCocinero": "uuid | null",
      "items": [...]
    }
  ]
´´´
PATCH /comandas/:id/tomar
Descripción: El cocinero reclama una comanda para sí mismo (Exclusión).

Guardián (DTO): TomarComandaSchema

Body: { "idCocinero": "uuid" }

Lógica del Especialista:

UPDATE Comanda SET idCocinero = :idCocinero, estado = 'EN_PREPARACION' WHERE id = :id AND idCocinero IS NULL

Respuestas:

200 OK: Comanda asignada con éxito.

409 Conflict: La comanda ya ha sido tomada por otro cocinero.

PATCH /items/:id/check
Descripción: Marca un item específico como listo o pendiente.

Guardián (DTO): CheckItemSchema

Body: { "estaListo": boolean }

Grito del Supervisor: Emite evento ITEM_ACTUALIZADO.

POST /comandas/:id/finalizar
Descripción: Cierra la comanda y la mueve al estado LISTA.

Validación: Zod verifica que el agregado Comanda cumpla que todos sus ComandaItem tengan estaListo: true.

Respuesta (200 OK): Objeto comanda actualizado.

Evento,Payload,Descripción
NUEVA_COMANDA,Comanda,Se genera cuando Ventas crea una Operación.
COMANDA_TOMADA,"{ id, idCocinero }",Notifica a todos que la comanda ya no está disponible.
ITEM_ACTUALIZADO,"{ idItem, estaListo }",Sincroniza el checking entre múltiples pantallas.
COMANDA_LISTA,{ id },Mueve la comanda visualmente a la columna de Cerradas.


´´´mermaid
graph TD
    subgraph "FRONTEND (Svelte)"
        UI[Vista Cocinero]
        Store[Svelte Store]
    end

    subgraph "BACKEND (Koa + NodeTS)"
        R[routes.ts - El Mapa]
        C[controller.ts - El Recepcionista]
        S[service.ts - El Especialista]
        DTO[schemas.dto.ts - El Guardián]
        SUP[super.ts - El Supervisor]
    end

    DB[(Postgres + Prisma)]

    %% Flujo de Acción
    UI -->|1. Petición HTTP| R
    R --> C
    C -->|2. Valida| DTO
    C -->|3. Ejecuta| S
    S -->|4. Persiste| DB
    
    %% Flujo de Supervisión
    S -->|5. Informa éxito| SUP
    SUP -->|6. Valida Evento| DTO
    SUP -->|7. Grito WebSocket| Store
    Store -->|8. Actualiza UI| UI
´´´