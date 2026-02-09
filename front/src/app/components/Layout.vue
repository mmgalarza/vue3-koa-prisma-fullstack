<template lang="pug">
  .min-h-full
    Disclosure(as="nav" class="bg-gray-800 sticky top-0 z-50" v-slot="{ open }")
      div(class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8")
        div(class="flex h-16 items-center justify-between")
          // Panel izquierdo
          div(class="flex items-center")
            .shrink-0
              component(:is="company.logoUrl" :fill="company.color" class="w-8 h-8 hover:rotate-180 transition-transform duration-500 cursor-pointer")

            nav(class="hidden md:block")
              ul(class="ml-10 flex items-baseline space-x-4" role="navigation" aria-label="Menú principal")
                li(v-for="item in navigation" :key="item.name" class="mb-1")
                  // Si tiene submenú
                  details(v-if="item.children" class="group")
                    summary(class="flex items-center justify-between cursor-pointer px-3 py-2 rounded-md text-sm font-medium bg-gray-700 text-white hover:bg-gray-600")
                      span {{ item.name }}
                      svg(viewBox="0 0 20 20", fill="currentColor" class="w-4 h-4 ml-2 transition-transform group-open:rotate-180")
                        path(d="M5 9l5 5 5-5") 

                    ul(class="absolute w-48 mt-5 p-2 rounded-md bg-gray-800 shadow-lg hidden group-open:block z-50")
                      li(v-for="sub in item.children" :key="sub.name")
                        router-link(v-if="sub.to" :to="sub.to" class="block px-3 py-1 rounded-md text-sm text-gray-300 hover:font-semibold hover:text-white") {{ sub.name }}
                        a(v-else :href="sub.href" class="block px-3 py-1 rounded-md text-sm text-gray-300 hover:font-semibold hover:text-white") {{ sub.name }}

                  // Si no tiene submenú
                  router-link(v-else-if="item.to" :to="item.to" class="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white") {{ item.name }}
                  a(v-else :href="item.href" class="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white") {{ item.name }}
               

          // Panel derecho
          div(class="hidden md:block")
            div(class="ml-4 flex items-center md:ml-6")
              button(
                v-if="user"
                type="button"
                class="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
              )
                span(class="absolute -inset-1.5")
                span.sr-only Ver notificaciones
                BellIcon.size-6(aria-hidden="true")
              router-link(
                v-else
                to="/login"
                class="relative flex rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 cursor-pointer"
              )
                span(class="absolute -inset-1.5")
                span.sr-only Iniciar sesión
                | Iniciar sesión
                LoginIcon.size-6(aria-hidden="true")
                

              // Perfil desplegable
              Menu.relative.ml-3(as="div" v-if="user")
                MenuButton(
                  class="relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                )
                  span(class="absolute -inset-1.5")
                  span.sr-only Abre menu usuario
                  img.size-8.rounded-full.outline.-outline-offset-1(
                    class="outline-white/10"
                    :src="user.imageUrl"
                    alt=""
                  )

                transition(
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                )
                  MenuItems(
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5"
                  )
                    MenuItem(
                      v-for="item in userNavigation"
                      :key="item.name"
                      v-slot="{ active }"
                    )
                      router-link(v-if="item.to"
                        :to="item.to"
                        class="block px-4 py-2 text-sm text-gray-700"
                        :class="active ? 'bg-gray-100 outline-hidden' : ''"
                      ) {{ item.name }}
                      a(
                        v-else
                        :href="item.href"
                        class="block px-4 py-2 text-sm text-gray-700"
                        :class="active ? 'bg-gray-100 outline-hidden' : ''"
                      ) {{ item.name }}

          // Mobil boton
          div(class="-mr-2 flex md:hidden")
            DisclosureButton(
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            )
              span(class="absolute -inset-0.5")
              span.sr-only Abre menu principal
              Bars3Icon.block.size-6(v-if="!open" aria-hidden="true")
              XMarkIcon.block.size-6(v-else aria-hidden="true")

      // Panel para movil
      DisclosurePanel(class="md:hidden")
        div(class="space-y-1 px-2 pt-2 pb-3 sm:px-3")
          div(v-for="item in navigation" :key="item.name")
            // Si tiene children, un Disclosure anidado
            Disclosure(v-if="item.children")
              template(#default="{ open }")
                DisclosureButton(
                  as="button"
                  class="w-full text-left block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                ) {{ item.name }}
                  span.float-right
                    svg.w-4.h-4.transform.transition-transform(:class="open ? 'rotate-180' : 'rotate-0'", viewBox="0 0 20 20", fill="currentColor")
                      path(d="M5 9l5 5 5-5")

                DisclosurePanel
                  div(class="pl-4 mt-1 space-y-1")
                    DisclosureButton(
                      v-for="sub in item.children"
                      :key="sub.name"
                    )
                      router-link(
                        v-if="sub.to"
                        :to="sub.to"
                        class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      ) {{ sub.name }}

                      a(
                        v-else
                        :href="sub.href"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      ) {{ sub.name }}

            // Si no tiene children, solo el botón si no tiene ruta
            DisclosureButton(
              as="a"
              v-else-if="!item.to"
              :href="item.href"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            ) {{ item.name }}
            // Si no tiene children, solo el botón pero con ruta
            DisclosureButton(v-else class="block w-full rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white")
              router-link(
                :to="item.to"
                class="w-full flex"  
              ) {{ item.name }}
        DisclosureButton(v-if="!user" class="flex px-5 w-full rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white")
          router-link(
            to="/login"
            class="w-full flex flex-row-reverse items-center justify-center"  
          )
            | Iniciar sesión
            LoginIcon.size-6(aria-hidden="true")
            
        div(class="border-t border-white/10 pt-4 pb-3" v-if="user")
          div(class="flex items-center px-5")
            .shrink-0
              img.size-10.rounded-full.outline.-outline-offset-1(
                class="outline-white/10"
                :src="user.imageUrl"
                :alt="user.name"
              )
            .ml-3
              .text-base.font-medium.text-white {{ user.name }}
              .text-sm.font-medium.text-gray-400 {{ user.email }}

            button(
              type="button"
              class="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            )
              span(class="absolute -inset-1.5")
              span.sr-only Ver notificaciones
              BellIcon.size-6(aria-hidden="true")

          div(class="mt-3 space-y-1 px-2")
            DisclosureButton(
              v-for="item in userNavigation"
              :key="item.name"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
              v-bind="item.to ? { as: 'router-link', to: item.to } : { as: 'a', href: item.href, target: '_blank', rel: 'noopener noreferrer' }"
            ) {{ item.name }}

    header(class="relative bg-white shadow-sm")
      div(class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8")
        slot(name="header")
          h1(class="text-3xl font-bold tracking-tight text-gray-900") {{ title }}

    main
      div(class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8")
        slot(name="main")
        
    footer(class="bg-gray-800 text-gray-300 mt-10")
      div(class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-center text-sm")
        slot(name="footer")
          | &copy; {{ new Date().getFullYear() }} {{ company.name }}. Todos los derechos reservados.
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ArrowRightEndOnRectangleIcon as LoginIcon} from '@heroicons/vue/24/outline';

const {user, navigation, userNavigation, title, company} = defineProps({
  user: {
    type: Object,
    required: true,
  },
  navigation: {
    type: Array,
    required: true,
  },
  userNavigation: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: 'Aplicación Pug + TailwindCSS',
  },
  company: {
    type: Object,
    required: false,
  },
})

/*
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Panel', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
*/
</script>