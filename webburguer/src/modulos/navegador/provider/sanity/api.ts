import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url' // Named export recomendado

export const sanityClient = createClient({
  projectId: 'a0j5vi5q', 
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-01',
})

// Usamos el constructor actualizado
const builder = createImageUrlBuilder(sanityClient)

// Función para generar las URLs de las imágenes
export const urlFor = (source: any) => {
  if (!source) return null
  return builder.image(source)
}