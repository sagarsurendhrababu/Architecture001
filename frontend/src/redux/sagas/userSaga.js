import {call, put, takeLatest} from 'redux-saga/effects';

import axiosInterceptor from '../../api/axiosInterceptor.js';

import {fetchUserStart, fetchUsersSuccess, fetchUserFailure,
    createUserStart, createUserSuccess, createUserFailure ,
    deleteUserStart, deleteUserSuccess, deleteUserFailure,
 } from '../features/userSlice';


function* fetchUsersSaga() {
    try {
       const response =  yield call(axiosInterceptor.get, '/api/users');
       yield put(fetchUsersSuccess(response.data));
    }catch(err){
        yield put(fetchUserFailure(err.message));
    }
}

function* createuserSaga(action) {
    try{
       const response =  yield call(axiosInterceptor.post, '/api/users', action.payload);
        yield put(createUserSuccess(response.data));
    }catch(err){
        yield call(createUserFailure(err.message));
    }
}

function* deleteUserSaga(action) {
    try{
       yield call(axiosInterceptor.delete, `/api/users/${action.payload}`);
        yield put(deleteUserSuccess(action.payload));
    }catch(err){
        yield call(deleteUserFailure(err.message));
    }
}

export default function* userSaga(){
    yield takeLatest(fetchUserStart.type, fetchUsersSaga);
    yield takeLatest(createUserStart.type, createuserSaga);
    yield takeLatest(deleteUserStart.type, deleteUserSaga);
}