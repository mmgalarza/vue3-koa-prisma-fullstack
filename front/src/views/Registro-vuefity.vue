<template lang="pug">
v-container.fill-height(fluid)
  v-row(align="center" justify="center")
    v-col(cols="12" sm="8" md="6" lg="4")
      v-card
        v-card-title.text-h5 Registro de Usuario
        v-card-text
          v-form(@submit.prevent="submit" ref="formRef")
            v-text-field(
              label="Nombre Completo"
              v-model="name"
              :rules="checking('name')"
              required
            )

            v-text-field(
              label="Correo Electrónico"
              v-model="email"
              :rules="checking('email')"
              required
            )

            v-text-field(
              label="Contraseña"
              v-model="password"
              :rules="checking('password')"
              type="password"
              required
            )

            v-text-field(
              label="Confirmar Contraseña"
              v-model="passwordConfirm"
              :rules="checking('passwordConfirm')"
              type="password"
              required
            )

            v-text-field(
              label="Dirección"
              v-model="address"
              :rules="checking('address')"
              required
            )

            v-text-field(
              label="Ciudad"
              v-model="city"
              :rules="checking('city')"
              required
            )

            v-text-field(
              label="Estado/Provincia"
              v-model="state"
              :rules="checking('state')"
              required
            )

            v-text-field(
              label="Código Postal"
              v-model="zip"
              :rules="checking('zip')"
              required
            )

            v-select(
              label="País"
              v-model="country"
              :items="countries"
              :rules="checking('country')"
              required
            )

            v-alert.mt-4(
              v-if="errorMessages.global"
              type="error"
              dense
              outlined
            )
              | {{ errorMessages.global }}

            v-card-actions.justify-end.mt-4
              v-btn(color="primary" type="submit") Registrar
              v-btn(text @click="resetForm") Limpiar
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/user'

const store = useUserStore()

// Campos del formulario
const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const address = ref('')
const city = ref('')
const state = ref('')
const zip = ref('')
const country = ref('')
const countries = ['Argentina', 'Spain', 'United States', 'Brazil'] // etc

// Estados de validación
const errorMessages = reactive({
  global: ''
})

const formHasErrors = ref(false)

// Función para obtener reglas de validación (igual que tu checking)
const checking = (field) => {
  const rules = {
    name: [v => !!v || 'This field is required'],
    email: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid'
    ],
    password: [
      v => !!v || 'Password is required',
      v => v.length >= 8 || 'Min 8 characters',
      v => /[A-Z]/.test(v) || 'One uppercase required',
      v => /[a-z]/.test(v) || 'One lowercase required',
      v => /\d/.test(v) || 'One number required'
    ],
    passwordConfirm: [
      v => !!v || 'Password confirmation is required',
      v => v === password.value || 'Passwords must match'
    ],
    address: [
      v => !!v || 'This field is required',
      v => v.length <= 25 || 'Address must be less than 25 characters'
    ],
    city: [v => !!v || 'This field is required'],
    state: [v => !!v || 'This field is required'],
    zip: [v => !!v || 'This field is required'],
    country: [v => !!v || 'This field is required']
  }
  return rules[field]
}

// Función para enviar formulario
const submit = async () => {
  formHasErrors.value = false
  errorMessages.global = ''

  // Validaciones básicas
  const fields = { name, email, password, passwordConfirm, address, city, state, zip, country }
  Object.entries(fields).forEach(([key, refValue]) => {
    if (!refValue.value) formHasErrors.value = true
  })
  if (formHasErrors.value) return

  // Llamada al store / servicio
  try {
    await store.registerUser(
      name.value,
      email.value,
      password.value
    )
    // Registro exitoso
    console.log('Usuario registrado:', store.user)
    // Aquí podrías redirigir a login o a home
  } catch (err) {
    errorMessages.global = store.error || 'Error desconocido'
  }
}

// Función para resetear formulario
const resetForm = () => {
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
