import { PrismaClient } from './prisma/prisma/client'

const prisma = new PrismaClient({})

async function main() {
  console.log('🌱 Seeding database...')

  // Limpiar tablas (orden correcto por FK)
  await prisma.productoImagenes.deleteMany()
  await prisma.productos.deleteMany()
  await prisma.categorias.deleteMany()

  // =========================
  // CATEGORÍAS PADRE
  // =========================

  const tecnologia = await prisma.categorias.create({
    data: {
      nombre: "Tecnología",
      descripcion: "Productos tecnológicos",
      icono: "mdi-laptop",
      tipo: "PRODUCTO"
    }
  })

  const hogar = await prisma.categorias.create({
    data: {
      nombre: "Hogar",
      descripcion: "Artículos para el hogar",
      icono: "mdi-home",
      tipo: "PRODUCTO"
    }
  })

  // =========================
  // SUBCATEGORÍAS
  // =========================

  const celulares = await prisma.categorias.create({
    data: {
      nombre: "Celulares",
      tipo: "PRODUCTO",
      idCategoriaPadre: tecnologia.idCategoria
    }
  })

  const laptops = await prisma.categorias.create({
    data: {
      nombre: "Laptops",
      tipo: "PRODUCTO",
      idCategoriaPadre: tecnologia.idCategoria
    }
  })

  const cocina = await prisma.categorias.create({
    data: {
      nombre: "Cocina",
      tipo: "PRODUCTO",
      idCategoriaPadre: hogar.idCategoria
    }
  })

  // =========================
  // PRODUCTOS
  // =========================

  const iphone = await prisma.productos.create({
    data: {
      nombre: "iPhone 15",
      descripcion: "Apple iPhone 15 128GB",
      precios: 999.99,
      stock: 25,
      idCategoria: celulares.idCategoria
    }
  })

  const samsung = await prisma.productos.create({
    data: {
      nombre: "Samsung S24",
      descripcion: "Samsung Galaxy S24",
      precios: 899.99,
      stock: 30,
      idCategoria: celulares.idCategoria
    }
  })

  const macbook = await prisma.productos.create({
    data: {
      nombre: "MacBook Pro M3",
      descripcion: "Apple MacBook Pro con chip M3",
      precios: 1899.99,
      stock: 10,
      idCategoria: laptops.idCategoria
    }
  })

  const licuadora = await prisma.productos.create({
    data: {
      nombre: "Licuadora Oster",
      descripcion: "Licuadora de alta potencia",
      precios: 120.5,
      stock: 50,
      idCategoria: cocina.idCategoria
    }
  })

  // =========================
  // IMÁGENES
  // =========================

  await prisma.productoImagenes.createMany({
    data: [
      {
        idProducto: iphone.idProducto,
        url: "https://example.com/iphone1.jpg",
        alt: "iPhone 15",
        principal: true
      },
      {
        idProducto: iphone.idProducto,
        url: "https://example.com/iphone2.jpg",
        alt: "iPhone 15 lateral"
      },
      {
        idProducto: samsung.idProducto,
        url: "https://example.com/s24.jpg",
        alt: "Samsung S24",
        principal: true
      },
      {
        idProducto: macbook.idProducto,
        url: "https://example.com/macbook.jpg",
        alt: "MacBook Pro",
        principal: true
      },
      {
        idProducto: licuadora.idProducto,
        url: "https://example.com/licuadora.jpg",
        alt: "Licuadora Oster",
        principal: true
      }
    ]
  })

  console.log('✅ Seed completado')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
