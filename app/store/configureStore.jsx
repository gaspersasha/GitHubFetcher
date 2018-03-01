const redux = require('redux');
const thunk = require('redux-thunk').default;
import {userReducer, bioReducer, reposReducer} from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    user: userReducer,
    bio: bioReducer,
    repos: reposReducer
  });

    const store = redux.createStore(reducer, initialState, redux.compose(
      redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
