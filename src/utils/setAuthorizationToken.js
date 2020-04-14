import axios from 'axios'

const setAuthorizationToken=(token)=>{
	if (token) {
		axios.defaults.headers.common['Authorization']=`Wen ${token}`//Wen就是设置的请求头
	} else{
		delete axios.defaults.headers.common['Authorization']
	}
}

export default setAuthorizationToken