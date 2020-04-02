import React from 'react'

class SignupForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			email:'',
			password:'',
            passwordConfirmation:''
		}
	}
	render(){
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
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={ this.state.email }
                        onChange={ this.onChange.bind(this) }
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={ this.state.password }
                        onChange={ this.onChange.bind(this) }
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">PasswordConfirmation</label>
                    <input 
                        type="password"
                        name="passwordConfirmation"
                        value={ this.state.passwordConfirmation }
                        onChange={ this.onChange.bind(this) }
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">注册</button>
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
		console.log(this.state)
	}
}

export default SignupForm