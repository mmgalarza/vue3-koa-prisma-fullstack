export interface NavigationItem {
  name: string

  // navegación
  children?: NavigationItem[]
  scroll?: string
  path?: string
  href?: string

  // estado
  disable?: boolean

  // acción
  cb?: (item: NavigationItem) => void

  // visual
  icon?: string
}
