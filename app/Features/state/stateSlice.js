const { createSlice } = require("@reduxjs/toolkit");


const stateSlice = createSlice({
    name:"state",
    initialState:{
        name:''
    },
    reducers:{
        change:(state,action)=>{
            state.name = action.payload;
        }
        
    }
})
export const {change}= stateSlice.actions;
export default stateSlice.reducer;