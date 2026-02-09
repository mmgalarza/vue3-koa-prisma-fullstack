<template lang="pug">
  v-responsive.border.rounded(max-height="300")
    v-app
      v-app-bar(:elevation="0" color="primary")
        template(v-slot:prepend)
          v-app-bar-nav-icon

        v-app-bar-title New app stores
          v-spacer
          v-btn(text) Home
          v-btn(text) About
          v-menu
            template(v-slot:activator="{ props }")
              v-btn(variant="text" v-bind="props") Contacts

            v-list
              //- Item con submenu
              v-list-item
                v-list-item-title Preferencias
                //- Submenu anidado
                v-menu(offset-y left)
                  template(v-slot:activator="{ props: subProps }")
                    v-list-item(v-bind="subProps")
                      v-list-item-title Sexo
                  v-list
                    v-list-item
                      v-list-item-title Hombres
                    v-list-item
                      v-list-item-title Mujeres
              v-list-item
                v-list-item-title Ayuda

        template(v-slot:append)
          v-btn(:icon="'mdi-heart'")
          v-btn(:icon="'mdi-magnify'")
          v-menu(open-on-hover)
            template(v-slot:activator="{ props }")
              v-btn(icon="mdi-dots-vertical" variant="text" v-bind="props")

            v-list
              v-list-item(v-for="(item, i) in items" :key="i" :value="i")
                v-list-item-title {{ item.title }}
        
      v-main
        v-container
          v-sheet(border="dash md" color="surface-light" height="200" rounded="lg" width="100%")
            h1.text-center  Main Content
</template>
<script setup>
    const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ]
</script>