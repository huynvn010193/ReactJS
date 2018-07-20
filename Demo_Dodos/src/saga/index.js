import * as actions from './../constants/ActionType'
import { callAPI } from './../services/AxiosAPI';
import { put, takeEvery, fork } from 'redux-saga/effects';

function* fetchData () {
    const items = yield callAPI();
    yield put({ type: 'GET_ITEMS' , items })
}

export function* dataSaga () {
    yield takeEvery(actions.GET_ALL_ITEMS, fetchData)
}

export default function* root() {
    yield fork(fetchData)
}