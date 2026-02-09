import { prisma } from '@prisma/prisma';
import { ClienteCreateDTO, ClienteUpdateDTO } from './dto';

export const getClientes = async () => {
  return prisma.clientes.findMany({
    include: { usuario: true, historial: true },
  });
};

export const getCliente = async (id: number) => {
  return prisma.clientes.findUnique({
    where: { idCliente: id },
    include: { usuario: true, historial: true },
  });
};

export const createCliente = async (data: ClienteCreateDTO) => {
  // Crear cliente usando usuario existente
  const cliente = await prisma.clientes.create({
    data: {
      idUsuario: data.idUsuario,
      nombre: data.nombre, // ahora obligatorio
      calle: data.calle || '',
      numero: data.numero,
      ciudad: data.ciudad || '',
      provincia: data.provincia || '',
      codigoPostal: data.codigoPostal || '',
      pais: data.pais || '',
      contacto: data.contacto,
      activo: data.activo ?? true,
    },
    include: { usuario: true },
  });

  return cliente;
};

export const updateCliente = async (id: number, data: ClienteUpdateDTO) => {
  return prisma.clientes.update({
    where: { idCliente: id },
    data,
  });
};

export const deleteCliente = async (id: number) => {
  return prisma.clientes.update({
    where: { idCliente: id },
    data: { activo: false },
  });
};
