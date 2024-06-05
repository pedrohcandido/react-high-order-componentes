import React from "react";
import './FormAnswer.css';

class FormAnswer extends React.Component {
	render() {
		return(
				<h3>{this.props.name}</h3>
		)
	}	
}

export default FormAnswer;