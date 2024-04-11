import products from '../../data/products.json'

export const loadProducts = async({commit}) => {
    try {

        commit('setProducts', products)
        
    } catch (error) {
        console.log(error)
    }
}

export const updateProduc = ({commit}, product) => {
    try {
       //todo service implementation
        commit('updateProduct', product)

    } catch (error) {
        console.log(error)
    }
}