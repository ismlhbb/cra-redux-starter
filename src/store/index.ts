import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { ExampleAction } from '../components/example/example.actions';
import example from '../components/example/example.reducer';

const rootReducer = combineReducers({ example });

export type RootState = ReturnType<typeof rootReducer>;
export type AppActions = ExampleAction;

const middleware = [thunk as ThunkMiddleware<RootState, AppActions>];

const store = createStore(
  rootReducer,
  {},
  process.env.NODE_ENV !== 'production' ? composeWithDevTools(applyMiddleware(...middleware)) : applyMiddleware(...middleware)
);

export default store;
