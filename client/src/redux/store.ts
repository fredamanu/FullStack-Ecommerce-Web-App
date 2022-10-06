import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { State } from '../types'

function saveToLocalStorage(state: State) {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem("persistantState", serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState")
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

const initialState = {}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
