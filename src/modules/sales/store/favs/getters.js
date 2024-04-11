// export const myGetter = (state) =>{

// }
export const getTotalFavs = (state) =>{
    return state.favs.length
}

export const getFavs = (state) =>{
    return state.favs
}

export const isFavorite = (state) => (item) =>{
    return state.favs.includes(item)
}