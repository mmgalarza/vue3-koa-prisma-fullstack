<template lang="pug">
v-footer(class="bg-grey-darken-4 text-white py-16 d-block")
  v-container
    v-row
      v-col(cols="12" md="4")
        div.text-h4.font-weight-black.mb-4.text-primary WEB
          span.text-white Burguer
        p.text-grey-lighten-1.mb-6.text-body-2 
          | Pasión por la carne, compromiso con el sabor. 
        div.d-flex.ga-4
          v-btn(icon="mdi-facebook" variant="tonal" size="small" color="white")
          v-btn(icon="mdi-instagram" variant="tonal" size="small" color="white")
          v-btn(icon="mdi-whatsapp" variant="tonal" size="small" color="green")

      v-col(cols="12" sm="6" md="3")
        div.text-subtitle-1.font-weight-bold.mb-4.text-uppercase Horarios
        v-list(bg-color="transparent" density="compact" class="pa-0 text-grey-lighten-1")
          v-list-item.px-0(v-for="h in horarios" :key="h.dia")
            v-list-item-title.text-caption {{ h.dia }}: {{ h.hora }}
      
      v-col(cols="12" sm="6" md="2")
        div.text-subtitle-1.font-weight-bold.mb-4.text-uppercase Empresa
        div.d-flex.flex-column.ga-2
          a.text-grey-lighten-1.text-caption.text-decoration-none(v-for="link in links" :key="link" href="#") {{ link }}

      v-col(cols="12" md="3")
        div.text-subtitle-1.font-weight-bold.mb-4.text-uppercase Únete al Club
        v-text-field(label="Tu email" variant="solo-filled" density="compact" flat bg-color="grey-darken-3")
        div.mt-4.d-flex.ga-2.opacity-60
          v-icon(size="32") mdi-visa
          v-icon(size="32") mdi-mastercard

    v-divider.my-10.border-opacity-25
    div.text-center.text-grey.text-caption © 2026 WEBBurguer
</template>

<script setup lang="ts">
const horarios = [
  { dia: 'Lun a Jue', hora: '19:00 - 00:00' },
  { dia: 'Vie y Sáb', hora: '19:00 - 01:30' },
  { dia: 'Domingos', hora: '12:00 - 23:30' }
]
const links = ['Sobre Nosotros', 'Sedes', 'Alérgenos', 'Privacidad']
</script>