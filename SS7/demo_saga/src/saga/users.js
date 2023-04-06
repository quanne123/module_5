// src/sagas/users.js

import {call, put, takeEvery} from 'redux-saga/effects';
import {
    getUsersSuccess,
    getUsersFailure,
    deleteUserSuccess,
    deleteUserFailure
} from '../actions';
import {
    GET_USERS_REQUEST,
    DELETE_USER_REQUEST
} from '../actions/types';
import {getUsersApi, deleteUserApi} from '../api';

// Worker saga cho việc lấy danh sách users
function* getUsersSaga() {
    try {
        const users = yield call(getUsersApi); // Gọi API để lấy danh sách users
        yield put(getUsersSuccess(users)); // Dispatch actions thành công với danh sách users
    } catch (error) {
        yield put(getUsersFailure(error)); // Dispatch actions thất bại với lỗi
    }
}

// Worker saga cho việc xóa user
function* deleteUserSaga(action) {
    try {
        const {userId} = action.payload;
        yield call(deleteUserApi, userId); // Gọi API để xóa user với userId được truyền vào
        yield put(deleteUserSuccess(userId)); // Dispatch actions thành công với userId của user đã bị xóa
    } catch (error) {
        yield put(deleteUserFailure(error)); // Dispatch actions thất bại với lỗi
    }
}

// Watcher saga để theo dõi các actions và gọi worker saga tương ứng
function* watchUsersSaga() {
    yield takeEvery(GET_USERS_REQUEST, getUsersSaga);
    yield takeEvery(DELETE_USER_REQUEST, deleteUserSaga);
}

export default watchUsersSaga;