import {takeLatest} from 'redux-saga/effects'
import Constants from '../constants'

function* loginUser(action) {
    try {

    } catch (error) {
        throw error;
    }
}

export function* loginUserWatch() {
    yield takeLatest(Constants.LOGIN, loginUser)
}
