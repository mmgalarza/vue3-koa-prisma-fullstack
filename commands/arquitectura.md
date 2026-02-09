BACKEND:

[ Vue o Nuxt SPA ]
        |
     fetch
        |
[ API REST ]
   Node.js
   Koa
   JWT
   Prisma
   MySQL

carpetas:

backend/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   ├── env.js
│   │   └── prisma.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── index.js
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   └── utils/
│       └── jwt.js
├── .env
├── package.json
└── nodemon.json
