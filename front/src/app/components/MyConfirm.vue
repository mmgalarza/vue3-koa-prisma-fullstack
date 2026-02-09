<template lang="pug">
v-dialog(v-model="dialog" max-width="400" persistent)
  v-card
    v-card-title {{ title }}
    v-card-text {{ message }}
    v-card-actions
      v-spacer
      v-btn(variant="text" @click="handleClose") Cancelar
      v-btn(color="error" variant="tonal" @click="handleConfirm") Confirmar
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
}>();

const emits = defineEmits<{
  'update:modelValue': [value: boolean]
}>();
const dialog = ref(true); 
// Sincronizar con v-model
watch(() => props.modelValue, (val) => dialog.value = val);

const handleConfirm = () => {
  props.onConfirm?.();
  emits('update:modelValue', false);
};

const handleClose = () => {
  emits('update:modelValue', false);
};
</script>
