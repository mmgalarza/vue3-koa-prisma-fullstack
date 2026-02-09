import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma";

const ensureRol = async (nombre: string, descripcion?: string) => {
  return prisma.roles.upsert({
    where: { nombre },
    update: { descripcion },
    create: { nombre, descripcion },
  });
};

const ensureUsuario = async (data: {
  username: string;
  email: string;
  password: string;
  nombre: string;
  activo?: boolean;
}) => {
  const existing = await prisma.usuarios.findUnique({ where: { username: data.username } });
  if (existing) return existing;

  const hashedPassword = await bcrypt.hash(data.password, 10);
  return prisma.usuarios.create({
    data: {
      username: data.username,
      email: data.email,
      password: hashedPassword,
      nombre: data.nombre,
      activo: data.activo ?? true,
    },
  });
};

const ensureEmpresaByNombre = async (nombre: string) => {
  const existing = await prisma.empresas.findFirst({ where: { nombre } });
  if (existing) return existing;

  return prisma.empresas.create({
    data: {
      nombre,
      direccion: "Calle Principal 123",
      ciudad: "Ciudad",
      pais: "Pais",
      telefono: "000-000",
      email: "empresa@demo.com",
      activo: true,
    },
  });
};

const ensureUsuarioEmpresa = async (data: { idUsuario: number; idEmpresa: number; idRol: number }) => {
  const existing = await prisma.usuarioEmpresa.findUnique({
    where: {
      idUsuario_idEmpresa: {
        idUsuario: data.idUsuario,
        idEmpresa: data.idEmpresa,
      },
    },
  });

  if (existing) {
    if (existing.idRol !== data.idRol) {
      return prisma.usuarioEmpresa.update({
        where: { idUsuarioEmpresa: existing.idUsuarioEmpresa },
        data: { idRol: data.idRol },
      });
    }
    return existing;
  }

  return prisma.usuarioEmpresa.create({ data });
};

const ensureActividad = async (idEmpresa: number) => {
  const existing = await prisma.actividad.findFirst({ where: { idEmpresa, nombre: "Actividad Demo" } });
  if (existing) return existing;

  const now = new Date();
  const fin = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  return prisma.actividad.create({
    data: {
      idEmpresa,
      nombre: "Actividad Demo",
      inicio: now,
      fin,
      estado: "ACTIVA",
    },
  });
};

const ensureConfig = async (ids: { idEmpresaSelected: number; idActividadSelected: number; idUsuarioSelected: number }) => {
  const existing = await prisma.config.findUnique({
    where: {
      idEmpresaSelected_idActividadSelected_idUsuarioSelected: ids,
    },
  });
  if (existing) return existing;

  return prisma.config.create({ data: ids });
};

const ensureAlmacen = async (idEmpresa: number) => {
  const existing = await prisma.almacenes.findFirst({ where: { idEmpresa, nombre: "Almacen Principal" } });
  if (existing) return existing;

  return prisma.almacenes.create({
    data: {
      idEmpresa,
      nombre: "Almacen Principal",
      direccion: "Bodega 1",
      responsable: "Encargado",
      activo: true,
    },
  });
};

const ensureCategoria = async (idEmpresa: number) => {
  const existing = await prisma.categorias.findFirst({ where: { idEmpresa, nombre: "General" } });
  if (existing) return existing;

  return prisma.categorias.create({
    data: {
      idEmpresa,
      nombre: "General",
      descripcion: "Categoria demo",
      activo: true,
    },
  });
};

const ensureProducto = async (idCategoria: number) => {
  const existing = await prisma.productos.findFirst({ where: { idCategoria, nombre: "Producto Demo" } });
  if (existing) return existing;

  return prisma.productos.create({
    data: {
      idCategoria,
      nombre: "Producto Demo",
      codigo: "P001",
      unidad: "UND",
      activo: true,
    },
  });
};

const ensureProveedor = async () => {
  const existing = await prisma.proveedores.findFirst({ where: { nombre: "Proveedor Demo" } });
  if (existing) return existing;

  return prisma.proveedores.create({
    data: {
      nombre: "Proveedor Demo",
      direccion: "Av. Proveedor 1",
      telefono: "111-111",
      email: "proveedor@demo.com",
      contacto: "Contacto",
      activo: true,
    },
  });
};

const ensureTalonario = async () => {
  const existing = await prisma.talonarios.findFirst({ where: { nombre: "Talonario Demo" } });
  if (existing) return existing;

  return prisma.talonarios.create({
    data: {
      nombre: "Talonario Demo",
      inicio: 1,
      fin: 9999,
      actual: 1,
    },
  });
};

