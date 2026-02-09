import { prisma } from "@prisma/prisma"; 
import bcrypt from 'bcrypt';
import { ListarUsuariosDto } from "./dto";

export const crearUsuario = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return prisma.usuarios.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
};

export const actualizarUsuario = async (id: number, data: any) => {
  const updateData: any = { ...data };

  // Si se proporciona password, se debe hashear
  if (data.password) {
    updateData.password = await bcrypt.hash(data.password, 10);
  }

  return prisma.usuarios.update({
    where: { idUsuario: id },
    data: updateData,
  });
};

export const obtenerUsuarios = async (filters?: ListarUsuariosDto) => {
  return prisma.usuarios.findMany({
    skip: filters?.skip ? filters.skip * (filters.take || 10) : undefined,
    take: filters?.take,
    where: {
      rol: 'USER', // Rigor: El Admin solo ve clientes
      activo: filters?.activo,
      OR: filters?.search
        ? [
            { username: { contains: filters.search, mode: "insensitive" } },
            { email: { contains: filters.search, mode: "insensitive" } },
            { nombre: { contains: filters.search, mode: "insensitive" } }, // Sugerencia: buscar también por nombre
          ]
        : undefined,
    },
    include: {
      cliente: true
    },
    orderBy: {
      idUsuario: 'desc' // Consistencia: los más nuevos primero
    }
  });
};

export const obtenerUsuarioPorId = async (id: number) => {
  return prisma.usuarios.findUnique({
    where: { idUsuario: id },
    include: {
      cliente: true
    }
  });
};

export const eliminarUsuario = async (id: number) => {
  return prisma.usuarios.delete({ where: { idUsuario: id } });
};