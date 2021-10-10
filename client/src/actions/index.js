export const incNumber=(num)=>{
	return{
		type:'INCREMENT',
		payload:num

	}
}

export const decNumber=(num)=>{
	return{
		type:'DECREMENT',
		payload:num
	}
}

export const addTodo=(data)=>{
	return{
		type:'ADD_TODO',
		payload:{
			id:new Date().getTime().toString(),
			data:data
		}
	}
}

export const deletetodo=(id)=>{
	return{
		type:'DELETE_TODO',
		id:id
	}
}
export const removeTodo=()=>{
	return{
		type:'REMOVE_TODO'
	}
}

export const calculator=(expson)=>{
	return{
		type:'CALCULATOR',
		expression:expson
	}
}

