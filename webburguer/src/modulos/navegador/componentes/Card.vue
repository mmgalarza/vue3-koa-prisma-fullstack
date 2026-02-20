<template lang="pug">
v-card(
  hover
  flat
  class="product-card rounded-xl overflow-hidden d-flex flex-column w-100"
  :class="{ 'category-card': isCategory }"
  @click="isCategory ? handleCategoryClick() : null"
)
  v-img(
    :src="item.imagenUrl || defaultImage"
    height="200"
    width="100%"
    cover
    class="product-image"
  )
    //- Precio sobre imagen para productos
    span.price-badge(
        v-if="!isCategory && item.precio"
        icon
        color="black"
        variant="flat"
        rounded="pill"
        size="small"
        @click.stop="handleAddToCart"
      )
      | {{ formatPrice(item.precio) }}
      v-icon.ml-2(size="small" color="orange") mdi-cart-plus

  //- Contenido para productos (solo título ahora)
  v-card-item.bg-orange.flex-grow-1
    v-card-title.categoria-title(v-if="isCategory")
      | {{ item.nombre }}  
    v-card-title.product-title(v-else)
      | {{ item.nombre }}
</template>

<script setup>
import { computed } from 'vue'
import { useBrowserStore } from '../store'

const props = defineProps({ item: Object })
const store = useBrowserStore()

const defaultImage = 'https://placehold.co/400x300/f8f9fa/ced4da?text=Imagen'

const isCategory = computed(() => props.item.hijos && props.item.hijos.length > 0)

const formatPrice = (price) => {
  if (!price) return ''
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price)
}

const handleCategoryClick = () => {
  store.searchQuery = ''
  store.selectItem(props.item)
}

const handleAddToCart = (e) => {
  e.stopPropagation()
  // Lógica de añadir al carrito
}
</script>

<style scoped>
.product-card {
  border: 1px solid #f0f0f0;
  transition: border-color 0.2s ease;
  cursor: pointer;
}

.product-card:hover {
  border-color: #d0d0d0;
}

.product-image {
  position: relative;
}

.cart-button {
  position: absolute;
  top: 12px;
  right: 12px;
  color: black !important;
  background: orange !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 2;
}

.price-badge {
  position: absolute;
  bottom: 6px;
  right: 0px;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(4px);
  padding: 4px 12px;
  border-radius: 100px 0px 0px 100px;
  font-weight: 700;
  font-size: 1.1rem;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.02);
  z-index: 1;
}

.product-title, .categoria-title {
  color: #1e1e1e;
  text-align: center;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.6rem;
  font-size: 1.4rem;
}
</style>