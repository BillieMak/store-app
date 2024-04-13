// export const myGetter = (state) =>{

// }
export const getTotalFavs = (state) =>{
    return state.total
}

export const getFavs = (state) =>{
    return state.favs
}

export const isFavorite = (state) => (item) =>{
    return state.favs.includes(item)
}