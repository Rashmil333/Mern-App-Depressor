const initialdata=0;
const Addcart=(state=initialdata,action)=>{
	switch(action.type){
		case "ADDCART":return state+1 ;

		
		case"REMOVECART":return state-1
			

		default: return state
			}

}

export default Addcart;