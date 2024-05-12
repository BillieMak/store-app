<template>
    <div class="card flex justify-content-center w-full">

        <h1 v-if="favs.length == 0">Cart Empty please Select some Item</h1>

      <DataTableC v-else class="table mt-5" :value="favs" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-semibold text-white">Favoritos</span>
                </div>
            </template>
            <ColumnC field="title" header="Name"></ColumnC>

            <ColumnC header="Image">
                <template #body="{data}">
                    <img :src="data.image"
                        :alt="data.image" class="w-6rem shadow-2 border-round" />
                </template>
            </ColumnC>
            <ColumnC field="price" header="Price">
                <template #body="{data}">
                   {{ data.price }}
                </template>
            </ColumnC>
            <ColumnC field="category" header="Category"></ColumnC>
        
            <template #footer> In total there are {{ favs ? favs.length : 0 }} products. </template>
        </DataTableC>
    </div>

</template>
<script setup>
import useFavs from '../composables/useFavs';

const { favs } = useFavs()
</script>