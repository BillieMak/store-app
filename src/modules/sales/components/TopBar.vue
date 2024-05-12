<template>
    <div class="flex justify-content-between p-2 align-items-center gap-1 bg-white shadow-1 h-3rem">
        <div>
            <a href="https://www.youtube.com" target="_blank" rel="noopener">
                <ButtonC icon="pi pi-youtube" rounded class="text-red-600 text-large" text aria-label="Youtube" />
            </a>
            <a href="https://github.com/BillieMak" target="_blank" rel="noopener">
                <ButtonC icon="pi pi-github" class="text-black-alpha-90" text rounded aria-label="Github" />
            </a>
            <a href="https://www.linkedin.com/in/dbrivera/ " target="_blank" rel="noopener">
                <ButtonC icon="pi pi-linkedin" class="text-blue-700" text rounded aria-label="Linkedin" />
            </a>
            <a href="https://wa.me/51994078962?text=Hola%20Soy" target="_blank" rel="noopener">
                <ButtonC icon="pi pi-whatsapp" class="text-green-500" text rounded aria-label="Whatsapp" />
            </a>
        </div>
        <p class=" font-semibold "><i class="pi pi-megaphone"></i> Cupon code: <span class="cupon p-2 text-blue-50 border-round-md">FREE-123</span></p>
    </div>
</template>

<style scoped>
.cupon {
    background-image: linear-gradient(to right, #00c6ff 0%, #0072ff  51%, #00c6ff  100%);

}
</style>