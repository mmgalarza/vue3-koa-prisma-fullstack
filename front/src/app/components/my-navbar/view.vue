<template lang="pug">
v-app-bar.px-md-4(
  color="primary"
  flat
)
  template(#prepend)
    v-app-bar-nav-icon(
      v-if="$vuetify.display.smAndDown"
      @click="drawer = !drawer"
    )

  // Logo / Icono
  v-img.me-sm-6(
    v-if="icon"
    :src="icon"
    max-width="36"
  )

  // Título
  span.text-h6.font-weight-medium.me-6 {{ title }}

  // Navegación desktop
  template(v-if="$vuetify.display.mdAndUp")
    template(v-for="(item, i) in navigation" :key="i")
      component(
        :is="resolveItemComponent(item)"
        :item="item"
        @select="handleSelect"
      )

  v-spacer

  // Usuario / Login
  template(#append)
    v-btn(icon="mdi-bell-outline" variant="text")

    v-menu
      template(#activator="{ props }")
        v-btn(v-bind="props" icon)
          v-avatar(
            v-if="user"
            :image="user.imageUrl"
          )
          v-icon(v-else) mdi-account-circle-outline

      v-list
        v-list-item(
          v-for="(item, i) in menuItems"
          :key="i"
          :disabled="item.disable"
          @click="handleSelect(item)"
        )
          template(#prepend)
            v-icon(v-if="item.icon") {{ item.icon }}
          v-list-item-title {{ item.name }}

v-navigation-drawer(
  v-if="$vuetify.display.smAndDown"
  v-model="drawer"
  location="top"
  temporary
)
  v-list(slim)
    component(
      v-for="(item, i) in navigation"
      :key="i"
      :is="resolveDrawerComponent(item)"
      :item="item"
      @select="handleSelect"
    )
</template>

<script setup lang="ts">
import { shallowRef, computed } from 'vue'
import { useRouter } from 'vue-router'

import type { NavigationItem } from '@/contracts/navigationItem'
import type { User } from '@/contracts/user'

import NavItem from './NavItem.vue'
import NavGroup from './NavGroup.vue'
import DrawerItem from './DrawerItem.vue'
import DrawerGroup from './DrawerGroup.vue'

interface Props {
  user?: User
  navigation: NavigationItem[]
  userNavigation?: NavigationItem[]
  title?: string
  icon?: string
  cb?: (item: NavigationItem) => void
}
const props: Props = defineProps<Props>()

const drawer = shallowRef(false)
const router = useRouter()

// Items fijos
const loginItem: NavigationItem = {
  name: 'Iniciar sesión',
  path: '/auth/login'
}

const registerItem: NavigationItem = {
  name: 'Registrarse',
  path: '/auth/register'
}

// Computed menu de usuario/invitado
const menuItems = computed<NavigationItem[]>(() => {
  return props.user ? props.userNavigation || [] : [loginItem, registerItem]
})

function resolveItemComponent(item: NavigationItem) {
  return item.children ? NavGroup : NavItem
}

function resolveDrawerComponent(item: NavigationItem) {
  return item.children ? DrawerGroup : DrawerItem
}

function handleSelect(item: NavigationItem) {
  if (item.disable) return

  if (item.cb) {
    item.cb(item)
    return
  }

  if (item.scroll) {
    const el = document.querySelector(item.scroll)
    el?.scrollIntoView({ behavior: 'smooth' })
    return
  }

  if (item.path) {
    router.push(item.path)
    return
  }

  if (props.cb) {
    props.cb(item)
  }
}
</script>
