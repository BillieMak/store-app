<template>
    <div class="flex justify-content-center w-screen sm:w-full">
        <h1 v-if="carts.length == 0">Cart Empty please Select some Item</h1>
        <DataTableC v-else class="table mt-5" :value="carts">
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-semibold text-white">Products - Cart</span>
                </div>
            </template>
            <ColumnC field="title" header="Name">
                <template #body="{ data }">
                    {{ data.item.title }}
                </template>
            </ColumnC>
            <ColumnC header="Image">
                <template #body="{ data }">
                    <img :src="data.item.image" :alt="data.image" class="w-6rem img" />
                </template>
            </ColumnC>
            <ColumnC field="price" header="Price">
                <template #body="{ data }">
                    {{ data.item.price }}
                </template>
            </ColumnC>
            <ColumnC field="category" header="Category" class="showCell">
                <template #body="{ data }">
                    {{ data.item.category }}
                </template>
            </ColumnC>
            <ColumnC field="quantity" header="Cantidad">
                <template #body="{ data }">
                    <InputNumberC :inputStyle="{ width: '4rem' }" v-model="data.quantity" showButtons :min="0" />
                    <!-- {{ data.quantity }} -->
                </template>
            </ColumnC>
            <ColumnC header="Action">
                <template #body="{ data }">
                    <ButtonC icon="pi pi-trash" @click="removeFromCart(data)" severity="danger" />
                </template>
            </ColumnC>

            <template #footer>
                <div class="flex flex-wrap align-items-center justify-content-between">
                    <p>Total: S/ {{ totalMount }}</p>
                    <router-link :to="{ name: 'payment' }" rel="noopener">
                        <ButtonC label="Buy" raised
                            class="ml-3 bg-yellow-500 border-yellow-500 text-gray-900 font-semibold"
                            icon="pi pi-shopping-bag" />
                    </router-link>
                </div>
            </template>
        </DataTableC>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import useCart from '../composables/useCart';

const { carts , removeFromCart} = useCart();

function calcTotalPrice(carts) {
    let total = 0;
    carts.forEach(({ item, quantity }) => {
        total += item.price * quantity;
    });
    return total;
}

const totalMount = computed(() => {
    return calcTotalPrice(carts.value);
});

</script>
<style>
.table {
    border-radius: 11px;
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.p-datatable-header {
    background-color: var(--blue-600);
}

.img {
    object-fit: contain;
    aspect-ratio: 1/1;

}

.showCell {
    display: table-cell;
}

@media (width> 459) {
    .showCell {
        display: none;
    }
}
</style>