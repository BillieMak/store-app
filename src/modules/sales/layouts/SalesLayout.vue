<template>
    <div class="grid">
        <div class="col-11">
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" :key="$route.name" />
                </keep-alive>
            </router-view>
        </div>
        <div class="col-1">
            <SideBar />
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