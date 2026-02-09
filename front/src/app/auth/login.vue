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
        router-link.text-caption.text-decoration-none.text-blue(
          to="/auth/reset"
        ) Olvidaste tu contraseña?

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
        v-alert(
          v-if="!errorMessage"
          type="info"
          dense
          title="Información de seguridad"
        )
          | Advertencia: Solo tienes {{ maxIntentos - nIntento }} intentos antes de que se bloquee tu cuenta temporalmente.
        v-alert(
          v-else
          type="warning"
          dense
          title="Intento ha fracasado"
        )
          | {{ errorMessage }}
      v-btn.mb-8(
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="loginHandler"
        :disabled="nIntento >= maxIntentos"
      ) Entrar

      v-card-text.text-center
        router-link.text-blue.text-decoration-none(
          to="/auth/register"
        ) 
          | Registra tu nueva cuenta
          v-icon(icon="mdi-chevron-right")
          
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { LoginPayload } from '@auth/contract'
import { useAppStore } from '@app/store'

const appStore = useAppStore()

// Formularios y estados
const email = ref<string>('')
const password = ref<string>('')
const visible = ref(false)
const errorMessage = ref<string>('')

const maxIntentos = 3
let nIntento = ref<number>(0)

const loginHandler = async (): Promise<void> => {
  errorMessage.value = ''

  const payload: LoginPayload = {
    email: email.value,
    password: password.value,
  }

  try {
    // 1️⃣ Login API
    await appStore.Login(payload)

  } catch (error) {
    // Manejo de errores e intentos
    nIntento.value += 1
    errorMessage.value = ` Te quedan ${maxIntentos - nIntento.value} intentos.`
    errorMessage.value += error instanceof Error ? error.message : ' Error desconocido.'

    if (nIntento.value >= maxIntentos) {
      errorMessage.value =
        'Has alcanzado el número máximo de intentos. Tu cuenta ha sido bloqueada temporalmente.'
      //appStore.lockAccount(email.value)
    }
  }
}
</script>
