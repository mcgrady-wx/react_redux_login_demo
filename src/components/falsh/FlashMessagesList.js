import React from 'react'
import {connect} from 'react-redux'
import FlashMessage from './FlashMessage'
import { deleteFlashMessage } from '../../store/actions/flashMessages'

class FlashMessagesList extends React.Component{
	// messages是一个数组!!!
	render(){
		const messages=this.props.messages.map((message)=>{
			return  <FlashMessage key={ message.id } message={ message } deleteFlashMessage={this.props.deleteFlashMessage}/>
		})
		return (
			<div className="container">
                { messages }
            </div>
		)
	}
}

const mapStateToProps=(state)=>{
	return {
		messages:state.flashMessages
	}
}

export default connect(mapStateToProps,{ deleteFlashMessage })(FlashMessagesList)
