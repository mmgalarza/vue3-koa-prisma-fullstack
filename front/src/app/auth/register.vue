<template lang="pug">
v-container
  v-row.justify-center
    v-col(cols="12" md="8" lg="6")
      v-card
        v-card-title.text-h5 Registro de Usuario
        v-card-text
          v-form(ref="form" @submit.prevent="submit" :lazy-validation="true")
            v-text-field(
              v-model="name"
              label="Nombre Completo"
              :rules="checking('name')"
              required
            )
            v-text-field(
              v-model="email"
              label="Correo Electrónico"
              :rules="checking('email')"
              required
            )
            v-text-field(
              v-model="password"
              label="Contraseña"
              type="password"
              :rules="checking('password')"
              required
            )
            v-text-field(
              v-model="passwordConfirm"
              label="Confirmar Contraseña"
              type="password"
              :rules="checking('passwordConfirm')"
              required
            )
            v-text-field(
              v-model="address"
              label="Dirección"
              :rules="checking('address')"
              required
            )
            v-text-field(
              v-model="city"
              label="Ciudad"
              :rules="checking('city')"
              required
            )
            v-text-field(
              v-model="state"
              label="Provincia/Estado"
              :rules="checking('state')"
              required
            )
            v-text-field(
              v-model="zip"
              label="Código Postal"
              :rules="checking('zip')"
              required
            )
            v-select(
              v-model="country"
              :items="countries"
              label="País"
              :rules="checking('country')"
              required
            )
            v-alert(
              type="error"
              v-if="errorMessages.global"
              class="my-4"
            ) {{ errorMessages.global }}
            v-btn(
              type="submit"
              color="primary"
              :disabled="formHasErrors"
            ) Registrarse
            v-btn(
              type="button"
              text
              @click="resetForm"
            ) Limpiar Formulario
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'
import { useAuthStore } from '@auth/store'
import { AuthService } from '@auth/service'

const store = useAuthStore()

/* =========================
   Campos del formulario
========================= */

const name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const passwordConfirm = ref<string>('')
const address = ref<string>('')
const city = ref<string>('')
const state = ref<string>('')
const zip = ref<string>('')
const country = ref<string>('')

const countries = ref<string[]>([
  'Argentina',
  'Spain',
  'United States',
  'Brazil',
])

/* =========================
   Estados de validación
========================= */

const errorMessages = reactive<{ global: string }>({
  global: '',
})

const formHasErrors = ref<boolean>(false)

/* =========================
   Validaciones
========================= */

type Validator = (v: string) => true | string

type FieldName =
  | 'name'
  | 'email'
  | 'password'
  | 'passwordConfirm'
  | 'address'
  | 'city'
  | 'state'
  | 'zip'
  | 'country'

const checking = (field: FieldName): Validator[] => {
  const rules: Record<FieldName, Validator[]> = {
    name: [
      v => !!v || 'This field is required',
    ],
    email: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid',
    ],
    password: [
      v => !!v || 'Password is required',
      v => v.length >= 8 || 'Min 8 characters',
      v => /[A-Z]/.test(v) || 'One uppercase required',
      v => /[a-z]/.test(v) || 'One lowercase required',
      v => /\d/.test(v) || 'One number required',
    ],
    passwordConfirm: [
      v => !!v || 'Password confirmation is required',
      v => v === password.value || 'Passwords must match',
    ],
    address: [
      v => !!v || 'This field is required',
      v => v.length <= 25 || 'Address must be less than 25 characters',
    ],
    city: [
      v => !!v || 'This field is required',
    ],
    state: [
      v => !!v || 'This field is required',
    ],
    zip: [
      v => !!v || 'This field is required',
    ],
    country: [
      v => !!v || 'This field is required',
    ],
  }

  return rules[field]
}

/* =========================
   Envío del formulario
========================= */

const submit = async (): Promise<void> => {
  formHasErrors.value = false
  errorMessages.global = ''

  const fields: Record<FieldName, Ref<string>> = {
    name,
    email,
    password,
    passwordConfirm,
    address,
    city,
    state,
    zip,
    country,
  }

  Object.values(fields).forEach(refValue => {
    if (!refValue.value) {
      formHasErrors.value = true
    }
  })

  if (formHasErrors.value) return

  try {
    await AuthService.registerUser(
      name.value,
      email.value,
      password.value,
    )

    console.log('Usuario registrado:', store.user)
    // aquí podrías redirigir
  } catch (err: unknown) {
    errorMessages.global =
        err instanceof Error ? err.message : 'Registration failed.'
  }
}

/* =========================
   Reset del formulario
========================= */

const resetForm = (): void => {
  formHasErrors.value = false
  errorMessages.global = ''

  name.value = ''
  email.value = ''
  password.value = ''
  passwordConfirm.value = ''
  address.value = ''
  city.value = ''
  state.value = ''
  zip.value = ''
  country.value = ''
}
</script>

