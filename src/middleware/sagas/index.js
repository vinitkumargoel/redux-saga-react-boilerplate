import {all, fork} from 'redux-saga/effects'
import {loginUserWatch} from "./user.sagas";

export default function* rootSaga() {
    yield all([
        fork(loginUserWatch),
    ])
};
