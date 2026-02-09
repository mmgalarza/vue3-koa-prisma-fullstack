<template lang="pug">
  Disclosure(as="nav" class="relative bg-gray-800" v-slot="{ open }")
    div(class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8")
      div(class="relative flex h-16 items-center justify-between")
        div(class="absolute inset-y-0 left-0 flex items-center sm:hidden")
          // Mobile menu button
          DisclosureButton(class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500")
            span(class="absolute -inset-0.5")
            span.sr-only Abre el menu botón
            Bars3Icon.block.size-6(v-if="!open" aria-hidden="true")
            XMarkIcon.block.size-6(v-else aria-hidden="true")

        div(class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start")
          div(class="flex shrink-0 items-center")
            img.h-8.w-auto(
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            )
          div(class="hidden sm:ml-6 sm:block")
            div(class="flex space-x-4")
              a(
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white\\/5 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined"
              ) {{ item.name }}

        div(class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0")
          button(type="button" class="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500")
            span(class="absolute -inset-1.5")
            span.sr-only Ver notificaciones
            BellIcon.size-6(aria-hidden="true")

          // Profile dropdown
          Menu.relative.ml-3(as="div")
            MenuButton(class="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500")
              span(class="absolute -inset-1.5")
              span.sr-only Abre menu usuario
              img(class="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
              MenuItems(class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5")
                MenuItem(v-slot="{ active }")
                  a.block.px-4.py-2.text-sm.text-gray-700(
                    href="#"
                    :class="[active ? 'bg-gray-100 outline-hidden' : '']"
                  ) Tu perfil
                MenuItem(v-slot="{ active }")
                  a.block.px-4.py-2.text-sm.text-gray-700(
                    href="#"
                    :class="[active ? 'bg-gray-100 outline-hidden' : '']"
                  ) Ajustes
                MenuItem(v-slot="{ active }")
                  a.block.px-4.py-2.text-sm.text-gray-700(
                    href="#"
                    :class="[active ? 'bg-gray-100 outline-hidden' : '']"
                  ) Cerrar sesión

    DisclosurePanel(class="sm:hidden")
      .space-y-1.px-2.pt-2.pb-3
        DisclosureButton(
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white\\/5 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined"
        ) {{ item.name }}
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Panel', href: '#', current: true },
  { name: 'Equipo', href: '#', current: false },
  { name: 'Proyectos', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
</script>
