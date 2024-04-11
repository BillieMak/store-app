import { computed } from "vue"
import { useStore } from "vuex"

const useCart = () => {

    const store = useStore()

    const total = computed(() => store.getters['cart/getTotal'])

    const carts = computed(() => store.getters['cart/getCarts'])

    const addToCart = (item, quantity) => {
        store.commit('cart/addToCart', {item, quantity})
    }


    return {
        carts,
        total,
        addToCart
    }
}

export default useCart