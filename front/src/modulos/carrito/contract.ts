export interface CarroItem {
  idProducto: number;
  nombre: string;
  cantidad: number;
  precio: number;
  subtotal: number;
  imagen?: string;
}

export interface CarroResumen {
  totalItems: number;
  totalPrecio: number;
}

// Representa lo que el Backend espera recibir
export interface CarroOperacion {
  cliente: {
    nombre: string;
    email: string;
  };
  items: CarroItem[];
  resumen: CarroResumen;
}

// Representa la respuesta de confirmación del Backend
export interface OperacionConfirmada {
  idOperacion: string;
  status: string;
  fecha: string;
}