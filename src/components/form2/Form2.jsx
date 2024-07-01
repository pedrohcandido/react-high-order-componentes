import React from "react";
import './Form2.css'
import Input from "../input";

class Form2 extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			descBank: "",
			codBank: "",
			agency: "",

			isError: false,
			isValid: false,

			isSend: false,
		}
	
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

		document.getElementById("myForm").reset()
	}

	render() {
		return (
			<>
			<div className="app2">
			<h3>Cadastro de Bancos</h3>
				<form id="myForm" onSubmit={this.handleSubmit.bind(this)}>
					<Input label={"Descrição Banco"}
									type={"text"}
									id={"descBank"}
									value={this.state.descBank}
									onChange={(event) => this.setState({ descBank: event.target.value })}
					/>

					<Input label={"Código Banco"}
									type={"text"}
									id={"codBank"}
									value={this.state.codBank}
									onChange={(event) => this.setState({ codBank: event.target.value })}
					/>
					
					<Input label={"Código Agência"}
									type={"text"}
									id={"agency"}
									value={this.state.agency}
									onChange={(event) => this.setState({ agency: event.target.value })}
					/>

					{this.state.isSend && <p>Formulário Enviado com Sucesso!</p>}

					<button type="submit"> Enviar Formulário </button>
				</form>

			</div>
			</>
		)
	}

}

export default Form2;