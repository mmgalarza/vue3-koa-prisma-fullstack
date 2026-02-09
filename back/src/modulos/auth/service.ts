import { prisma } from "@prisma/prisma"; 
import bcrypt from 'bcrypt';

export const autenticarUsuario = async (email: string, password: string) => {
  const normalizedEmail = email.toLowerCase().trim();

  const user = await prisma.usuarios.findUnique({
    where: { email: normalizedEmail },
    include: { cliente: true }, 
  });

  if (!user) return null;
  if (!user.activo) return 'INACTIVO';

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return null;

  return user;
}

export const registrarUsuario = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return prisma.usuarios.create({
    data: {
      ...data,
        password: hashedPassword,
    },
  });
}
export const activarUsuario = async (idUsuario: number) => {
  return prisma.usuarios.update({
    where: { idUsuario },
    data: { activo: true },
  });
};

export const obtenerUsuarioPorEmail = async (email: string) => {
  return prisma.usuarios.findUnique({
    where: { email },
  });
};

export const resetearPassword = async (
  idUsuario: number,
  passwordNueva: string
) => {
  const hashedPassword = await bcrypt.hash(passwordNueva, 10);

  return prisma.usuarios.update({
    where: { idUsuario },
    data: {
      password: hashedPassword,
    },
  });
};

export const obtenerUsuarioPorId = async (idUsuario: number) => {
  return prisma.usuarios.findUnique({
    where: { idUsuario },
  });
};

