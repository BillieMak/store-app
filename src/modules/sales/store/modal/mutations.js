export const openModal = (state) => {

    state.visible = true
}

export const closeModal = (state) => {

    state.visible = false
}
export const setProduct = (state, product) => {

    state.product = product
}

export const clearProduct = (state) => {
    state.product = {}
}