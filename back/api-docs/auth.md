# Auth

Base: `http://localhost:{PORT}` (por defecto `3000`)

## POST `/login`
Autentica un usuario y devuelve un JWT.

**Auth**: No

**Body (JSON)** (validado con Zod `LoginSchema`):
- `email` (string, required): email válido; se normaliza a lowercase y trim.
- `password` (string, required): mínimo 6 caracteres.

**Ejemplo request**
```http
POST /login
Content-Type: application/json

{
  "email": "admin@acme.com",
  "password": "123456"
}
```

**Response 200**
```json
{
  "message": "Login exitoso",
  "user": {
    "id": 1,
    "username": "admin",
    "email": "admin@acme.com",
    "nombre": "Admin",
    "rol": "ADMIN"
  },
  "token": "<jwt>"
}
```

**Códigos de estado**
- `200` login ok
- `401` credenciales inválidas (`{ "message": "Credenciales inválidas" }`)
- `400` body inválido / error de validación (`{ "message": "..." }`)

## POST `/register`
Registra un usuario.

**Auth**: No

**Body (JSON)** (validado con Zod `RegisterSchema`):
- `username` (string, required): min 3, max 50
- `email` (string, required): email válido; se normaliza a lowercase y trim
- `password` (string, required): mínimo 8 caracteres
- `nombre` (string, required): min 2, max 80

**Ejemplo request**
```http
POST /register
Content-Type: application/json

{
  "username": "juan",
  "email": "juan@acme.com",
  "password": "12345678",
  "nombre": "Juan Perez"
}
```

**Response 201**
```json
{
  "message": "Usuario registrado",
  "user": {
    "id": 10,
    "username": "juan",
    "email": "juan@acme.com",
    "nombre": "Juan Perez",
    "rol": "INVITADO"
  }
}
```

**Códigos de estado**
- `201` creado
- `400` body inválido / error de validación (`{ "message": "..." }`)

**Notas**
- El router expone `/login` y `/register` (no hay prefijo `/auth` en `src/routes/auth.routes.ts`).
- El JWT incluye al menos `{ id, rol }` y expira en 1h por defecto.
