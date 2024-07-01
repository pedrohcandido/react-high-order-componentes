export function withLength(Component) {
	return ({value, inputName, ...otherProps }) => {
		let minLength = 0
		if( inputName === "Nome"){
				minLength = 10
		}
		if( inputName === "Idade"){
			minLength = 18
	}
		if( inputName === "Descrição Banco"){
				minLength = 10
		}
		if( inputName === "Código Banco"){
				minLength = 3
		}
		if( inputName === "Código Agência"){
				minLength = 6
		}
		
 		
		return (
			<Component
				{...otherProps}
				inputName={inputName}
				minLength={minLength}
			/>
		)
	}
}