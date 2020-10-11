// import { call, put, takeLatest } from 'redux-saga/effects'

// import { fetchCharactersInfo } from '../actions/actions'

// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* getApiData(action) {
//   try {
//     // do api call
//     const characters = yield call(fetchCharactersInfo)
//     yield put(fetchCharactersInfo(characters))
//   } catch (e) {
//     console.log(e)
//   }
// }

// export default function* mySaga() {
//   yield takeLatest(fetchCharactersInfo, getApiData)
// }