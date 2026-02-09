<template lang="pug">
el-menu.el-menu-demo(
  :default-active="activeIndex"
  mode="horizontal"
  :ellipsis="false"
  @select="handleSelect"
)
  el-menu-item(index="0")
    logoSvg(
      width="32"
      alt="Element logo"
    )

  el-menu-item(index="1")
    router-link(to="/login") Processing Center

  el-sub-menu(index="2")
    template(#title)
      | Workspace

    el-menu-item(index="2-1") item one
    el-menu-item(index="2-2") item two
    el-menu-item(index="2-3") item three

    el-sub-menu(index="2-4")
      template(#title)
        | item four

      el-menu-item(index="2-4-1") item one
      el-menu-item(index="2-4-2") item two
      el-menu-item(index="2-4-3") item three
  el-sub-menu(index="user")
    template(#title)
      el-avatar(
        :size="32"
        src="https://i.pravatar.cc/150"
        class="mr-2"
      ) 
      | Juan

    el-menu-item(index="profile") Perfil
    el-menu-item(index="logout") Cerrar sesión
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LogoSvg from '@/assets/images/icon/logo.svg?component';

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>