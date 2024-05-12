<template>
    <div class="absolute w-full top-0 left-0">
        <TopBar />
    </div>
    <div class="grid mt-7">
        <div class="sm:col-12 md:col-11">
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" :key="$route.name" />
                </keep-alive>
            </router-view>
        </div>
        <div class="sm:col-12 md:col-1 sm:hidden md:flex justify-content-center">
            <SideBar/>
        </div>
    </div>
    <ToastC />
</template>
<script setup>

import { onMounted, watch } from 'vue';

import { useRouter, useRoute } from 'vue-router';

import SideBar from '../components/SideBar.vue'
import TopBar from '../components/TopBar.vue'

const router = useRouter();
const route = useRoute();


onMounted(() => {
    router.push({ name: 'sales' });
})

watch(route, () => {
    if (route.name === 'home') {
        router.push({ name: 'sales' });
    }
})

</script>
<style scoped>
* {
    padding: 0;
}
</style>