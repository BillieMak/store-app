<template>
    <div class="flex justify-content-center bg-white p-1 sm:w-auto overflow-hidden">
        <img class="img max-w-full max-h-full m-auto" :src="product.image" alt="Image" width="197" height="197" />
    </div>
    <div class="bg-gray-100 info px-4 flex flex-column align-items-start gap-0">
        <h3 class="border-200">
            <router-link class="text-black-alpha-90 no-underline"
                :to="{ name: 'product', params: { id: product.id }, }">
                {{ shortText(product.title, 20) }}
            </router-link>
        </h3>
        <p>{{ shortText(product.description, 20) }}</p>
        <div class="flex justify-content-between align-items-center gap-3"> Colors:
            <div class="container-colors inline-flex flex-row w-min gap-2 align-items-center p-2">
                <div v-for="color in product.colors" :key="color" class="circle" :style="'background-color:' + color">
                </div>
            </div>
        </div>
        <p>{{ product.stock }} left - {{ product.discount }} % off</p>
        <TagC :style="{ background: 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)' }">
            <img alt="Country" src="https://cdn-icons-png.flaticon.com/512/197/197563.png" class="flag flag-it mr-1"
                width="16" height="16" />
            <span class="text-white">Peru</span>
        </TagC>
        <div class="px-3 align-self-end w-full flex flex-row justify-content-between align-items-center gap-2">
            <p class="price">₹{{ product.price }}</p>
         <div>
            <i class="pi pi-shopping-cart p-overlay-badge mr-2" @click="addCart"></i>
            <i class="pi p-overlay-badge" :class="isFavorite(product) ? 'pi-heart-fill text-red-400' : 'pi-heart'"
                @click="addToFavs(product)"></i>
         </div>
        </div>
    </div>

</template>
<script setup>
import { defineProps, toRefs } from 'vue';

import useFavs from '../../composables/useFavs';
import useModal from '../../composables/useModal';


const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const { addToFavs, isFavorite } = useFavs()

const { product } = toRefs(props)

const { openModal, setProduct } = useModal()

const addCart = () => {
    openModal()
    setProduct(product.value)
}

const shortText = (text, quantity) => {
    return text.substring(0, quantity);
}

</script>

<style scoped>
.info {
    gap: 2px
}

.img {
    aspect-ratio: 1/1;
    object-fit: contain;
}

.container-colors {
    background-color: rgb(205, 205, 205);
    height: 30px;
    border-radius: 30px;
}

.circle {
    border-radius: 50%;
    width: 18px;
    height: 18px;
}

.price {
    margin-right: 75px;
    font-size: 18px;

}

.pi {
    font-size: 1.7rem;
    cursor: pointer;
}

</style>