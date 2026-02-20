import { defineField, defineType } from 'sanity'

export const productoType = defineType({
  name: 'producto',
  title: 'Productos',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre del Producto',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'activo',
      title: 'Estado Activo',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'precio',
      title: 'Precio (Decimal)',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'stock',
      title: 'Stock Actual',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.integer().min(0),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría (Nivel 3 - HIJA)',
      description: 'Debe escalar: Familia > Madre > [Selecciona la Hija]',
      type: 'reference',
      to: [{ type: 'categoria' }],
      // Invariante de negocio: Solo permite seleccionar categorías tipo HIJA
      options: {
        filter: 'tipo == "HIJA"',
      },
      validation: (Rule) => Rule.required().error('Un producto debe pertenecer a una categoría tipo HIJA'),
    }),
    defineField({
      name: 'imagenes',
      title: 'Galería de Imágenes',
      description: 'La primera imagen con el check "Principal" será la destacada.',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo (SEO)',
            },
            {
              name: 'principal',
              type: 'boolean',
              title: '¿Es la imagen principal?',
              initialValue: false,
            },
            {
              name: 'orden',
              type: 'number',
              title: 'Orden de visualización',
              initialValue: 1,
            }
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'precio',
      media: 'imagenes.0', // Muestra la primera imagen de la galería en el listado
    },
  },
})