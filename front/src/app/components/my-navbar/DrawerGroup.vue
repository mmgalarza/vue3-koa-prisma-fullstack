<template lang="pug">
v-list-group
  template(#activator="{ props: activatorProps }")
    v-list-item(v-bind="activatorProps")
      template(#prepend)
        v-icon {{ item.icon }}
      v-list-item-title {{ item.name }}

  component(
    v-for="(child, i) in item.children"
    :key="i"
    :is="child.children ? DrawerGroup : DrawerItem"
    :item="child"
    @select="$emit('select', $event)"
  )
</template>

<script setup>
import DrawerItem from './DrawerItem.vue'
import DrawerGroup from './DrawerGroup.vue'

defineProps({
  item: {
    type: Object,
    required: true
  }
})

defineEmits(['select'])
</script>
