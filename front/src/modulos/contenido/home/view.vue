<template lang="pug">
  div
    //- Bloque 1: Hero Section (Impacto)
    section.bg-grey-lighten-4.py-16.d-flex.align-center(style="min-height: 80vh")
      v-container
        v-row(align="center")
          v-col(cols="12" md="7")
            v-chip.mb-4(color="primary" variant="flat" size="small") NUEVA VERSIÓN 2026
            h1.text-h1.font-weight-black.mb-6 
              | Gestión con 
              span.text-primary Rigor
            p.text-h5.text-grey-darken-1.line-height-lg
              | La plataforma centralizada para el control total de tus clientes, 
              | facturación y analítica operativa. Sin fricciones, sin ambigüedades.
            div.d-flex.ga-4.mt-8
              v-btn(color="primary" size="x-large" elevation="0" to="/login") Comenzar ahora
              v-btn(variant="outlined" size="x-large" to="/catalogo") Ver Catálogo
          v-col.d-none.d-md-flex(cols="12" md="5" justify="center")
            v-icon(size="400" color="grey-lighten-2") mdi-shield-refresh-outline

    //- Bloque 2: Métricas (Confianza rápida)
    section.py-12.bg-white
      v-container
        v-row.text-center
          v-col(cols="12" sm="4" v-for="(stat, i) in stats" :key="i")
            .text-h3.font-weight-black.text-primary {{ stat.value }}
            .text-overline.text-grey {{ stat.label }}

    //- Bloque 3: Características Detalladas (Solución)
    section.py-16.bg-grey-lighten-5
      v-container
        v-row.mb-12.text-center
          v-col(cols="12" md="8" offset-md="2")
            h2.text-h4.font-weight-bold Todo lo que necesitas en un solo lugar
            p.text-body-1.text-grey Diseñado para administradores que buscan precisión.
        
        v-row
          v-col(cols="12" md="4" v-for="feat in features" :key="feat.title")
            v-card.pa-6.fill-height(variant="flat" border)
              v-avatar.mb-4(color="primary" variant="tonal" rounded)
                v-icon(:icon="feat.icon")
              .text-h6.font-weight-bold.mb-2 {{ feat.title }}
              .text-body-2.text-grey-darken-1 {{ feat.desc }}

    //- Bloque 4: El Proceso (Cómo funciona)
    section.py-16.bg-white
      v-container
        v-row(align="center")
          v-col(cols="12" md="6")
            v-img(src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg" cover height="400" rounded="xl")
          v-col(cols="12" md="6").pl-md-10
            h2.text-h4.font-weight-bold Flujo de trabajo optimizado
            v-timeline(side="end" align="start" density="compact").mt-6
              v-timeline-item(dot-color="primary" size="x-small")
                .text-subtitle-1.font-weight-bold Registro de Usuario
                .text-body-2 Crea cuentas seguras con validación instantánea.
              v-timeline-item(dot-color="primary" size="x-small")
                .text-subtitle-1.font-weight-bold Vinculación Fiscal
                .text-body-2 Asocia datos de cliente para facturación automatizada.
              v-timeline-item(dot-color="primary" size="x-small")
                .text-subtitle-1.font-weight-bold Control Total
                .text-h6.text-primary.mt-2 Gestión en tiempo real.

    //- Bloque 5: FAQ Corto / Soporte
    section.py-16.bg-grey-lighten-4
      v-container
        v-row(justify="center")
          v-col(cols="12" md="8").text-center
            h2.text-h4.font-weight-bold ¿Listo para dar el siguiente paso?
            p.text-h6.text-grey.my-6 Únete a los más de 1,000 administradores que ya optimizan su tiempo con nosotros.
            v-btn(color="primary" size="x-large" block to="/auth/register") Crear mi cuenta gratuita

    //- Footer Footer
    v-footer.bg-white.border-t.pa-10
      v-container
        v-row
          v-col(cols="12" md="4")
            .text-h6.font-weight-black.text-primary MI APP 2026
            .text-body-2.mt-2 Rigor analítico para empresas modernas.
          v-col(cols="6" md="4")
            .text-subtitle-2.font-weight-bold Enlaces
            v-list(density="compact").bg-transparent
              v-list-item.pa-0(to="/catalogo") Catálogo
              v-list-item.pa-0(to="/login") Acceso
          v-col(cols="6" md="4")
            .text-subtitle-2.font-weight-bold Legal
            v-list(density="compact").bg-transparent
              v-list-item.pa-0 Privacidad
              v-list-item.pa-0 Términos
</template>

<script setup lang="ts">
const stats = [
  { value: '99.9%', label: 'Uptime del Sistema' },
  { value: '24/7', label: 'Soporte Técnico' },
  { value: '10ms', label: 'Latencia de API' }
]

const features = [
  { title: 'Validación Zod', icon: 'mdi-shield-check', desc: 'Garantizamos que cada dato que entra en el sistema cumple con el contrato definido.' },
  { title: 'Roles y Permisos', icon: 'mdi-lock-open-check', desc: 'Segmentación estricta entre Administradores, Usuarios y Superusuarios.' },
  { title: 'Facturación Integrada', icon: 'mdi-file-document-edit', desc: 'Gestión de datos de cliente vinculada directamente a tu flujo de negocio.' }
]
</script>

<style scoped>
.line-height-lg {
  line-height: 1.6;
}
.min-vh-70 {
  min-height: 70vh;
}
</style>