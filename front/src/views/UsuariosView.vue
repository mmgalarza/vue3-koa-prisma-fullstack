<template lang="pug">
v-container
  v-row
    v-col(cols="12")
      v-btn(color="primary" variant="tonal" @click="openCreateRecord")
        v-icon left mdi-plus
        | Nuevo Usuario

  v-row
    v-col(cols="12")
      v-data-table(
        :headers="headers"
        :items="usuarios"
        item-value="idUsuario"
      )
        template(v-slot:item.actions="{ item }")
          v-btn(color="primary" icon variant="tonal" small @click="openEditRecord(item)")
            v-icon mdi-pencil
          v-btn(
            color="error"
            icon variant="tonal"
            small 
            @click="dlgConfirmDelete = true; selectedItem = item"
          )
            v-icon mdi-delete
  //- Dialog de confirmación de eliminación :dlgConfirmDelete
  v-dialog(v-model="dlgConfirmDelete" max-width="400" persistent)
    v-card
      v-card-title Confirma la eliminación
      v-card-text 
        | ¿Seguro que deseas eliminar este usuario {{selectedItem.username}}?
      v-card-actions
        v-spacer
        v-btn(variant="text" @click="dlgConfirmDelete = false") Cancelar
        v-btn(color="error" variant="tonal" @click="() => deleteUser(selectedItem?.idUsuario ?? 0) || null") Confirmar

  //- Dialog para crear / editar
  v-dialog(v-model="dlgCRUD" max-width="500")
    v-card
      v-card-title {{ isEditing ? 'Editar Usuario' : 'Crear Usuario' }}
      v-card-text

        v-text-field(
          label="Correo Electrónico"
          v-model="record.email"
          :rules="checking('email')"
          required
        )

        v-text-field(
          v-if="!isEditing"
          label="Contraseña"
          v-model="record.password"
          :rules="checking('password')"
          type="password"
          required
        )

        v-text-field(
          v-if="!isEditing"
          label="Confirmar Contraseña"
          v-model="record.passwordConfirm"
          :rules="checking('passwordConfirm')"
          type="password"
          required
        )

        v-text-field(
          label="Nombre Completo"
          v-model="record.nombre"
          :rules="checking('nombre')"
          required
        )

        //- Dirección en 2 filas
        v-row
          //- Fila 1: Dirección + Código Postal
          v-col(cols="12" md="8")
            v-text-field(
              label="Dirección"
              v-model="record.address"
              :rules="checking('address')"
              required
            )
          v-col(cols="12" md="4")
            v-text-field(
              label="Código Postal"
              v-model="record.zip"
              :rules="checking('zip')"
              required
            )

        v-row
          //- Fila 2: Ciudad + Estado/Provincia + País
          v-col(cols="12" md="4")
            v-text-field(
              label="Ciudad"
              v-model="record.city"
              :rules="checking('city')"
              required
            )
          v-col(cols="12" md="4")
            v-text-field(
              label="Estado/Provincia"
              v-model="record.state"
              :rules="checking('state')"
              required
            )
          v-col(cols="12" md="4")
            v-select(
              label="País"
              v-model="record.country"
              :items="countries"
              :rules="checking('country')"
              required
            )

        
        v-switch(v-model="record.activo" label="Activo" v-if="isEditing")
      v-card-actions
        v-spacer
        v-btn(text @click="dlgCRUD=false") Cancelar
        v-btn(color="primary" @click="saveRecord") Guardar

  v-snackbar(v-model="snackbar") {{ snackbarMessage }}
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { usuariosService } from '@/services/usuarios.service'
import type { UsuarioListDto, CreateUsuarioDto, UpdateUsuarioDto } from '@/contracts/dtos'
// import { S } from 'vue-router/dist/router-CWoNjPRp.mjs';

const dlgConfirmDelete = ref(false);
const selectedItem = ref<any>(null);

// Lista de usuarios
const usuarios = ref<UsuarioListDto[]>([])

