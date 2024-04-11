<template>
    <div class="flex justify-content-center w-full">


        <h1 v-if="carts.length == 0">Cart Empty please Select some Item</h1>

        <DataTableC v-else class="table mt-5" :value="carts" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">Products</span>
                </div>
            </template>
            <ColumnC field="title" header="Name">
                <template #body="{ data }">
                    {{ data.item.title }}
                </template>
            </ColumnC>

            <ColumnC header="Image">
                <template #body="{ data }">
                    <img :src="data.item.image" :alt="data.image" class="w-6rem shadow-2 border-round" />
                </template>
            </ColumnC>
            <ColumnC field="quantity" header="Cantidad">
                <template #body="{ data }">
                    {{ data.quantity }}
                </template>
            </ColumnC>
            <ColumnC field="price" header="Price">
                <template #body="{ data }">
                    {{ data.item.price }}
                </template>
            </ColumnC>
            <ColumnC field="category" header="Category">
                <template #body="{ data }">
                    {{ data.item.category }}
                </template>
            </ColumnC>

            <template #footer> In total there are {{ carts ? carts.length : 0 }} products. </template>
        </DataTableC>

    </div>
</template>
<script setup>
import useCart from '../composables/useCart';

const { carts } = useCart();
</script>
<style scoped>
.table {
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
</style>