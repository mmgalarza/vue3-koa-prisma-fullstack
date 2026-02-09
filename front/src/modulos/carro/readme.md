carro/
├─ store.ts               # Pinia store centralizado
├─ contract.ts            # Interfaces: CarroItem, OperacionDetalle, Cliente
├─ service.ts             # Funciones backend
├─ api.ts                 # Wrapper fetch @auth/api
├─ items/
│   └─ Detalle.vue        # Cada línea de producto (item del carro)
├─ vistaReducida.vue      # Mini-carro: Cabeza + lista compacta de Detalle
├─ vistaCompleta.vue      # Carro completo: Cabeza + lista completa de Detalle
└─ pagina.vue             # Página /carro: usa vistaCompleta + checkout
