/*高阶组件实现页面访问许可*/
import React from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {addFlashMessage} from "../store/actions/flashMessages"

export default function(ComposedComponent){
	class Authenticate extends React.Component{
		componentWillMount(){
			if (!this.props.isAuthenticated) {
				this.props.addFlashMessage({
					type:"danger",
					text:"请先登录，再访问"
				})
				this.props.history.push("/login")
			}
		}
		
		componentWillUpdate(nextProps){
			if (!nextProps.isAuthenticated) {
				this.props.history.push("/login")
			}
		}
		
		render(){
			return (
				<ComposedComponent {...this.props}></ComposedComponent>
			)
		}
	}
	
	const mapStateToProps=(state)=>{
		return {
			isAuthenticated:state.auth.isAuthenticated
		}
	}
	
	return withRouter(connect(mapStateToProps,{addFlashMessage})(Authenticate))
}
