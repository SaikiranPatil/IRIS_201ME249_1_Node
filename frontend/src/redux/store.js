import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { forgotPasswordReducer, userReducer } from '../redux/reducers/userReducer'
import { taskDetailsReducer, taskReducer} from '../redux/reducers/taskReducer'

const reducer = combineReducers({
    user: userReducer,
    tasks: taskReducer,
    forgotPassword: forgotPasswordReducer,
    taskDetails: taskDetailsReducer
});

let initialState = {};
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;