// services/perfil.service.ts
import { prisma } from '@prisma/prisma';
import { UpdatePerfilInput, updatePerfilSchema } from './dto';

export const perfilService = {
  async actualizarPerfil(usuarioId: number, datos: UpdatePerfilInput) {
    // Separar datos
    const { cliente, ...datosUsuario } = datos;
    
    // Validaciones de negocio (NO validaciones de esquema)
    if (datosUsuario.email) {
      const emailExistente = await prisma.usuarios.findFirst({
        where: { 
          email: datosUsuario.email,
          NOT: { idUsuario: usuarioId }
        }
      });
      
      if (emailExistente) {
        throw new Error('El email ya está en uso');
      }
    }
    
    // Transacción para actualizar ambos
    return await prisma.$transaction(async (tx) => {
      // Actualizar usuario
      let usuarioActualizado;
      if (Object.keys(datosUsuario).length > 0) {
        usuarioActualizado = await tx.usuarios.update({
          where: { idUsuario: usuarioId },
          data: datosUsuario,
          include: { cliente: true }
        });
      } else {
        usuarioActualizado = await tx.usuarios.findUnique({
          where: { idUsuario: usuarioId },
          include: { cliente: true }
        });
      }
      
      // Actualizar cliente si existe
      if (cliente && usuarioActualizado?.cliente) {
        const clienteActualizado = await tx.clientes.update({
          where: { idCliente: usuarioActualizado.cliente.idCliente },
          data: cliente
        });
        
        return {
          ...usuarioActualizado,
          cliente: clienteActualizado
        };
      }
      
      return usuarioActualizado;
    });
  },
  
  async obtenerPerfil(usuarioId: number) {
    const perfil = await prisma.usuarios.findUnique({
      where: { idUsuario: usuarioId },
      include: { cliente: true }
    });
    
    if (!perfil) {
      throw new Error('Usuario no encontrado');
    }
    
    // Transformar respuesta (eliminar password)
    const { password, ...perfilSinPassword } = perfil;
    return perfilSinPassword;
  }
};

