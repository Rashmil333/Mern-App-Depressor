import React from "react";

const Dtest=()=>{
	(function iife(){
		console.log("hello guys i am iife and i called automtically just after defined.")
	})();

	setTimeout(()=>{
		console.log("the setTimeout is working")
	},2000);

	const person={
		name:'ram'
	};
	// Object.freeze(person);
	person.name="temma";
	console.log(person.name);
	function* numbergenerator(){
		let i=0;
		while(i!=9){
			i++;
			yield i;
		}

	};
	const gen=numbergenerator();
	console.log(gen.next());
	console.log(gen.next());
	console.log(gen.next());
	console.log(gen.next());
	console.log(gen.next());
	console.log(gen.next());
	console.log(gen.next());
	console.log(gen.next());
	console.log(gen.next());
	console.log(gen.next());
	console.log(gen.next());
	console.log(gen.next());
	const testa=()=>{
		var array=[1,2,3,4,4]
		var set=new Set(array);
		console.log(set)
		var new_array=Array.from(set)
		console.log(new_array)

	}
	return(<>
		<h1>hello from the Dtest side.</h1>
		<button onClick={testa}>test</button>

	</>)
}

export default Dtest;