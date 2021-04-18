export const SET_PRODUCTS = (state,products) => {
    state.products = products
}

export const SET_SINGLE_PRODUCT = (state,product) => {
    state.product = product
}

export const ADD_TO_CART = (state,{product,quantity}) => {
    let productInCart = state.cart.find((item) => {
        return item.product.id === product.id
    })
    if(productInCart){
        productInCart.quantity += quantity
        return
    }
    state.cart.push({
        product,quantity
    })
}

export const GET_CART_ITEMS = (state,items) => {
    state.cart = items
}
