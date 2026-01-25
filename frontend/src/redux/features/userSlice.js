import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'user',
    initialState:{
        users:[],
    },
    reducers:{
        setUsers:(state, action) => {
            state.users = [...state.users, action.payload];
        }     
    }
});

export const {setUsers} = userReducer.actions;
export default userReducer.reducer;
