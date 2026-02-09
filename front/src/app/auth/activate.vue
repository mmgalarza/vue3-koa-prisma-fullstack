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
      | Activación de cuenta

    .text-subtitle-1.text-medium-emphasis.mb-4
      | Tu cuenta se está activando. Por favor, espera...

    v-alert(
      v-if="errorMessage"
      type="error"
      dense
      text
      class="mb-4"
    ) {{ errorMessage }}

    v-alert(
      v-if="message"
      :type="success ? 'success' : 'error'"
      dense
      text
      class="mb-4"
    ) {{ message }}

    v-btn(
      v-if="!success"
      color="blue"
      size="large"
      variant="tonal"
      block
      class="mb-4"
      to="/auth/resend"
    )
      | Reenviar enlace de activación

    v-card-text.text-center
      RouterLink.text-blue.text-decoration-none(
        to="/auth/login"
      )
        | Volver al login
        v-icon(icon="mdi-chevron-right")
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { AuthService } from '@auth/service'

const route = useRoute()
const router = useRouter()

const message = ref<string | null>(null)
const success = ref(false)
const loading = ref(false)

const activateAccount = async (token: string) => {
  loading.value = true
  try {
    const response = await AuthService.activateAccount(token)
    message.value =
      response.message ||
      '¡Tu cuenta ha sido activada correctamente! Ya puedes iniciar sesión.'
    success.value = true
  } catch (err) {
    message.value =
      err instanceof Error
        ? err.message
        : 'El enlace de activación es inválido o ha expirado.'
    success.value = false
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  const token = route.query.token as string
  if (!token) {
    message.value = 'Token inválido o inexistente.'
    success.value = false
    return
  }

  activateAccount(token)
})
</script>

