// export const myMutation = (state) => {
    
// }
export const setProducts = (state, products) => {
    state.products = products
    
}

export const updateProduct = (state, product) => {
    state.products = state.products.map(p => p.id === product.id ? product : p)
}