// Estado de edición / creación
const record = ref<Partial<CreateUsuarioDto & { idUsuario?: number }>>({})
const dlgCRUD = ref(false)
const isEditing = ref(false)
const countries = ['Argentina', 'Spain', 'United States', 'Brazil'] // etc

// Feedback
const snackbarMessage = ref('')
const snackbar = ref(false)

// Columnas para v-data-table
const headers = [
  { title: 'ID', key: 'idUsuario' },
  { title: 'Username', key: 'username' },
  { title: 'Email', key: 'email' },
  { title: 'Nombre', key: 'nombre' },
  { title: 'Activo', key: 'activo' },
  { title: 'Acciones', key: 'actions' },
]

// Función para obtener reglas de validación (igual que tu checking)
const checking = (field: string) => {
  const rules: Record<string, Array<(v: string) => boolean | string>> = {
    username: [(v: string) => !!v || 'Este campo es obligatorio'],
    email: [
      (v: string) => !!v || 'Este campo es obligatorio',
      (v: string) => /.+@.+\..+/.test(v) || 'El email debe ser válido'
    ],
    nombre: [(v: string) => !!v || 'Este campo es obligatorio'],
    password: [
      (v: string) => !!v || 'La contraseña es obligatoria',
      (v: string) => v.length >= 8 || 'Mínimo 8 caracteres',
      (v: string) => /[A-Z]/.test(v) || 'Se requiere una mayúscula',
      (v: string) => /[a-z]/.test(v) || 'Se requiere una minúscula',
      (v: string) => /\d/.test(v) || 'Se requiere un número'
    ],
    passwordConfirm: [
      (v: string) => !!v || 'Este campo es obligatorio',
      (v: string) => v === record.value.password || 'Las contraseñas no coinciden'
    ],
    address: [
      (v: string) => !!v || 'Este campo es obligatorio',
      (v: string) => v.length <= 25 || 'La dirección debe tener menos de 25 caracteres'
    ],
    city: [(v: string) => !!v || 'Este campo es obligatorio'],
    state: [(v: string) => !!v || 'Este campo es obligatorio'],
    zip: [(v: string) => !!v || 'Este campo es obligatorio'],
    country: [(v: string) => !!v || 'Este campo es obligatorio'],
  }
  return rules[field] || []
}

// Cargar usuarios
const loadUsuarios = async () => {
  try {
    usuarios.value = await usuariosService.getAll()
  } catch (e) {
    snackbarMessage.value = 'Error cargando usuarios'
    snackbar.value = true
    console.error(e)
  }
}

// Abrir modal para crear
const openCreateRecord = () => {
  record.value = {}
  isEditing.value = false
  dlgCRUD.value = true
}

// Abrir modal para editar
const openEditRecord = (user: UsuarioListDto) => {
  record.value = { ...user }
  isEditing.value = true
  dlgCRUD.value = true
}

// Guardar usuario (crear o actualizar)
const saveRecord = async () => {
  try {
    if (isEditing.value && record.value.idUsuario) {
      await usuariosService.update(record.value.idUsuario, record.value as UpdateUsuarioDto)
      snackbarMessage.value = 'Usuario actualizado'
    } else {
      await usuariosService.create(record.value as CreateUsuarioDto)
      snackbarMessage.value = 'Usuario creado'
    }
    dlgCRUD.value = false
    await loadUsuarios()
    snackbar.value = true
  } catch (e) {
    snackbarMessage.value = 'Error guardando usuario'
    snackbar.value = true
    console.error(e)
  }
}

// Eliminar usuario
const deleteUser = async (id: number) => {
  try {
    await usuariosService.remove(id)
    snackbarMessage.value = 'Usuario eliminado'
    await loadUsuarios()
    snackbar.value = true
  } catch (e) {
    snackbarMessage.value = 'Error eliminando usuario'
    snackbar.value = true
    console.error(e)
  }
}

onMounted(() => {
  loadUsuarios()
})
</script>