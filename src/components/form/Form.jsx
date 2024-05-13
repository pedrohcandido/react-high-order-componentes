import React from "react";
import './Form.css'
import FormAnswer from '../formAnswer'
import Input from "../input";
import { cpf, cnpj } from 'cpf-cnpj-validator'

class Form extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: "",
			age: null,
			gender: "",
			civilStatus: "",
			docType: "",
			document: "",

			_name: "",
			_age: null,
			_gender: "",
			_civilStatus: "",
			_docType: "",
			_document: "",

			isError: false,
			isValid: false,

			isSend: false
		}
		this._teste = React.createRef();
	}

	handleChange = (event) => {
		this.setState({
			isError: false,
			isSend: false,
			document: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ isSend: true })

		let cpfCnpj = this.state.document

		if( this.state.docType === "CPF" ){
			if( !cpf.isValid(cpfCnpj) ){
				this.setState({ isError: true})
				return
			}
		} else if (!cnpj.isValid(cpfCnpj)) {
				this.setState({ isError: true})
				return
		}
		
		this.setState({_name: this.state.name})
		this.setState({_age: this.state.age})
		this.setState({_gender: this.state.gender})
		this.setState({_civilStatus: this.state.civilStatus})
		this.setState({_docType: this.state.docType})
		this.setState({_document: this.state.document})

		this.setState({name: ""})
		this.setState({age: ""})
		this.setState({gender: ""})
		this.setState({civilStatus: ""})
		this.setState({docType: ""})
		//this.setState({document: ""})

		document.getElementById("myForm").reset()
	};

	render() {
		return (
			<>
			<div className="app">
				<form id="myForm" onSubmit={this.handleSubmit.bind(this)}>
					<Input label={"Nome"}
									type={"text"}
									id={"name"}
									value={this.state.name}
									onChange={(event) => this.setState({ name: event.target.value })}
					/>

					<Input label={"Idade"}
									type={"number"}
									id={"age"}
									value={this.state.age}
									onChange={(event) => this.setState({ age: event.target.value })}
					/>

					<p>Sexo:</p>
					<Input label={"Feminino"}
									type={"radio"}
									id={"radio1"}
									value={"Feminino"}
									name="gender"
									for="radio1"
									onChange={(event) => this.setState({ gender: "Feminino" })}
					/>

					<Input label={"Masculino"}
									type={"radio"}
									id={"radio2"}
									value={"Masculino"}
									name="gender"
									for="radio2"
									onChange={(event) => this.setState({ gender: "Masculino" })}
					/>

					<Input label={"Outros"}
									type={"radio"}
									id={"radio3"}
									value={"Outros"}
									name="gender"
									for="radio3"
									onChange={(event) => this.setState({ gender: "Outros" })}
					/>
					
					<br/><br/>

					<label for="civilStatus">Estado Civil</label>
						<select name="civilStatus" 
										id="civilStatus"
										onChange={(event) => this.setState({ civilStatus: event.target.value})}
										required>
							<option selected value="">Selecione uma opção</option>
							<option value="Solteiro">Solteiro</option>
							<option value="Casado">Casado</option>
							<option value="Divorciado">Divorciado</option>
							<option value="Divorciado">Viúvo</option>
					</select>
					<br/><br/>

					<p>Tipo de Documento:</p>
					<Input label={"CPF"}
									type={"radio"}
									id={"radioDoc1"}
									value={"cpf"}
									name="docType"
									for="radioDoc1"
									onChange={(event) => this.setState({ docType: "CPF" })}
					/>

					<Input label={"CNPJ"}
									type={"radio"}
									id={"radioDoc2"}
									value={"cnpj"}
									name="docType"
									for="radioDoc2"
									onChange={(event) => this.setState({ docType: "CNPJ" })}
					/>
					<br/><br/>

					<Input label={"CPF/CNPJ"}
									type={"text"}
									id={"document"}
									value={this.state.document}
									//onChange={(event) => this.setState({ document: event.target.value })}
									onChange={this.handleChange}
					/>
					{this.state.isSend && (
						<>
						{ this.state.isError && <p>O CPF/CNPJ Digitado é Inválido!</p> }
						{ !this.state.isError && this.state.document.length > 0 && <p>Formulário Enviado com Sucesso!</p>}
						</>
					)}

					<button type="submit"> Enviar Formulário </button>
				</form>

			</div>
			<FormAnswer 
									_name={this.state._name}
									_age={this.state._age}
									_gender={this.state._gender}
									_civilStatus={this.state._civilStatus}
									_docType={this.state._docType}
									_document={this.state._document}
									>
			</FormAnswer>
			</>
		)
	}

}

export default Form;