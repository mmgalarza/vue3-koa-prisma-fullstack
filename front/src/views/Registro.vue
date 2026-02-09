<template lang="pug">
div(class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8")
  .mx-auto.max-w-2xl.bg-white.rounded-md.p-6.shadow-md
    div(class="sm:mx-auto sm:w-full sm:max-w-sm")
      LogoSvg.mx-auto.h-20.w-auto(alt="Tu Empresa")
      h2(class="mt-2 text-center font-domine-md text-2xl/9 font-bold tracking-tight text-gray-900") Registro de nueva cuenta

    form.form.space-y-12(@submit.prevent="enviar")
      div(class="border-b border-gray-900/10 pb-12")
        h2(class="text-base/7 font-semibold text-gray-900") Perfil
        p(class="mt-1 text-sm/6 text-gray-600") Esta información nos permite conocerte mejor, facilita algunos datos para dar visibilidad a tu cuenta.
        div(class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6")
          div(class="sm:col-span-4 field-group")
            label(for="username" class="block text-sm/6 font-medium text-gray-900") Nombre de usuario
            div(class="mt-2")
              div(class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600")
                div(class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6") servihogar.es/
                input(
                  required
                  type="text"
                  name="username"
                  id="username"
                  class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="martingalarza"
                  pattern="[A-Za-z0-9._-]{3,20}"
                  title="3–20 caracteres: letras, números, punto, guion o guion bajo."
                )

          div(class="sm:col-span-3 field-group")
            label(for="password" class="block text-sm/6 font-medium text-gray-900") Contraseña
            div(class="mt-2")
              input(
                required
                type="password"
                v-model="password"
                name="password"
                id="password"
                autocomplete="new-password"
                minlength="8"
                maxlength="64"
                :class="{'pass-not-equal': password !== password2}"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Mínimo 8 caracteres"
                pattern=".{8,64}"
                title="Entre 8 y 64 caracteres."
              )

          div(class="sm:col-span-3 field-group")
            label(for="password-confirm" class="block text-sm/6 font-medium text-gray-900") Confirmar contraseña
            div(class="mt-2")
              input(
                required
                type="password"
                v-model="password2"
                name="password-confirm"
                id="password-confirm"
                autocomplete="new-password"
                minlength="8"
                maxlength="64"
                :class="{'pass-not-equal': password !== password2}"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Repite la contraseña"
                pattern=".{8,64}"
                title="Debe coincidir con la contraseña."
              )

          div(class="col-span-full field-group")
            label(for="about" class="block text-sm/6 font-medium text-gray-900") Acerca de
            div(class="mt-2")
              textarea(required name="about" id="about" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6")
            p(class="mt-3 text-sm/6 text-gray-600") Escribe unas frases sobre ti.

          div(class="col-span-full field-group")
            label(for="cover-photo" class="block text-sm/6 font-medium text-gray-900") Foto de perfil
            div(class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10")
              div(class="text-center")
                div(v-if="!previewImage" class="flex flex-col items-center justify-center")
                  UserCircleIcon(class="mx-auto size-48 text-gray-300" aria-hidden="true")
                  div(class="mt-4 flex text-sm/6 text-gray-600")
                    label(for="file-upload" class="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500")
                      span Subir un archivo
                      input(id="file-upload" name="file-upload" @change="onFileChange" required type="file" class="sr-only")
                    p(class="pl-1") o arrastra y suelta
                  p(class="text-xs/5 text-gray-600") PNG, JPG, GIF hasta 10 MB
                  p(class="mt-2 text-sm/6 text-gray-600") siempre puedes crear un  
                    a(href="https://getavataaars.com/" target="_blank" class="font-semibold text-indigo-600 hover:text-indigo-500") avatar
                template(v-else)
                  img.mx-auto.max-h-48.rounded-full.object-cover(:src="previewImage" alt="Preview")
                  button.mt-4.text-sm.font-semibold.text-red-600.cursor-pointer(
                    type="button"
                    @click="removeImage"
                  )
                    | Quitar imagen                    

      div(class="border-b border-gray-900/10 pb-12")
        h2(class="text-base/7 font-semibold text-gray-900") Información personal
        p(class="mt-1 text-sm/6 text-gray-600") Usa una dirección permanente donde puedas recibir correo.

        div(class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6")
          div(class="sm:col-span-3 field-group")
            label(for="first-name" class="block text-sm/6 font-medium text-gray-900") Nombre
            div(class="mt-2")
              input(
                required
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                pattern="[A-Za-zÀ-ÖØ-öø-ÿÑñ' -]{1,50}"
                title="Solo letras (incluye acentos), espacios, apóstrofe y guion. Máx 50."
              )

          div(class="sm:col-span-3 field-group")
            label(for="last-name" class="block text-sm/6 font-medium text-gray-900") Apellido
            div(class="mt-2")
              input(
                required
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                pattern="[A-Za-zÀ-ÖØ-öø-ÿÑñ' -]{1,50}"
                title="Solo letras (incluye acentos), espacios, apóstrofe y guion. Máx 50."
              )

          div(class="sm:col-span-4 field-group")
            label(for="email" class="block text-sm/6 font-medium text-gray-900") Correo electrónico
            div(class="mt-2")
              input(
                required
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                pattern="[^ @]+@[^ @]+\.[^ @]{2,}"
                title="Formato esperado: correo@dominio.tld"
              )

          div(class="sm:col-span-3 field-group")
            label(for="country" class="block text-sm/6 font-medium text-gray-900") País
            div(class="mt-2 grid grid-cols-1")
              select(
                required
                id="country"
                name="country"
                autocomplete="country-name"
                v-model="selectedCountry"
                class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              )
                option(disabled value="") Selecciona un país
                option(v-for="c in countriesList" :key="c.code" :value="c.code") {{ c.name }}
              ChevronDownIcon(class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true")

          div(class="sm:col-span-5 col-start-1 field-group")
            label(for="street-address" class="block text-sm/6 font-medium text-gray-900") Dirección
            div(class="mt-2")
              input(
                required
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                pattern="[A-Za-z0-9À-ÖØ-öø-ÿÑñ .,#/-]{3,100}"
                title="3–100 caracteres: letras/números y . , # / -"
              )

          div(class="sm:col-span-1 field-group")
            label(for="postal-code" class="block text-sm/6 font-medium text-gray-900") Cód.Postal
            div(class="mt-2")
              input(
                required
                type="text"
                name="postal-code"
                id="postal-code"
                autocomplete="postal-code"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                pattern="[0-9]{5}(-[0-9]{4})?"
                title="5 dígitos (opcional: -0000)."
              )

          div(class="sm:col-span-2 sm:col-start-1 field-group")
            label(for="city" class="block text-sm/6 font-medium text-gray-900") Ciudad
            div(class="mt-2")
              input(
                required
                type="text"
                name="city"
                id="city"
                autocomplete="address-level2"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                pattern="[A-Za-zÀ-ÖØ-öø-ÿÑñ' -]{2,60}"
                title="2–60 caracteres: letras (incluye acentos), espacios, apóstrofe y guion."
              )

          div(class="sm:col-span-2 field-group")
            label(for="region" class="block text-sm/6 font-medium text-gray-900") Estado / Provincia
            div(class="mt-2")
              input(
                required
                type="text"
                name="region"
                id="region"
                autocomplete="address-level1"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                pattern="[A-Za-zÀ-ÖØ-öø-ÿÑñ' -]{2,60}"
                title="2–60 caracteres: letras (incluye acentos), espacios, apóstrofe y guion."
              )

          div(class="sm:col-span-2 field-group")
            label(for="phone" class="block text-sm/6 font-medium text-gray-900") Teléfono
            div(class="mt-2")
              input#phone(
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                type="tel",
                name="telefono",
                autocomplete="tel",
                placeholder="(123) 456-7890",
                pattern="[(]?[0-9]{3}[)]?[ .-]?[0-9]{3}[ .-]?[0-9]{4}",
                title="Formato esperado: (123) 456-7890, 123-456-7890 o 123 456 7890."
              )

      div(class="border-b border-gray-900/10 pb-12")
        h2(class="text-base/7 font-semibold text-gray-900") Notificaciones
        p(class="mt-1 text-sm/6 text-gray-600") Siempre te avisaremos sobre cambios importantes, pero tú eliges qué más quieres recibir.
        div(class="mt-10 space-y-10")
          fieldset.check-group(
            :class="{'required-one': notif.length === 0}"
          )
            legend(class="text-sm/6 font-semibold text-gray-900") Por correo electrónico
            div(class="mt-6 space-y-6")
              div(class="flex gap-3 field-group")
                div(class="flex h-6 shrink-0 items-center")
                  div(class="group grid size-4 grid-cols-1")
                    input(
                      id="comments"
                      aria-describedby="comments-description"
                      type="checkbox"
                      v-model="notif"
                      value="comentarios"
                      class="rounded-sm"
                    )
                div(class="text-sm/6")
                  label(for="comments" class="font-medium text-gray-900") Comentarios
                  p(id="comments-description" class="text-gray-500") Recibe notificaciones cuando alguien publique un comentario en una publicación.

              div(class="flex gap-3 field-group")
                div(class="flex h-6 shrink-0 items-center")
                  div(class="group grid size-4 grid-cols-1")
                    input(
                      id="candidates"
                      aria-describedby="candidates-description"
                      type="checkbox"
                      v-model="notif"
                      value="candidatos"
                      class="rounded-sm"
                    )
                div(class="text-sm/6")
                  label(for="candidates" class="font-medium text-gray-900") Candidatos
                  p(id="candidates-description" class="text-gray-500") Recibe notificaciones cuando un candidato postule a un empleo.

              div(class="flex gap-3 field-group")
                div(class="flex h-6 shrink-0 items-center")
                  div(class="group grid size-4 grid-cols-1")
                    input(
                      id="offers"
                      aria-describedby="offers-description"
                      type="checkbox"
                      v-model="notif"
                      value="ofertas"
                      class="rounded-sm"
                    )
                div(class="text-sm/6")
                  label(for="offers" class="font-medium text-gray-900") Ofertas
                  p(id="offers-description" class="text-gray-500") Recibe notificaciones cuando un candidato acepte o rechace una oferta.

          fieldset.field-group
            legend(class="text-sm/6 font-semibold text-gray-900") Notificar por SMS
            p(class="mt-1 text-sm/6 text-gray-600") Se envían por SMS a tu teléfono móvil.
            div(class="mt-6 space-y-6")
              div(class="flex items-center gap-x-3")
                input(
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  value="everything"
                  class="size-4"
                  required
                )
                label(for="push-everything" class="block text-sm/6 font-medium text-gray-900") Todo

              div(class="flex items-center gap-x-3")
                input(
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  value="email"
                  class="size-4"
                )
                label(for="push-email" class="block text-sm/6 font-medium text-gray-900") Igual que el correo

              div(class="flex items-center gap-x-3")
                input(
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  value="nothing"
                  class="size-4"
                )
                label(for="push-nothing" class="block text-sm/6 font-medium text-gray-900") Sin notificaciones push

      div(class="mt-6 flex items-center justify-end gap-x-6 button-group")
        p(
          v-if="codeStatus !== 'NONE'"
          :class="statusMap[codeStatus].class"
        ) {{ statusMap[codeStatus].message }}
        button(type="button" class="text-sm/6 font-semibold text-gray-900") Cancelar
        button(type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed") Guardar
</template>

<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import { ChevronDownIcon } from '@heroicons/vue/16/solid'
import LogoSvg from '@/assets/images/icon/logo.svg?component';
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

/* Paises */
const countryCodesStr =
  "ADAEAFAGAIALAMAOAQARASATAUAWAXAZBABBBDBEBFBGBHBIBJBLBMBNBOBQBRBSBTBVBWBYBZCACCCDCFCGCHCICKCLCMCNCOCRCUCVCWCXCYCZDEDJDKDMDODZECEEEGEHERESETFIFJFKFMFOFRGAGBGDGEGFGGGHGIGLGMGNGPGQGRGSGTGUGWGYHKHMHNHRHTHUIDIEILIMINIOIQIRISITJEJMJOJPKEKGKHKIKMKNKPKRKWKYKZLALBLCLILKLRLSLTLULVLYMAMCMDMEMFMGMHMKMLMMMNMOMPMQMRMSMTMUMVMWMXMYMZNANCNENFNGNINLNONPNRNUNZOMPAPEPFPGPHPKPLPMPNPRPSPTPWPYQARERORSRURWSASBSCSDSESGSHSISJSKSLSMSNSOSRSSSTSVSXSYSZTCTDTFTGTHTJTKTLTMTNTOTRTTTVTWTZUAUGUMUSUYUZVAVCVEVGVIVNVUWFWSYEYTZAZMZW"
const countryCodes = countryCodesStr.match(/.{2}/g) ?? []
const regionNames = Intl?.DisplayNames
  ? new Intl.DisplayNames(['es'], { type: 'region' })
  : null;

// Lista para el select: [{ code, name }]
const countriesList = countryCodes
  .map(code => ({ code, name: regionNames?.of(code) ?? code }))
  .sort((a, b) => a.name.localeCompare(b.name, 'es'))

const selectedCountry = ref('')

const statusMap = {
  'NONE': { message: '', class: '' },
  'SENDING': { message: 'Enviando...', class: 'text-gray-900' },
  'SUCCESS': { message: 'Registro completado con éxito.', class: 'text-green-600' },
  'ERROR': { message: 'Error en el registro.', class: 'text-red-600' },
};
let codeStatus = ref('NONE');

const password = ref('')
const password2 = ref('')
const userData = useUserStore()
const notif = ref([])

/* Preview de imagen subida */
const previewImage = ref(null)

function onFileChange(e) {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    previewImage.value = reader.result
  }
  reader.readAsDataURL(file)
}

const removeImage = () => {
  previewImage.value = null

  // 🔥 reset real del input
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

/* Envío del formulario */

const urlDestino = 'http://localhost:1337/api/auth/local/register'

async function enviar(e) {
  codeStatus.value =  'SENDING';

  const frm = e.currentTarget
 
  const fd = new FormData(frm)
  const v = (name) => (fd.get(name) ?? '').toString().trim()
  const payload = {
    data: {
      username: v('username'),
      about: v('about'),
      firstName: v('first-name'),
      lastName: v('last-name'),
      email: v('email'),
      country: v('country'),
      address: {
        street: v('street-address'),
        postalCode: v('postal-code'),
        city: v('city'),
        region: v('region'),
      },
      phone: v('telefono'),
      // NUEVO (ajusta nombres a tu backend si hace falta)
      password,
      passwordConfirmation: passwordConfirm,
      notifications: {
        email: {
          comments: Boolean(fd.get('comments')),
          candidates: Boolean(fd.get('candidates')),
          offers: Boolean(fd.get('offers')),
        },
        push: v('push-notifications'), // everything | email | nothing
      },
    },
  }

  try {
    const res = await fetch(urlDestino, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      codeStatus.value = STATUS_ERROR;
      throw new Error(`Error en el registro: ${res.status} ${res.statusText}`)
    }
    const data = await res.json()
    codeStatus.value = 'SUCCESS';
    console.log('Registro exitoso:', data)
  } catch (err) {
    console.error('Error en el registro:', err)
    codeStatus.value = 'ERROR';
  }
}
</script>

<style scoped>

/* marcado con * campos obligatorios */

.form .field-group:has(input[required]):has(input:invalid) > label::after,
.form .field-group:has(select[required]):has(select:invalid) > label::after,
.form .field-group:has(textarea[required]):has(textarea:invalid) > label::after,
.form .field-group:has(input[type="radio"]):has(input:invalid) > legend::after,
.form .check-group:not(:has(input:checked)) > legend::after {
  content: " ❋";
  color: red;
  font-weight: bold;
  display: inline-block;
  margin-left: 0.2em;
  animation: spin 1s linear infinite;
}

/* marcado con ≠ para contraseñas no iguales */

.form .field-group:has(.pass-not-equal) > label::after {
  content: " ≠";
  color: red;
  font-weight: bold;
  display: inline-block;
  margin-left: 0.2em;
  animation: shake 1s linear infinite;
}

/* deshabilitar botón submit si formulario inválido */

.form:invalid .button-group button[type="submit"],
.form:has(input.pass-not-equal) .button-group button[type="submit"],
.form:has(.check-group.required-one) .button-group button[type="submit"] {
  opacity: .5;
  cursor: not-allowed;
  pointer-events: none;
}

/* animaciones simples */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-1px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(1px);
  }
}
</style>