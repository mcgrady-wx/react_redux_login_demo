import React from 'react';
import FlashMessagesList from './falsh/FlashMessagesList'

class IndexPage extends React.Component {
    render() {
        return (
        	<>
        		<FlashMessagesList />
            	<div className="jumbotron">
			        <h1>Hi React Redux Login</h1>
			    </div>
			</>
        )
    }
}

export default IndexPage;
