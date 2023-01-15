import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import favoriteReducer from './favoriteSlice'
import productsReducer from './productsSlice'





const store = configureStore ({
    reducer:{
        cartItems: cartReducer,
        favoriteItems: favoriteReducer,
        products: productsReducer
    }
})

export default store

