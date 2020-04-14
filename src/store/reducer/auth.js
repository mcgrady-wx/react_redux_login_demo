import { SET_CURRENT_USER } from "../const"
import isEmpty from "lodash/isEmpty"

const initstate={
	isAuthenticated:false,
    user:{}
}

const auth=(state=initstate,action)=>{
	switch(action.type){
		case SET_CURRENT_USER:
			return {
				isAuthenticated:!isEmpty(action.user),
				user:action.user
			}
		default:
			return state;
	}
}

export default auth