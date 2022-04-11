const initialdata = "";
const calculator = (state = initialdata, action) => {
	switch (action.type) {
		case "CALCULATOR": return eval(action.expression)
		default: return state
	}

}

export default calculator;