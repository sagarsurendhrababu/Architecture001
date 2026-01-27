import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'user',
    initialState:{
        users:[],
        totalUsers:0,
        limit:3,
        page:1,
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
            state.users = action.payload.users;
            state.totalUsers = action.payload.totalUsers;
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
        },
        setPage: (state, action) => {  
            state.page = action.payload;
        }
    }
});  

export const {createUserStart,createUserSuccess,createUserFailure,
    fetchUserStart, fetchUsersSuccess, fetchUserFailure,
    updateUserStart, updateUserSuccess, updateUserFailure,
    deleteUserStart, deleteUserSuccess, deleteUserFailure,
    setPage    
} = userReducer.actions;

export default userReducer.reducer;
