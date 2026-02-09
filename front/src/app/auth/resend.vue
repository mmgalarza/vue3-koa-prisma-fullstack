<template lang="pug">
v-container
  v-img.mx-auto.my-6(
    max-width="228"
    src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
  )

  v-card.mx-auto.pa-12.pb-8(
    elevation="8"
    max-width="448"
    rounded="lg"
  )
    .text-h6.text-center.mb-6
      | Reenviar activación

    .text-subtitle-1.text-medium-emphasis.mb-4
      | Ingresa tu correo electrónico y te enviaremos un nuevo enlace de activación.

    v-text-field(
      v-model="email"
      label="Email"
      placeholder="usuario@ejemplo.com"
      prepend-inner-icon="mdi-email-outline"
      type="email"
      density="compact"
      variant="outlined"
    )

    v-alert(
      v-if="errorMessage"
      type="error"
      dense
      text
      class="mb-4"
    )
    | {{ errorMessage }}

    v-alert(
      v-if="successMessage"
      type="success"
      dense
      text
      class="mb-4"
    )
    | {{ successMessage }}

    v-btn(
      color="blue"
      size="large"
      variant="tonal"
      block
      class="mb-4"
      :loading="loading"
      :disabled="loading"
      @click="resendActivationHandler"
    )
      | Reenviar enlace

    v-card-text.text-center
      RouterLink.text-blue.text-decoration-none(
        to="/login"
      )
        | Volver al login
        v-icon(icon="mdi-chevron-right")
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { AuthService } from '@auth/service'

const email = ref('')
const errorMessage = ref<string | null>(null)
const successMessage = ref<string | null>(null)
const loading = ref(false)

const resendActivationHandler = async () => {
  errorMessage.value = null
  successMessage.value = null
  loading.value = true

  try {
    const response = await AuthService.resendActivation(email.value)
    successMessage.value =
      response.message || 'Si el email existe, se enviará un enlace de activación.'
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : 'Error desconocido'
  } finally {
    loading.value = false
  }
}
</script>
