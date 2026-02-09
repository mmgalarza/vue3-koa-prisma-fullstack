<template lang="pug">
v-list-item(
  :disabled="item.disable"
  @click="onSelect"
)
  template(#prepend)
    v-icon {{ item.icon }}
  v-list-item-title {{ item.name }}
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['select'])

function onSelect() {
  if (props.item.disable) return
  emit('select', props.item)
}
</script>
