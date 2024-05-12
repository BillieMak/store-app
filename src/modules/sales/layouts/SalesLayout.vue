<template>
    <div class="grid">
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
</template>
<script setup>

import { useRouter, useRoute } from 'vue-router';
import SideBar from '../components/SideBar.vue'
import { onMounted, watch } from 'vue';

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