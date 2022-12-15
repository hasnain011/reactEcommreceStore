import {createSlice} from '@reduxjs/toolkit'



const cartSice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item => item.id !== action.payload)
        },
        
    }

})

export const {add, remove} = cartSice.actions;
export default cartSice.reducer;