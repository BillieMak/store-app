import state from "./state";
import * as mutations from "./mutations";
import * as getters from "./getters";
import * as actions from "./actions";

const cartModule = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions

}
export default cartModule;