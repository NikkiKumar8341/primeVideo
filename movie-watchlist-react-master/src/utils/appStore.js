import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../utils/cartSlice'

const appStore =configureStore({
    reducer:{
        favoriteCart:cartReducer
    }
});

export default appStore;