// export const myMutation = (state) => {
    
// }
export const addToFavs = (state, item) => {

    state.favs.push(item)
    state.total++
}
export const removeFromFavs = (state, item) => {
    state.favs.splice(state.favs.indexOf(item), 1)
    state.total--
}