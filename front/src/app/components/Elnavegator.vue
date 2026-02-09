<template lang="pug">
el-menu.nav-bar(
  ref="menuRef"
  :default-active="activeIndex"
  mode="horizontal"
  :ellipsis="() => menuRef?.value?.$el?.scrollWidth > menuRef?.value?.$el?.clientWidth"
  @select="handleSelect2"
  v-bind=" dark ? { backgroundColor: '#545c64', textColor: '#fff', activeTextColor: '#ffd04b' } : {} "
)
  // Logo
  el-menu-item(index="logo")
    component(
      :is="company?.logoUrl"
      width="32"
      :fill="dark ? 'white' : company?.logoColor || 'black'"
      :aria-label="company?.name || 'Logo'"
    )

  // Navegación principal
  template(v-for="(item, i) in navigation" :key="i")
    el-sub-menu(v-if="item.children" :index="`nav-${i}`")
      template(#title)
        | {{ item.name }}
      template(v-for="(child, j) in item.children" :key="j")
        el-menu-item(:index="`nav-${i}-${j}`")
          router-link(:to="child.href") {{ child.name }}

    el-menu-item(v-else :index="`nav-${i}`")
      router-link(:to="item.href") {{ item.name }}

  // Menú de usuario
  el-sub-menu(index="user" v-if="user")
    template(#title)
      el-avatar(:size="32" :src="user.avatar" class="mr-2")
      | {{ user.name }}
    template(v-for="(item, i) in userNavigation" :key="i")
      el-menu-item(:index="`user-${i}`") {{ item.name }}
  el-menu-item(v-else index="login")
    | Iniciar sesión
    LoginIcon(class="inline-block w-5 h-5 mr-2")
</template>

<style scoped>
.nav-bar {
  flex: 1;
  justify-content: space-between;
}
</style>

<script setup>
import { ref } from 'vue'
import { ArrowRightEndOnRectangleIcon as LoginIcon} from '@heroicons/vue/24/outline';

const props = defineProps({
  user: Object,
  navigation: Array,
  userNavigation: Array,
  company: Object,
  cb: Function,
  dark: Boolean
})

const activeIndex = ref('0')
const menuRef = ref(null)

function handleSelect(index) {
  activeIndex.value = index
    
  if (props.cb) {
    props.cb(index)
  }
}
function handleSelect2(index) {
  activeIndex.value = index
  let selected = null

  // Menú principal
  if (index.startsWith('nav-')) {
    const parts = index.split('-') // ej: ["nav","0","1"]
    const mainIndex = parseInt(parts[1])
    const item = props.navigation[mainIndex]
    if (parts.length === 2) {
      selected = item
    } else if (parts.length === 3) {
      const childIndex = parseInt(parts[2])
      selected = item.children[childIndex]
    }
  }

  // Menú de usuario
  else if (index.startsWith('user-')) {
    const i = parseInt(index.split('-')[1])
    selected = props.userNavigation[i]
  }

  // Pasamos el objeto completo al callback
  if (props.cb && selected) props.cb(selected)
}
</script>
