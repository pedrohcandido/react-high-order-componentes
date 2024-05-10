import React from "react";
import './FormAnswer.css';

const FormAnswer = (props) => {
	return(
		<div className="app2">
			<table>
				<tr>
					<td>Nome: <p id="name"> {props._name} </p> </td>
				</tr>
				<tr></tr><tr></tr>
				<tr>
					<td>Idade: <p id="age"> {props._age} </p> </td>
				</tr>
				<tr></tr><tr></tr>
				<tr>
					<td>Sexo: <p id="gender"> {props._gender} </p> </td>
				</tr>
				<tr></tr><tr></tr>
				<tr>
					<td>Estado Civil: <p id="civilStatus"> {props._civilStatus} </p> </td>
				</tr>
				<tr></tr><tr></tr>
				<tr>
					<td>Tipo de Documento: <p id="documentType"> {props._docType} </p> </td>
				</tr>
				<tr></tr><tr></tr>
				<tr>
					<td>CPF/CNPJ: <p id="document"> {props._document}</p> </td>
				</tr>
			</table>
		</div>
	)
}

export default FormAnswer;