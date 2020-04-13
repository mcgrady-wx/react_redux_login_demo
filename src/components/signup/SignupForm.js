import React from 'react'
import classnames from "classnames"
import {withRouter} from "react-router-dom"

class SignupForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			email:'',
			password:'',
            passwordConfirmation:'',
            errors:{},
            isLoading:false,
            invalid:false
		}
	}
	render(){
		const { errors,isLoading,invalid } = this.state
		return (
			<form onSubmit={ this.onSubmit.bind(this) }>
				<h1>Join our community</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input 
                        type="text"
                        name="username"
                        value={ this.state.username }
                        onChange={ this.onChange.bind(this) }
                        onBlur={ this.onBlur.bind(this) }
                        className={ classnames('form-control',{'is-invalid':errors.username}) }
                    />
                    {errors.username&&<span className="form-text text-muted">{ errors.username }</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={ this.state.email }
                        onChange={ this.onChange.bind(this) }
                        className={ classnames('form-control',{'is-invalid':errors.email})}
                    />
                    {errors.email&&<span className="form-text text-muted">{ errors.email }</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={ this.state.password }
                        onChange={ this.onChange.bind(this) }
                        className={ classnames('form-control',{'is-invalid':errors.password})}
                    />
                    {errors.password&&<span className="form-text text-muted">{ errors.password }</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">PasswordConfirmation</label>
                    <input 
                        type="password"
                        name="passwordConfirmation"
                        value={ this.state.passwordConfirmation }
                        onChange={ this.onChange.bind(this) }
                        className={ classnames('form-control',{'is-invalid':errors.passwordConfirmation})}
                    />
                    {errors.passwordConfirmation&&<span className="form-text text-muted">{ errors.passwordConfirmation }</span>}
                </div>
                <div className="form-group">
                    <button disabled={  isLoading || invalid} className="btn btn-primary btn-lg">注册</button>
                </div>
			</form>
		)
	}
	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	onSubmit(e){
		e.preventDefault()
		//console.log(this.state)
		// 节流和防抖   回流和重绘
		this.setState({ errors:{},isLoading:true })
		this.props.signupActions.userSignupRequest(this.state).then(
			 () => {
			 	// 添加数据到redux
			 	this.props.flashActions.addFlashMessage({
			 		 type:"success",
                    text:"注册成功，欢迎你的加入!"
			 	})
			 	this.props.history.push("/")
			 },
            ({ response }) => { this.setState({ errors:response.data,isLoading:false }) }
		)
		//console.log(this.state.errors)
	}
	onBlur(e){
		let name=e.target.name;
		let val=e.target.value;
		let invalid
		if (val !=="") {
			this.props.signupActions.isUserExists(val).then(
				(res)=>{
					//console.log(res)
					let errors=this.state.errors;
					if (res.data[0]) {
						errors[name]="用户名存在" ;
						invalid=true
					} else {
						errors[name]="";
						invalid=false
					}
					this.setState({
						errors,invalid
					})
					//console.log(this.state.errors)
				}
			)
		}
	}
}

export default withRouter(SignupForm)
