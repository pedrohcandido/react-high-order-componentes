import React from "react";
import { withLength } from "../withLength/withLength";

function inputLength({minLength, inputName }) {
	return(
		<>
		{
		inputName === "Idade" ? <p style={{fontSize: 12}}>Idade mínima é {minLength}  anos.</p> 
		: <p style={{fontSize: 12}}>tamanho mínimo do campo é: {minLength}</p>
		}
			
		</>
	)
}

export default withLength(inputLength);