const ensureTipoDoc = async (idTipoDoc: string, nombre: string, propio: boolean, idTalon?: number | null) => {
  const existing = await prisma.tiposDoc.findUnique({ where: { idTipoDoc } });
  if (existing) return existing;

  return prisma.tiposDoc.create({
    data: {
      idTipoDoc,
      nombre,
      propio,
      idTalon: idTalon ?? null,
    },
  });
};

const ensureLista = async (idProveedor: number) => {
  const existing = await prisma.listas.findFirst({ where: { idProveedor, refNo: "L-0001" } });
  if (existing) return existing;

  return prisma.listas.create({
    data: {
      idProveedor,
      refNo: "L-0001",
      fecha: new Date(),
      observacion: "Lista demo",
    },
  });
};

const ensureListaDet = async (idLista: number, idProducto: number) => {
  const existing = await prisma.listasDet.findFirst({ where: { idLista, idProducto } });
  if (existing) return existing;

  return prisma.listasDet.create({
    data: {
      idLista,
      idProducto,
      precio: "10.00",
      descuento: "0.00",
    },
  });
};

const ensureRegistro = async (data: {
  idTipoDoc: string;
  comprobNo: string;
  fecha: Date;
  idProveedor?: number | null;
  idActividad: number;
  idUsuario: number;
}) => {
  const existing = await prisma.registro.findFirst({
    where: {
      idTipoDoc: data.idTipoDoc,
      comprobNo: data.comprobNo,
      idActividad: data.idActividad,
      idUsuario: data.idUsuario,
    },
  });
  if (existing) return existing;

  return prisma.registro.create({
    data: {
      idTipoDoc: data.idTipoDoc,
      comprobNo: data.comprobNo,
      fecha: data.fecha,
      idProveedor: data.idProveedor ?? null,
      idActividad: data.idActividad,
      idUsuario: data.idUsuario,
    },
  });
};

const ensureRegistroDet = async (idRegistro: number, idAlmacen: number, idProducto: number) => {
  const existing = await prisma.registroDet.findFirst({ where: { idRegistro, idAlmacen, idProducto } });
  if (existing) return existing;

  return prisma.registroDet.create({
    data: {
      idRegistro,
      idAlmacen,
      idProducto,
      precio: "10.00",
      cantidad: "1.000",
      descuento: "0.00",
    },
  });
};

async function main() {
  const rolAdmin = await ensureRol("ADMIN", "Administrador");
  const rolUser = await ensureRol("USER", "Usuario");

  const empresa = await ensureEmpresaByNombre("Empresa Demo");

  const admin = await ensureUsuario({
    username: "admin",
    email: "admin@demo.com",
    password: "admin123",
    nombre: "Admin Demo",
    activo: true,
  });

  await ensureUsuarioEmpresa({ idUsuario: admin.idUsuario, idEmpresa: empresa.idEmpresa, idRol: rolAdmin.idRol });

  const actividad = await ensureActividad(empresa.idEmpresa);
  await ensureConfig({
    idEmpresaSelected: empresa.idEmpresa,
    idActividadSelected: actividad.idActividad,
    idUsuarioSelected: admin.idUsuario,
  });

  const almacen = await ensureAlmacen(empresa.idEmpresa);
  const categoria = await ensureCategoria(empresa.idEmpresa);
  const producto = await ensureProducto(categoria.idCategoria);

  const proveedor = await ensureProveedor();
  const talonario = await ensureTalonario();
  await ensureTipoDoc("FAC", "Factura", true, talonario.idTalon);

  const lista = await ensureLista(proveedor.idProveedor);
  await ensureListaDet(lista.idLista, producto.idProducto);

  const registro = await ensureRegistro({
    idTipoDoc: "FAC",
    comprobNo: "0000000001",
    fecha: new Date(),
    idProveedor: proveedor.idProveedor,
    idActividad: actividad.idActividad,
    idUsuario: admin.idUsuario,
  });

  await ensureRegistroDet(registro.idRegistro, almacen.idAlmacen, producto.idProducto);

  // Usuario demo adicional
  const user = await ensureUsuario({
    username: "user",
    email: "user@demo.com",
    password: "user123",
    nombre: "User Demo",
    activo: true,
  });
  await ensureUsuarioEmpresa({ idUsuario: user.idUsuario, idEmpresa: empresa.idEmpresa, idRol: rolUser.idRol });

  console.log("Seed OK:", {
    roles: [rolAdmin.nombre, rolUser.nombre],
    empresa: empresa.nombre,
    admin: admin.username,
    actividad: actividad.nombre,
  });
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
