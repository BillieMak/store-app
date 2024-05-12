import { computed } from "vue"
import { useStore } from "vuex"
import { useToast } from "primevue/usetoast"

const useCart = () => {

    const toast = useToast()

    const store = useStore()

    const total = computed(() => store.getters['cart/getTotal'])

    const carts = computed(() => store.getters['cart/getCarts'])

    const addToCart = (item, quantity) => {
        store.commit('cart/addToCart', {item, quantity})

        toast.add({ severity: 'success', summary: 'Correct', detail: 'Product added', life: 2000 })
    }
    const removeFromCart = (item) => {
        store.commit('cart/removeFromCart', item)
    }


    return {
        carts,
        total,
        addToCart,
        removeFromCart,
    }
}

export default useCart