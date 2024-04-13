import store from '@/store'
import { computed } from 'vue'

import { ref } from "vue"
import useCart from './useCart'


const useModal = () => {

    const visible = computed(() => store.state.modal.visible)

    const product = computed(() => store.getters['modal/getProduct'])

    const openModal = () => store.commit('modal/openModal')
    
    const clearProduct = () => store.commit('modal/clearProduct')
    
    const setProduct = (product) => store.commit('modal/setProduct', product)
    
    const closeModal = () => {
        clearProduct()
        store.commit('modal/closeModal')
    }

    const quantity = ref(0)

    const { addToCart } = useCart()

    const onSave  = () => {
        addToCart(product.value, quantity.value)
        quantity.value = 0
        closeModal()
    }


    const clearQuantity = () => quantity.value = 0


    return {

        //properties
        visible,
        quantity,

        //methods
        openModal,
        closeModal,
        clearQuantity,
        setProduct,
        onSave,
    }

}

export default useModal