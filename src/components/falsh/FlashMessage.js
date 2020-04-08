import React from 'react'
import classnames from "classnames"
/**
 * 成功
 * 失败
 */
class FlashMessage extends React.Component{
	render(){
		const {type,text}=this.props.message
		return (
			<div className={ classnames('alert',{
                'alert-success' : type ==='success',
                'alert-danger' :type === 'danger'
            })}>
				<button onClick={ this.onClick.bind(this) } className="close">&times;</button>
                { text }
            </div>
		)
	}
	onClick(){
		this.props.deleteFlashMessage(this.props.message.id)
	}
}

export default FlashMessage