import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favoriteItems:[],

  };

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers:{
        addToFavorite(state, action){
            console.log('add to favo')
            const existingIndex = state.favoriteItems.findIndex((item)=> item.id === action.payload.id)
            
                if(existingIndex >= 0) {
                    state.favoriteItems[existingIndex].cartQuantity += 1;                
                } else{
                    const tempProduct = { ...action.payload, cartQuantity: 1 };
                    state.favoriteItems.push(tempProduct);
                }
        },
        removeFromFavorite(state, action) {
            state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload.id)
            console.log('remove to favo')
        }

    }

})


const { actions, reducer } = favoriteSlice
export const { addToFavorite, removeFromFavorite} = actions
export default reducer