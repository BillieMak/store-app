import { computed, onMounted, ref } from "vue"
import { useStore } from "vuex"

const useSale = () => {

    const store = useStore()

    const category = ref(0)

    const search = ref("")

    const filteredProducts = ref([])

    const productsByCategory = computed(() => store.getters['sales/getByCategory'](category.value))

    const productsByTitle = computed(() => store.getters['sales/getProductoByTitle'](search.value))

    const productById = (id) => computed(() => store.getters['sales/getProductById'](id))

    const searchProduct = () => {
        filteredProducts.value = productsByCategory.value.filter(({ title }) =>
            title.toLowerCase().includes(search.value.toLowerCase()) 
        )
    }
    onMounted(() => {
        store.dispatch('sales/loadProducts')
    })

    return {
        search,
        category,

        productById,
        productsByTitle,
        filteredProducts,
        searchProduct,
        productsByCategory,
    }
}

export default useSale