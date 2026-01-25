import {all} from 'redux-saga/effects';

import userSagar from './userSaga.js';

export default function* rootSaga(){
    yield all([userSagar()]);
}

