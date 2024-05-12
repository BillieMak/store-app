<template>
  <h1 class="text-center">Page no found</h1>

  <main class="flex flex-column align-items-center gap-3 mt-5">
    <img src="@/assets/notfound.webp" alt="">
    <ButtonC label="Go Home" @click="goHome" severity="info" icon="pi pi-arrow-left" iconPos="left">
      Regresar</ButtonC>
  </main>

</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goHome = () => {
  router.push({ name: 'home' });
}
</script>