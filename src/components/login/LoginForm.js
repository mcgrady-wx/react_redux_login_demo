import React from "react"
import classnames from "classnames"
import validateInput from "../../utils/validations/login"
import { login,isUsers } from "../../store/actions/login"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"


class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
            errors:{},
            isLoading:false,
            invalid:false
		}
	}
    render(){
    	let {errors, username, password,isLoading,invalid} =this.state
        return(
            <form onSubmit={ this.onSubmit.bind(this) }>
				<h1>Login</h1>
				{errors.form&&<div className="alert alert-danger">{ errors.form }</div>}
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input 
                        type="text"
                        name="username"
                        value={ this.state.username }
                        onChange={ this.onChange.bind(this) }
                        onBlur={this.onBlur.bind(this)}
                        className={ classnames('form-control',{'is-invalid':errors.username}) }
                    />
                    {errors.username && <span className='form-text text-muted'>{errors.username}</span>}
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
                    {errors.password && <span className='form-text text-muted'>{errors.password}</span>}
                </div>                
                <div className="form-group">
                    <button disabled={ isLoading || invalid } className="btn btn-primary btn-lg">注册</button>
                </div>
			</form>
        )
    }
    /*输入框空白验证*/
    isValid(e){
    	const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors })
        }
        return isValid;
    }
    onChange(e){
    	this.setState({
    		[e.target.name]:e.target.value
    	})
    }
    onSubmit(e){
    	e.preventDefault()
    	if (this.isValid()) {
    		this.setState({
	    		errors:{},
	    		isLoading:true
	    	})
	    	this.props.login(this.state).then(
	    		(res)=>{this.props.history.push("/")},
	    		(err)=>{
	    			//console.log(err.response.data.errors)
	    			this.setState({
	    				errors:err.response.data.errors,
	    				isLoading:false
	    			})
	    		}
	    	
	    	)
    	}
    }
    onBlur(e){
    	let name=e.target.name
    	let val=e.target.value
    	let invalid
    	if (val !=="") {
    		this.props.isUsers(val).then(
	    		res=>{
	    			let errors=this.state.errors
	    			if (!res.data[0]) {
	    				errors[name]="用户名不存在，请先注册"
	    				invalid=true
	    			} else{
	    				errors[name]=""
	    				invalid=false
	    			}
	    			this.setState({errors,invalid})
	    		}
	    	)
    	}
    }
}

export default withRouter(connect(null,{ login,isUsers })(LoginForm))
