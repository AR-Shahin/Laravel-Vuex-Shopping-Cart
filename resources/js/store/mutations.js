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

export const REMOVE_FROM_CART = (state,data) => {
    state.cart = state.cart.filter((item) => {
        return item.product.id != data.id
    })
}
export const CLEAR_CART = (state) => {
    state.cart = []
}

export const PUSH_NOTIFICATION = (state, notification) => {
    state.notifications.push({
        ...notification,
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
    })
}

export const REMOVE_NOTIFICATION = (state, notificationToRemove) => {
    state.notifications = state.notifications.filter(notification => {
        return notification.id != notificationToRemove.id;
    })
}
