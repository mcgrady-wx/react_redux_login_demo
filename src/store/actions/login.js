import axios from 'axios';

export const login=(data)=>{
	return dispatch=>{
		return axios.post("/api/login",data)
	}
}

export const isUsers=(username)=>{
	return dispatch=>{
		return axios.get(`/api/users/${username}`,username)
	}
}
