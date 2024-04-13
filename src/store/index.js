import { createStore } from 'vuex'

import sales from "../modules/sales/store/sales"
import cart from "../modules/sales/store/cart"
import favs from "../modules/sales/store/favs"
import modal from "../modules/sales/store/modal"

const store = createStore({
 modules: {
   sales,
   cart,
   favs,
   modal
 }
})

export default store
