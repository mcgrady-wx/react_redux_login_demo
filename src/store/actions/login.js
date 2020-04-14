import axios from 'axios';
import setAuthorizationToken from "../../utils/setAuthorizationToken"
import { SET_CURRENT_USER } from "../const"
import jwtDecode from "jwt-decode"//编译jwt数据

export const login=(data)=>{
	return dispatch=>{
		return axios.post("/api/login",data).then(res=>{
			//保存到localStorage中
			//console.log(res.data)
			let token=res.data
			localStorage.setItem('jwtToken',token)
			//设置axios请求头
			setAuthorizationToken(token)
			//把jwt数据添加到redux
			dispatch(setCurrentUser(jwtDecode(token)))
		})
	}
}

//把jwt添加到redux
export const setCurrentUser=(user)=>{
	return {
		type:SET_CURRENT_USER,
		user
	}
}

//删除保存在redux中的jwt数据信息
export const logout=()=>{
	return dispatch=>{
		//删除localStorage中数据
		localStorage.removeItem('jwtToken')
		//取消axios请求头中的信息
		setAuthorizationToken(false)
		//删除redux中的jwt数据
		dispatch(setCurrentUser({}))
	}
}

export const isUsers=(username)=>{
	return dispatch=>{
		return axios.get(`/api/users/${username}`,username)
	}
}
