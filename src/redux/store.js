import { legacy_createStore as createStore } from 'redux'


const store = createStore(function (state, action) {
  if (action.type === "set-muvies-list") {
    return {
      ...state,
      muviesList: action.payload
    }
  }

  return state
}, {
  muviesList: []
})

export default store