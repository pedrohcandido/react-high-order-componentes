import React from "react";
import './Input.css'
import InputLength from "../inputLength";

const Input = (props) => {
	return(
		<>
			{
				props.type !== "radio" ?
				(
				<>
				<label>{props.label}</label>
						<input type={props.type}
									id={props.id}
									value={props.value}
									onChange={props.onChange}
									min={props.label === "Idade" ? 18 : 0}
									minLength={props.label === "Nome" ? 10 
													 : props.label === "Descrição Banco" ? 10
													 : props.label === "Código Banco" ? 3
													 : props.label === "Código Agência" ? 6 : 0
													}
									required
									>
						</input>
						<InputLength
												inputName={props.label}
												value={props.value}
						/> 
						
				</>
				) :
				(
				<>
					<input type={props.type}
								 id={props.id}
								 value={props.value}
								 onChange={props.onChange}
								 name={props.name}
								//  required
								 >
					</input>
					<label for={props.for}>{props.label}</label>
				</>
				)
			}
		</>
	)
}

export default Input;