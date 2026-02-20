import { defineField, defineType } from 'sanity'

export const categoriaType = defineType({
  name: 'categoria',
  title: 'Categorías',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre de la Categoría',
      type: 'string',
      validation: (Rule) => Rule.required().error('El nombre es obligatorio'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'nombre', // Toma el valor del campo 'nombre'
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('El slug es necesario para las URLs del frontend'),
    }),
    defineField({
      name: 'tipo',
      title: 'Nivel de Jerarquía (Enum)',
      type: 'string',
      options: {
        list: [
          { title: 'Familia (Nivel 1)', value: 'FAMILIA' },
          { title: 'Madre (Nivel 2)', value: 'MADRE' },
          { title: 'Hija (Nivel 3)', value: 'HIJA' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'activo',
      title: '¿Está activa?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'categoriaPadre',
      title: 'Categoría Superior',
      type: 'reference',
      to: [{ type: 'categoria' }],
      // Invariante: Ocultar si es nivel raíz (FAMILIA)
      hidden: ({ document }) => document?.tipo === 'FAMILIA',
      // Invariante: Validación de jerarquía estricta
      options: {
        filter: ({ document }) => {
          const tipoActual = document?.tipo
          if (tipoActual === 'MADRE') {
            return { filter: 'tipo == "FAMILIA"' }
          }
          if (tipoActual === 'HIJA') {
            return { filter: 'tipo == "MADRE"' }
          }
          return { filter: '_id == "none"' } // Bloquea cualquier selección para FAMILIA
        },
      },
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const doc = context.document
          if ((doc?.tipo === 'MADRE' || doc?.tipo === 'HIJA') && !value) {
            return 'Las categorías de nivel 2 y 3 deben tener un padre asignado'
          }
          return true
        }),
    }),
    defineField({
      name: 'icono',
      title: 'Icono / Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  // Previsualización en el Studio para ver el tipo al lado del nombre
  preview: {
    select: {
      nombre: 'nombre',
      tipo: 'tipo',
      padre: 'categoriaPadre.nombre',
      abuelo: 'categoriaPadre.categoriaPadre.nombre'
    },
    prepare({nombre, tipo, padre, abuelo}) {
      // Si es HIJA, muestra: [HIJA] Hamburguesa Pollo (Comidas > Hamburguesas)
      const camino = [abuelo, padre].filter(Boolean).join(' > ')
      return {
        title: nombre,
        subtitle: `${tipo} ${camino ? `(${camino})` : ''}`,
      }
    }
  },
})