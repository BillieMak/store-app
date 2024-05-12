<template>
  <form @submit.prevent="" class="flex flex-column gap-4 w-8">
    <div class="contact flex flex-column gap-2">
      <h3>Contacto</h3>
      <label for="email">Email</label>
      <IconFieldC>
        <InputIconC class="pi pi-envelope"> </InputIconC>
        <InputTextC class="w-full" id="email" type="email" placeholder="example@domain.com" />
      </IconFieldC>
    </div>
    <div class="delivery">
      <h3>Delivery</h3>
      <div class="flex flex-column gap-3">
        <!-- <label for="name">Name</label> -->
        <IconFieldC>
          <InputIconC class="pi pi-user"> </InputIconC>
          <InputTextC class="w-full" id="name" type="text" placeholder="Nombre" />
        </IconFieldC>
      </div>
      <div class="flex flex-column gap-3">
        <IconFieldC>
          <InputIconC class="pi pi-home"> </InputIconC>
          <InputTextC class="w-full" id="address" type="text" placeholder="Direccion" />
        </IconFieldC>
      </div>
      <div class="flex gap-4">
        <IconFieldC>
          <InputIconC class="pi pi-map-marker"> </InputIconC>
          <InputTextC class="w-full" id="city" type="text" placeholder="City" />
        </IconFieldC>
        <IconFieldC>
          <InputIconC class="pi pi-ethereum"> </InputIconC>
          <InputTextC class="w-full" id="zip-code" type="text" placeholder="Zip Code" />
        </IconFieldC>
      </div>
    </div>
    <div class="payment flex flex-column gap-3">
      <h3>Payment</h3>
      <div class="flex flex-column gap-2">
        <label for="card-number">Card Number</label>
        <IconFieldC>
          <InputIconC class="pi pi-credit-card"> </InputIconC>
          <!-- <InputTextC class="w-full" id="card-number" type="text" placeholder="1234 5678 9012 3456" /> -->
          <InputMaskC class="w-full" palceholder="1234 1234 1234 1234" mask="9999 9999 9999 9999" slotChar
            placeholder="Número de tarjeta" />
        </IconFieldC>
      </div>
      <div class="flex gap-4">
        <IconFieldC>
          <InputIconC class="pi pi-calendar"></InputIconC>
          <InputMaskC class="w-full" palceholder="dd/yy" mask="99/99" slotChar="dd/yy"
            placeholder="Expiration date" />
        </IconFieldC>
        <IconFieldC>
          <InputIconC class="pi pi-lock"> </InputIconC>
          <InputMaskC class="w-full" palceholder="123" mask="999" slotChar
            placeholder="Security Code" />
        </IconFieldC>
      </div>
      <div>
        <IconFieldC>
          <InputIconC class="pi pi-user"> </InputIconC>
          <InputTextC class="w-full" id="holder-name" type="text" placeholder="Nombre del Titular" />
        </IconFieldC>
        <div class="flex align-items-center mt-2">
          <CheckboxC v-model="checked" inputId="save-info" name="save-info" value="Guardar Datos" />
          <label for="save-info" class="ml-2"> Guardar Datos Para La Proxima Compra</label>
        </div>
      </div>
    </div>


  </form>
</template>


<script setup>

import { ref } from 'vue';

const checked = ref(false);
</script>
<style scoped>
.delivery div {
  margin-bottom: 10px;
}

label {
  user-select: none;
}
</style>