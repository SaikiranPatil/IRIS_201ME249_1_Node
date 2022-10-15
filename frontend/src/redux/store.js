import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { forgotPasswordReducer, userReducer, allUserReducer } from '../redux/reducers/userReducer'
import { newSubTaskReducer, newTaskReducer, taskDetailsReducer, taskReducer } from '../redux/reducers/taskReducer'

const reducer = combineReducers({
    user: userReducer,
    allUsers: allUserReducer,
    tasks: taskReducer,
    forgotPassword: forgotPasswordReducer,
    taskDetails: taskDetailsReducer,
    newTask: newTaskReducer,
    newSubTask: newSubTaskReducer
});

let initialState = {};
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;