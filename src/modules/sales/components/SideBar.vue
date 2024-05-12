<template>
  <div class="hidden sm:flex flex-column gap-8 px-3 w-min mx-auto mt-8 py-7 bg-white fixed cuchichea">
    <router-link class="lenk" :to="{ name: 'sales' }">
      <i v-badge.info class="pi pi-bell p-overlay-badge text-black-alpha-90" style="font-size: 2rem" id="noti" />
      <label v-show="isOpen" for="noti" class="text-black-alpha-90"
        :style="!isOpen ? 'width: 0; overflow: hidden' : ''">Notify</label>
    </router-link>
    <router-link class="lenk" :to="{ name: 'favs' }">
      <i v-badge.danger="totalFavs || '0'" class="pi pi-heart-fill p-overlay-badge text-red-400" style="font-size: 2rem"
        id="favs" />
    </router-link>
    <router-link class="lenk" :to="{ name: 'cart' }">
      <i v-badge.info="total" class="pi pi-shopping-cart p-overlay-badge text-black-alpha-90" style="font-size: 2rem"
        id="cart" />
    </router-link>
    <router-link class="lenk" :to="{ name: 'sales' }">
      <AvatarC image="https://www.w3schools.com/howto/img_avatar.png" style="background-color: #2196f3; color: #ffffff"
        size="large" shape="circle" id="ava" />

    </router-link>
    <a class="lenk" @click="toggle">
      <AvatarC :icon="isOpen ? 'pi pi-chevron-right' : 'pi pi-chevron-left'" size="large"
        style="background-color: #1f1f1f; color: #ffffff" shape="circle" />
    </a>
  </div>
</template>
<script setup>
import { ref } from 'vue';

import useCart from '../composables/useCart';
import useFavs from '../composables/useFavs';

const isOpen = ref(false);

const { total } = useCart();
const { totalFavs } = useFavs();

</script>
<style scoped>
.lenk {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.5s;

}

.cuchichea {
  transition: all 0.5s;
  border-radius: 30px;
  border: 1px solid rgba(184, 184, 184, 0.3);
  background: #FFF;
  box-shadow: 5px 5px 20px 0px rgba(133, 133, 133, 0.20);
}
</style>