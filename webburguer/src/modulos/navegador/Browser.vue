<template lang="pug">
//- Contenedor principal sin color (blanco por defecto)
div.browser-wrapper
  //- SECCIÓN SUPERIOR: Navegación (Fondo Blanco)
  Shortcut.bg-shortcut(
    :categories="store.allCategories"
    :active-id="store.selectedItem?.id"
    @select="handleQuickSelect"
  )
    
  v-divider.mt-0.pa-0

  //- SECCIÓN INFERIOR: La Grilla (Fondo Gris)
  div.bg-grid.pa-4.fill-height
    BrowserBreadcrumbs.mb-4.justify-center
    BrowserToolbar.mb-0(:title="currentTitle")
    v-divider.mb-4.pa-0
    //- Contenido con Transición de Grupo
    template.pa-4(v-if="!store.loading")
      v-fade-transition(group)
        v-row(v-if="store.filteredElements.length > 0" key="grid")
          v-col(
            v-for="item in store.filteredElements" 
            :key="item.id" 
            cols="12" sm="6" md="4" lg="3"
            class="d-flex" 
          )
            BrowserCard(:item="item")
      
      //- Empty State
      v-fade-transition
        v-container(v-if="store.filteredElements.length === 0" key="empty").text-center.py-12
          v-icon(size="64" color="grey-lighten-1") mdi-magnify-close
          .text-h6.text-grey.mt-4 No hay resultados
          v-btn(variant="text" color="primary" @click="store.searchQuery = ''") Limpiar búsqueda
      
    //- Loader
    v-row(v-else)
      v-col(v-for="n in 8" :key="n" cols="12" sm="6" md="4" lg="3")
        v-skeleton-loader(type="card")
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useBrowserStore } from './store'
import BrowserToolbar from './componentes/Toolbar.vue'
import BrowserBreadcrumbs from './componentes/Breadcrums.vue'
import BrowserCard from './componentes/Card.vue'
import Shortcut from './componentes/Shortcut.vue'

const store = useBrowserStore()
onMounted(() => store.initialize())

const currentTitle = computed(() => {
  const tituloBase = 'Nuestros Productos'
  if (store.loading && store.items.length === 0) return 'Cargando menú...'
  if (store.isAtRoot) return tituloBase
  const ultimaCat = store.breadcrumbs[store.breadcrumbs.length - 1]
  return ultimaCat?.nombre || tituloBase
})

const handleQuickSelect = (item: any) => {
  store.searchQuery = ''
  store.selectItem(item)
}
</script>

<style scoped lang="scss">
.browser-wrapper {
  background-color: white;
}

.bg-grid {
  background-color: transparent !important; /* Gris clarito para resaltar las cards blancas */
  min-height: calc(100vh - 300px); /* Asegura que el gris cubra el fondo */
  box-shadow: inset 0 4px 6px -6px rgba(0,0,0,0.1); /* Sombra interna sutil bajo el divider */
}
.bg-shortcut {
  background-color: orange !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 0;
}
</style>