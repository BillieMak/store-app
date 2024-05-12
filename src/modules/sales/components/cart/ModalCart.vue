<template>
    <DialogC :closable="false" v-model:visible="visible" modal header="Cantidad" :style="{ width: '25rem' }">
        <span class="p-text-secondary block mb-5">Ingrese Cantidad</span>
        <div class="flex align-items-center gap-3 mb-3">
            <label for="username" class="font-semibold w-6rem">Cantidad</label>
            <!-- <input  type="number" v-model="quantity" /> -->
            <InputNumberC incrementButtonClass="font-size: 10px" v-model="quantity" inputId="minmax-buttons"
                mode="decimal" showButtons :min="0" :max="100" />
        </div>
        <div class="flex justify-content-end gap-2">
            <ButtonC type="button" label="Cancel" severity="secondary" @click="closeModal"></ButtonC>
            <ButtonC :disabled="quantity === 0" type="button" label="Save" @click="onSave"></ButtonC>
        </div>
    </DialogC>
</template>
<script setup>
import useModal from '../../composables/useModal';

const { quantity, visible, closeModal, onSave } = useModal();

</script>
<style scoped></style>