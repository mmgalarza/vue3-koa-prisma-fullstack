<template lang="pug">
section.hero
  .text-center
    h1(class="text-5xl font-semibold tracking-tight text-balance sm:text-7xl")
      | {{ title }}
    p(class="mt-8 text-2xl font-medium text-pretty sm:text-xl\\/8")
      | {{ subtitle }}
    a(class="btn-action rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="#")
      | {{ cta }}
  a#btn-down(class="mt-6 inline-block" href="#main-content")
    component(:is="ArrowDownSvg" class="w-12 h-12 hover:animate-bounce text-indigo-600" stroke="yellow" stroke-width=0 aria-hidden="true")
</template>

<style scoped>
.hero {
    grid-area: hero;
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3rem;
    font-weight: bold;
    overflow: hidden;
    position: relative;
    flex-direction: column;
}

.hero::before {
  content: '';
  position: absolute;
  background: url('https://picsum.photos/1200/400') center/cover no-repeat black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  filter: contrast(0.5);
  /*transition: opacity 4s ease-in-out;*/
  animation: fadeInBg 2s ease-in-out forwards;
  z-index: 1;  
}

@keyframes fadeInBg {
  to {
    opacity: 1;
  }
}
.hero * {
  position: relative;
  z-index: 2;
}

.hero h1 {
    color: rgb(243, 243, 64);
    filter: drop-shadow(2px 4px 6px black);
}

.hero p {
    color: white;
    filter: drop-shadow(2px 4px 6px black);
    padding: 10px 10px;
    margin: 10px 20px;
    border-radius: 8px;
}

.hero .btn-action {
    margin-top: 0;
    padding: 10px 20px;
    background-color: #4F46E5; /* Indigo-600 */
    font-variant: small-caps;
    font-size: 1.2rem;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    filter: drop-shadow(2px 4px 6px black);
    transition: background-color 0.3s ease;
}
.hero .btn-action:hover {
    background-color: #4338CA;
}

#btn-down {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    filter: drop-shadow(2px 4px 6px black);
}
</style>

<script setup>
import ArrowDownSvg from '@/assets/images/icon/arrowDown2.svg?component'

defineProps({
  title: String,
  subtitle: String,
  cta: String
});
</script>
