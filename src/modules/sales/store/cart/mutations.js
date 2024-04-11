// export const myMutation = (state) => {
    
// }
export const addToCart = (state, {item, quantity})=> {
    // state.products.push(item)
    state.products.push({item, quantity})
}