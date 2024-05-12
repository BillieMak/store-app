<template>
  <div class="grid">
    <div class="md:col-5">
      <h2 class="text-center">Complente sus Datos <i class="pi pi-truck"></i></h2>
      <div class="flex justify-content-center">
        <FormPayment />
      </div>
    </div>
    <div class="md:col-7 p-4">
      <h2>Resumen de compra <i class="pi pi-shop"></i></h2>
      <div class="card">
        <DataTableC class="shadow-1 mt-5" :value="carts">
          <template #header>
            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
              <span class="text-xl text-900 font-semibold text-white">Products</span>
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
          <ColumnC header="Total">
                <template #body="{ data }">
                    {{ parseFloat((data.item.price * data.quantity).toFixed(2)) }}
                </template>
            </ColumnC>
          <template #footer>
            <div class="flex flex-wrap align-items-center justify-content-between">
              <InputTextC v-model="cupon" id="code-cupon" type="text" placeholder="Code Cupon" />
              <TagC v-if="couponApplied">{{ couponApplied }}</TagC>
              <ButtonC label="Apply Cupon" class="bg-bluegray-800 text-white border-bluegray-700" raised
                @click="validateCupon" />
            </div>
            <br />
            <div class="flex flex-wrap align-items-center justify-content-between">
              <p>Total: S/ {{ totalMount }}</p>
              <ButtonC label="Pay" class="bg-yellow-500 text-gray-900 border-yellow-500" raised icon="pi pi-wallet" />
            </div>
          </template>
        </DataTableC>
      </div>
    </div>
  </div>
</template>
<script setup>

import FormPayment from '../components/payment/FormPayment.vue';

import usePayment from '../composables/usePayment';

const { cupon, couponApplied, totalMount, validateCupon, carts } = usePayment();

</script>
