// export const myMutation = (state) => {

// }
export const addToCart = (state, { item, quantity }) => {
    // state.products.push(item)
    //verify if product exist 

    const productExis = state.products.find(product => product.item.id === item.id)

    if (productExis) {
        productExis.quantity += quantity
    } else {
        state.products.push({ item, quantity })
        state.total++
    }
}

export const removeFromCart = (state, item) => {
    state.products.splice(state.products.indexOf(item), 1)
    state.total--
}