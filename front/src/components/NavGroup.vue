<template lang="pug">
v-menu
  template(#activator="{ props }")
    v-btn.text-none(v-bind="props")
      v-icon(v-if="item.icon" start)
        | {{ item.icon }}
      | {{ item.name }}

  v-list
    v-list-item(
      v-for="(child, i) in item.children"
      :key="i"
      :disabled="child.disable"
      @click="$emit('select', child)"
    )
      v-list-item-title
        v-icon(v-if="child.icon" start)
          | {{ child.icon }}
        | {{ child.name }}
</template>

<script setup>
    defineProps({ item: Object })
    defineEmits(['select'])
</script>
