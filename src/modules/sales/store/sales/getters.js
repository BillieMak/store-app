// export const myGetter = (state) =>{

// }
export const getAllProductos = (state) => {
    return state.products
}

export const getElectronics = (state) => {
    return state.products.filter(({ category }) => category === 'electronics')
}

export const getJewelery = (state) => {
    return state.products.filter(({ category }) => category === 'jewelery')
}

export const getMenClothing = (state) => {
    return state.products.filter(({ category }) => category === "men's clothing")
}

export const getWomenClothing = (state) => {
    return state.products.filter(({ category }) => category === "women's clothing")
}

export const getByCategory = (_, getters) => (category = 0) => {
    const categories = {
        0: "getAllProductos",
        1: "getElectronics",
        2: "getJewelery",
        3: "getMenClothing",
        4: "getWomenClothing"
    };

    return getters[categories[category]] || getters.getAllProductos;
};

// export const getProductoByTitle = (_,getters) => (text = '') => {
//     return getters.getByCategory().filter(({ title }) => title.toLowerCase().includes(text.toLowerCase()))

// }