import type { UserRole } from '@auth/contract'
import type { NavigationItem } from '@componentes/my-navbar/navigationItem'

export type AppRole = UserRole | 'GUEST'

export interface AppUIConfig {
  layout: string
  root: LayoutKey
  menu: NavigationItem[]
}

export interface AppState {
  initialized: boolean
  role: AppRole
  ui: AppUIConfig
  error: string | null
  errorcode: number | null
  loading: boolean
}

export type LayoutKey = 'GuestRoot' | 'UserRoot' | 'AdminRoot'