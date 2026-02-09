import type { AppUIConfig } from './contract'
import { adminMenu, userMenu, guestMenu } from './menus'

export const uiConfig: Record<'ADMIN' | 'USER' | 'GUEST', AppUIConfig> = {
  ADMIN: {
    layout: 'AdminLayout',
    root: 'AdminRoot',
    menu: adminMenu,
  },
  USER: {
    layout: 'UserLayout',
    root: 'UserRoot',
    menu: userMenu,
  },
  GUEST: {
    layout: 'GuestLayout',
    root: 'GuestRoot',
    menu: guestMenu,
  },
}
