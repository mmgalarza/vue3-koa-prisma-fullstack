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
      .text-subtitle-1.text-medium-emphasis Cuenta

      v-text-field(
        v-model="email"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      )

      .text-subtitle-1.text-medium-emphasis.d-flex.align-center.justify-space-between
        | Password
        a.text-caption.text-decoration-none.text-blue(
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        ) Ovidaste tu contraseña?

      v-text-field(
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      )

      v-card.mb-12(
        color="surface-variant"
        variant="tonal"
      )
        v-card-text.text-medium-emphasis.text-caption
          | Advertencia: Solo tienes 3 intentos antes de que se bloquee tu cuenta temporalmente.

      v-btn.mb-8(
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="login"
      ) Entrar

      v-card-text.text-center
        a.text-blue.text-decoration-none(
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        ) 
          | Registra tu nueva cuenta
          v-icon(icon="mdi-chevron-right")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import type { LoginDto } from '@/contracts/dtos'

const router = useRouter()
const authStore = useAuthStore()

const email = ref<string>('')
const password = ref<string>('')
const errorMessage = ref<string | null>(null)

const login = async (): Promise<void> => {
  errorMessage.value = null

  const payload: LoginDto = {
    email: email.value,
    password: password.value,
  }

  try {
    await authStore.login(payload)
    router.push('/dash')
  } catch (error) {
    errorMessage.value = 'Credenciales incorrectas'
  }
}
</script>