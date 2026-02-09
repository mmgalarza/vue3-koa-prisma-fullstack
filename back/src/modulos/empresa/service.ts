import { prisma } from '@prisma/prisma';
import { EmpresaUpdateDTO } from './dto';

export const getEmpresa = async () => {
  return prisma.empresas.findUnique({ where: { idEmpresa: 1 } });
};

export const updateEmpresa = async (data: EmpresaUpdateDTO) => {
  return prisma.empresas.update({
    where: { idEmpresa: 1 },
    data,
  });
};
