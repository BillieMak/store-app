<template>
    <div class="grid h-screen">
        <div class="sm:col-12 md:col-6 flex justify-content-center align-items-center border-1 m-auto">
            <img :src="product?.image" :alt="product?.title" class="w-20rem" />
        </div>
        <div class="sm:col-12 md:col-6 p-4 lg:p-0 flex flex-column justify-content-center align-items-start gap-2 border-1">
            <h1>{{ product?.title }}</h1>
            <div class="flex gap-3 align-items-center h-1rem">
                <RatingC readonly :cancel="false" :modelValue="product?.rating.rate">
                    <template #onicon>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                    </template>
                    <template #officon>
                        <i class="pi pi-star text-yellow-500"></i>
                    </template>
                </RatingC>
                <p>
                    <i class="pi pi-user"></i>
                    <span class="ml-1">
                        {{ product?.rating.count }}
                    </span>
                </p>
            </div>
            <div class="flex gap-3 align-items-center">
                <p class="font-semibold">₹{{ product?.price }}</p>
                <TagC class="bg-red-600 text-white h-auto">
                    <span>- {{ product?.discount }} % off</span>
                </TagC>
            </div>
            <div>
                <p class="font-semibold">Only <span>{{ product?.stock }}</span> left in stock!</p>
            </div>
            <div class="w-9">
                <h2>Description</h2>
                <p>{{ product?.description }}</p>
            </div>
            <div class="flex gap-3">
                <div>
                    <InputNumberC :inputStyle="{ width: '5rem' }" v-model="quantity" showButtons :min="0" />
                </div>

                <ButtonC label="Add to cart" 
                :disabled="quantity === 0"
                severity="success" icon="pi pi-shopping-cart" iconPos="left"
                    @click="addItemToCart" />

                <ButtonC severity="danger" raised text rounded
                    :icon="isFavorite(product) ? 'pi pi-heart-fill' : 'pi pi-heart'" @click="addToFavs(product)"
                    iconPos="left" />
            </div>
            <div class="flex justify-content-end w-full gap-4 mt-4">
                <RouterLink :to="{ name: 'sales' }">
                    <ButtonC label="Back" raised severity="info" icon="pi pi-arrow-left" iconPos="left" />
                </RouterLink>

                <router-link :to="total === 0 ? '' : { name: 'cart' }">
                    <ButtonC label="Go to cart" :disabled="total === 0" raised severity="help" icon="pi pi-shopping-cart"
                        iconPos="right" />
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps, onMounted, onUpdated, ref, toRefs, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import useSale from '../composables/useSale';
import useFavs from '../composables/useFavs';
import useCart from '../composables/useCart';

const { productById } = useSale()

const { addToFavs, isFavorite } = useFavs()

const { addToCart, total } = useCart()

const router = useRouter()

const props = defineProps({
    id: {
        type: Number,
        required: true
    }
})

const { id } = toRefs(props)

const product = ref({})

const quantity = ref(1)

onBeforeMount(() => {
    product.value = productById(id.value).value
})


onMounted(() => {
    // console.log('produc', productById(id.value).value)
    product.value = productById(id.value).value
    if (!productById(id.value).value) {
        router.push({ name: 'notFound' })
    }
})

onUpdated(() => {
    product.value = productById(id.value).value
    if (!productById(id.value).value) {
        router.push({ name: 'notFound' })
    }
})

const addItemToCart = () => {
    addToCart(product.value, quantity.value)
    quantity.value = 1
}
</script>