import axios from "axios"
import Product from '../apis/Product'
import Api from "../apis/Api"
export const getProducts = async ({commit}) => {
  const res = await  Product.all()
  commit('SET_PRODUCTS',res.data)
}

export const getSingleProduct = ({commit},id) => {
    axios.get('http://127.0.0.1:8000/api/product/' + id)
    .then((res) => {
        commit('SET_SINGLE_PRODUCT',res.data)
    })
}

export const addToCart = ({commit,dispatch},{product,quantity}) =>{
    commit('ADD_TO_CART',{product,quantity})

    // axios.post('http://127.0.0.1:8000/api/cart',{
    //     product_id : product.id,
    //     quantity
    // })
    Api.post('cart',{
            product_id : product.id,
            quantity
        })
        dispatch('addNotification', {
            type: 'success',
            flag : 'shahin',
            message: 'Product added to cart.'
        });
}
export const getCartItems = ({commit}) => {
    axios.get('http://127.0.0.1:8000/api/cart')
    .then((res) => {
        commit('GET_CART_ITEMS',res.data)
    })
}

export const removeFromCart = ({commit,dispatch},payload) => {
    commit('REMOVE_FROM_CART',payload)
    axios.delete('http://127.0.0.1:8000/api/cart/' + payload.id)
    .then((res) => {
        console.log('deleted');
    })
    dispatch('addNotification', {
        type: 'danger',
        flag : 'rest',
        message: 'Product delete from cart.'
    });
}
export const clearCart = ({commit}) => {
    commit('CLEAR_CART')
    axios.delete('http://127.0.0.1:8000/api/cart/')
    .then((res) => {
        console.log('deleted');
    })
}
export const addNotification = ({ commit }, notification) => {
    commit('PUSH_NOTIFICATION', notification);
}

export const removeNotification = ({ commit }, notification) => {
    commit('REMOVE_NOTIFICATION', notification);
}
