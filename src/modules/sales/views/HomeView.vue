<template>
    <div class="flex flex-wrap justify-content-center gap-3">
        <InputTextC type="text" class="text-search" v-model="search" placeholder="Buscar Producto"
            @update:modelValue="onSearch" />
        <div class="flex flex-wrap justify-content-center align-items-center gap-3">
            <button class="btn" :class="category == 1 ? 'active' : ''" @click="toggleCategory(1)">Electrics</button>
            <button class="btn" :class="category == 2 ? 'active' : ''" @click="toggleCategory(2)">Jewelery</button>
            <button class="btn" :class="category == 3 ? 'active' : ''" @click="toggleCategory(3)">Men's</button>
            <button class="btn" :class="category == 4 ? 'active' : ''" @click="toggleCategory(4)">Women's</button>
        </div>
    </div>

    <div class="flex flex-wrap justify-content-center align-items-center gap-7 p-4 w-screen md:w-full">
        <!-- no products filter -->
        <template v-if="!filteredProducts.length || search.length === 0">
            <div v-for="product in productsByCategory" :key="product.id" class="card">
                <CardItem :product="product" />
            </div>
        </template>
        <!-- products filter -->
        <template v-else>
            <div v-for="product in filteredProducts" :key="product.id" class="card">
                <CardItem :product="product" />
            </div>
        </template>
    </div>
    <ModalCart />
</template>
<script setup>
import { computed } from "vue";
import useSale from "../composables/useSale";
import CardItem from "../components/home/CardItem.vue";
import ModalCart from '../components/cart/ModalCart.vue';


const { productsByCategory, category, searchProduct, search, filteredProducts } = useSale()


const shortText = (text, quantity) => {
    return text.substring(0, quantity);
}

computed(() => {
    return shortText;
})

const toggleCategory = (cat) => {
    if (category.value == cat) {
        category.value = 0
    } else {
        category.value = cat
    }

    search.value = ""

}

const onSearch = () => {
    setTimeout(() => {
        searchProduct()
    }, 800)
}



</script>

<style scoped>
.text-search {
    width: 80%;
    padding-left: 20px;
    height: 55px;
    border-radius: 25px;
    border: 1px solid rgba(214, 214, 214, 0.5);
    font-size: 1.2rem;
    background: #FFF;
    outline: none;
    box-shadow: 5px 5px 20px 0px rgba(181, 181, 181, 0.20);
}

.text-search:focus {
    box-shadow: 5px 5px 20px 0px rgba(181, 181, 181, 0.20);
}

.card {
    /* width: calc(518px - 50px);
    height: calc(327px - 50px); */
    display: flex;
    overflow: hidden;
    border-radius: 30px;
    background: #FFF;
    box-shadow: 5px 5px 20px 4px rgba(133, 133, 133, 0.20);
}

.btn {
    display: inline-block;
    width: auto;
    height: 40px;
    padding: 0 20px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid #dadee3;
    background: #FFF;
    box-shadow: 5px 5px 20px 0px rgba(181, 181, 181, 0.20);
    color: #474747;
    font-size: 20px;
    font-family: Almarai;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
}

.active {
    background: #dadee3;
}
</style>