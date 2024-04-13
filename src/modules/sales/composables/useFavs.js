import { computed } from "vue";
import { useStore } from "vuex"

const useFavs = () => {
    const store = useStore();

    const isFavorite = (item) =>  store.getters["favs/isFavorite"](item);

    const totalFavs = computed(() => store.getters["favs/getTotalFavs"]);

    const favs = computed(() => store.getters["favs/getFavs"]);

    const addToFavs = (item) => store.commit("favs/addToFavs", item);
    const removeFavs = (item) => store.commit("favs/removeFromFavs", item);

    return {
        favs,
        isFavorite,
        totalFavs,
        addToFavs,
        removeFavs
    }
}
export default useFavs