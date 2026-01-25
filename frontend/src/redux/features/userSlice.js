import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'user',
    initialState:{
        users:[],
        load:false,
        error:null
    },
    reducers:{
        createUserStart:(state) => {
            state.load = true;
            state.error = null;          
        },        
        createUserSuccess:(state, action) => {
            state.load = false;
            state.users = [action.payload, ...state.users];
        },
        createUserFailure:(state, action) => {
            state.load = false;
            state.error = action.payload;
        },

        fetchUserStart: (state) => {
            state.load = true;
        },
        fetchUsersSuccess:(state, action) => {
            state.load = false
            state.users = action.payload;
        },
        fetchUserFailure:(state, action) => {
            state.load = false;
            state.error = action.payload;
        }, 

        updateUserStart: (state) => {
            state.load = true;
        },
        updateUserSuccess:(state, action) => {
            state.load = false
            state.users = state.users.map(user => 
                user.id === action.payload.id ? {...user, ...action.payload} : user
            );
        },
        updateUserFailure:(state, action) => {
            state.load = false;
            state.error = action.payload;
        },
        
        deleteUserStart: (state) => {
            state.load = true;
        },
        deleteUserSuccess:(state, action) => {
            state.load = false
            state.users = state.users.filter(user => user._id !== action.payload);
        },
        deleteUserFailure:(state, action) => {
            state.load = false;
            state.error = action.payload;
        }
    }
});

export const {createUserStart,createUserSuccess,createUserFailure,
    fetchUserStart, fetchUsersSuccess, fetchUserFailure,
    updateUserStart, updateUserSuccess, updateUserFailure,
    deleteUserStart, deleteUserSuccess, deleteUserFailure    
} = userReducer.actions;

export default userReducer.reducer;
