import axios from "axios"

export const getProducts = ({commit}) => {
    axios.get('http://127.0.0.1:8000/api/products')
        .then((res) => {
            commit('SET_PRODUCTS',res.data)
    })
}

export const getSingleProduct = ({commit},id) => {
    axios.get('http://127.0.0.1:8000/api/product/' + id)
    .then((res) => {
        commit('SET_SINGLE_PRODUCT',res.data)
    })
}

export const addToCart = ({commit},{product,quantity}) =>{
    commit('ADD_TO_CART',{product,quantity})
    axios.post('http://127.0.0.1:8000/api/cart',{
        product_id : product.id,
        quantity
    })
}
export const getCartItems = ({commit}) => {
    axios.get('http://127.0.0.1:8000/api/cart')
    .then((res) => {
        commit('GET_CART_ITEMS',res.data)
    })
}

export const removeFromCart = ({commit},payload) => {
    commit('REMOVE_FROM_CART',payload)
    axios.delete('http://127.0.0.1:8000/api/cart/' + payload.id)
    .then((res) => {
        console.log('deleted');
    })
}
export const clearCart = ({commit}) => {
    commit('CLEAR_CART')
    axios.delete('http://127.0.0.1:8000/api/cart/')
    .then((res) => {
        console.log('deleted');
    })
}
