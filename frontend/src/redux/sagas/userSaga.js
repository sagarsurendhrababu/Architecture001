import {call, put, takeLatest, select} from 'redux-saga/effects';

import axiosInterceptor from '../../api/axiosInterceptor.js';

import {fetchUserStart, fetchUsersSuccess, fetchUserFailure,
    createUserStart, createUserSuccess, createUserFailure ,
    deleteUserStart, deleteUserSuccess, deleteUserFailure, setPage,   
 } from '../features/userSlice';


function* fetchUsersSaga() {
    const {page, limit, filter} = yield select (state => state.users);
    try {
       const response =  yield call(axiosInterceptor.get, `/api/users?page=${page}&limit=${limit}&filter=${filter}`);
       yield put(fetchUsersSuccess(response.data));
    }catch(err){
        yield put(fetchUserFailure(err.message));
    }
}

function* createuserSaga(action) {
    try{
       const response =  yield call(axiosInterceptor.post, '/api/users', action.payload);
        yield put(createUserSuccess(response.data));
        const {limit} = yield select (state => state.users);    
         yield put(fetchUserStart({page:1, limit})); 
         yield put(setPage(1));
    }catch(err){
        yield call(createUserFailure(err.message));
    }
}

function* deleteUserSaga(action) {
    try{
        //remove item from database
       yield call(axiosInterceptor.delete, `/api/users/${action.payload}`);

        //removed item from user store
        yield put(deleteUserSuccess(action.payload));

        //pagination Number code
        const {page,users,limit} = yield select (state => state.users);        
        // refetching user data after deletion
        
        if(users.length === 0 && page > 1){
            yield put(setPage(page - 1));
            yield put(fetchUserStart({page, limit})); 
        }else{
            yield put(fetchUserStart({page, limit})); 
        }        

    }catch(err){
        yield call(deleteUserFailure(err.message));
    }
}

export default function* userSaga(){
    yield takeLatest(fetchUserStart.type, fetchUsersSaga);
    yield takeLatest(createUserStart.type, createuserSaga);
    yield takeLatest(deleteUserStart.type, deleteUserSaga);
}