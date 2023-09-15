import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    //name the slice
    name:'cart',
    //initial state

    initialState:{
        items:[]
    },
    reducers:{
        //reducer functions
        addItem:(state,action)=>{
            //mutating our state here
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        //originalState=["pizza"]
        clearCart:(state,action)=>{
             //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []
        //   console.log(state);
        //   console.log(current(state));
        //   state=[];
        //   console.log(state,"hihih");

           return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
        }
    }
})


export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;