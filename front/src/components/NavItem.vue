<template lang="pug">
v-btn.text-none(
  :disabled="item.disable"
  variant="text"
  @click="$emit('select', item)"
)
  v-icon(v-if="item.icon" start)
    | {{ item.icon }}
  | {{ item.name }}
</template>
<script setup>
    defineProps({ item: Object })
    defineEmits(['select'])
</script>
