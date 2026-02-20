<template lang="pug">
v-container.pa-4
  //- 1. Toolbar con búsqueda vinculada al store
  v-toolbar(flat color="transparent")
    v-btn(
      icon="mdi-arrow-left" 
      v-if="!store.isAtRoot" 
      @click="store.goBack"
    )
    v-toolbar-title {{ currentTitle }}
    v-spacer
    v-text-field(
      v-model="store.searchQuery"
      label="Buscar..." 
      hide-details 
      prepend-inner-icon="mdi-magnify"
      clearable
      style="max-width: 300px"
    )

  //- 2. Breadcrumbs Dinámicos
  v-breadcrumbs.px-0.mb-4(v-if="!store.isAtRoot && !store.searchQuery")
    v-breadcrumbs-item(link @click="store.navigateToIndex(-1)") Inicio
    template(v-for="(crumb, index) in store.breadcrumbs" :key="crumb.id")
      v-breadcrumbs-divider /
      v-breadcrumbs-item(
        :disabled="index === store.breadcrumbs.length - 1"
        link
        @click="store.navigateToIndex(index)"
      ) {{ crumb.nombre }}

  v-divider.mb-6

  //- 3. Rejilla de Contenido (Usa el nuevo getter filtrado)
  v-row(v-if="!store.loading")
    v-col(
      v-for="item in store.filteredElements" 
      :key="item.id" 
      cols="12" sm="6" md="4" lg="3"
      class="d-flex" 
    )
      v-card(
        hover
        class="rounded-xl overflow-hidden d-flex flex-column w-100"
        @click="item.hijos && item.hijos.length > 0 ? (store.searchQuery = '', store.selectItem(item)) : null"
      )
        v-img(
          :src="item.imagenUrl"
          height="200"
          width="100%"
          cover
        )
          //- Overlay de nombre solo para CATEGORÍAS
          div(
            v-if="item.hijos && item.hijos.length > 0"
            class="d-flex align-end fill-height"
          )
            v-card-title(class="text-white w-100 pb-4" style="background: linear-gradient(to top, rgba(0,0,0,0.8), transparent)") 
              | {{ item.nombre }}

        //- Información de PRODUCTO (Fuera de la imagen para legibilidad)
        v-card-item.flex-grow-1(v-if="item.nivel === 'producto'")
          v-card-title(
            v-if="!item.hijos || item.hijos.length === 0"
            style="white-space: normal; height: 3.2rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.6rem; font-size: 1rem;"
          ) {{ item.nombre }}
          
          v-card-subtitle.text-primary.font-weight-black.text-h6.mt-1
            | {{ item.precio ? `$${item.precio}` : '' }}

        v-card-actions.pa-4.pt-0(v-if="item.nivel === 'producto'")
          v-btn(block color="primary" variant="tonal" rounded="pill") Añadir
  
  //- Loader
  v-row(v-else)
    v-col(v-for="n in 8" :key="n" cols="12" sm="6" md="4" lg="3")
      v-skeleton-loader(type="card")
//- Debajo del v-row de contenido
v-container(v-if="store.filteredElements.length === 0 && !store.loading").text-center.py-12
  v-icon(size="64" color="grey-lighten-1") mdi-magnify-close
  .text-h6.text-grey.mt-4 No encontramos nada que coincida con "{{ store.searchQuery }}"
  v-btn(variant="text" color="primary" @click="store.searchQuery = ''") Limpiar búsqueda      
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useBrowserStore } from './store'

const store = useBrowserStore()

onMounted(() => {
  store.initialize()
})

const currentTitle = computed(() => {
  if (store.loading && store.items.length === 0) return 'Cargando menú...'
  
  if (store.isAtRoot) return 'Nuestras Categorías'
  
  // El getter 'breadcrumbs' ya devuelve el array procesado
  const ruta = store.breadcrumbs
  const ultimaCat = ruta[ruta.length - 1]
  
  return ultimaCat?.nombre || 'Nuestras Categorías'
})
</script>