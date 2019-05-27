import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';

export const middleware = [
    promise, thunkMiddleware
]