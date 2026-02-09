import { prisma } from "@prisma/prisma";

export const getAllImagenes = async () => {
  return prisma.productoImagenes.findMany({ include: { producto: true } });
};

export const getImagenById = async (id: number) => {
  return prisma.productoImagenes.findUnique({ where: { idImagen: id }, include: { producto: true } });
};

export const createImagen = async (data: any) => {
  return prisma.productoImagenes.create({ data });
};

export const updateImagen = async (id: number, data: any) => {
  return prisma.productoImagenes.update({ where: { idImagen: id }, data });
};

export const deleteImagen = async (id: number) => {
  return prisma.productoImagenes.delete({ where: { idImagen: id } });
};
