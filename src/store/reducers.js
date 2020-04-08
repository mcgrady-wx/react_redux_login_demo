import { combineReducers } from "redux";
import auth from './reducer/auth';
import flashMessages from './reducer/flashMessages';

const reducers=combineReducers({
	auth,flashMessages
})
 export default reducers