require('dotenv').config();
const express= require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const bcrypt=require("bcryptjs");
require("./db/conn");
const Register=require("./models/register");
const cookieParser=require("cookie-parser");
const auth=require("./middleware/auth")
const port=process.env.PORT || 8000;


const staticPath=path.join(__dirname,'../public');
const templatePath=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/partials')
app.use(express.static(staticPath))
app.use(express.static(partialsPath));
app.set("view engine",'hbs');
app.set("views",templatePath);
hbs.registerPartials(partialsPath);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

console.log(process.env.SECRET_KEY);



app.get("/logout",auth,async(req,res)=>{
	try{
		res.clearCookie("jwt");
		console.log("logout sucessfully");
		res.render("index");

	}catch(err){
		res.status(500).send(error);
	}
})
app.get("/secret",auth,(req,res)=>{
		console.log("the cookie jwt is"+req.cookies.jwt);
	res.render("secret");
})
app.get("/chat",auth,(req,res)=>{
		console.log("the cookie jwt is"+req.cookies.jwt);
		res.status(200);
	res.render("secret");
});

app.get("/sltest",(req,res)=>{
	res.status(200);
	res.send();
});
app.post("/updatechats",auth,async (req,res)=>{
	try{
		const chat=req.body.chat;
		const member=req.body.member;
		console.log("the member is"+member);
		if(member){
			const sender_data=await Register.findOne({email:req.rootUser.email});
			console.log("The reciever data is"+sender_data);
			reciever_chat=sender_data.firstname+":"+chat;
		 const reciever=await Register.findOneAndUpdate( { email: member },{ $push: { mychats:{
		 	type:"received",
		 	message:reciever_chat

		 }  } });
		 console.log(reciever);
		}

		const email=req.rootUser.email;
		const result=await Register.findOne({email:email});
		console.log("the update chat result is "+result);
		const newresult=await Register.findOneAndUpdate( { email: email },{ $push: { mychats: {
			type:"send",
			message:chat
		} } });
		const newresults=await Register.findOneAndUpdate( { email: email },{$inc:{total_messages:1}});
		res.status(200);



	}
	catch(err){
		console.log(err);
	}

});

app.post("/profile",auth,async(req,res)=>{
	try{

			const email_sender=req.rootUser.email;	
			const type=req.body.type;
			const name_d=req.body.name_d;
			const mobile_no=req.body.mobile_no;
			const email_id=req.body.email_id;
			const img=req.body.img;
			const age=req.body.age;
			const category=req.body.category;
			const hobbies=req.body.hobbies;
			const work=req.body.work;
			const description=req.body.description;
			if(img=="" || age=="" || description==""){
				res.status(400);
			}


			else if(type=="first_send"){
			const newresult=await Register.findOneAndUpdate( { email: email_sender },{ $push: { profile: {
			 name:name_d,
			 mobile_no:mobile_no,
			 email_id:email_sender,
			 img:img,
			 age:age,
			 category:category,
			 hobbies:hobbies,
			 work:work,
			 description:description



		} } });

			db_email="allusers@gmail.com"

			const profile_status=await Register.findOneAndUpdate({email:email_sender},{$set:{profile_status:1}})
			if(category=="Depressor"){
				const newresult=await Register.findOneAndUpdate( { email: db_email },{ $push: { depressors: {
			 	name:name_d,
			 	mobile_no:mobile_no,
			 	email:email_sender,
			 	img:img,
			 	age:age,
			 	category:category,
			 	hobbies:hobbies,
			 	work:work,
			 	description:description



					} } });

									}
			else if(category=="Reliever"){
				const newresult=await Register.findOneAndUpdate( { email: db_email },{ $push: { relievers: {
			 	name:name_d,
			 	mobile_no:mobile_no,
			 	email:email_sender,
			 	img:img,
			 	age:age,
			 	category:category,
			 	hobbies:hobbies,
			 	work:work,
			 	description:description



					} } });

									}
			
			


			}
			else if(type=="update"){
			const newresult=await Register.findOneAndUpdate( { email: email_sender },{ $set: { profile: {
			 name:name_d,
			 mobile_no:mobile_no,
			 email_id:email_sender,
			 img:img,
			 age:age,
			 category:category,
			 hobbies:hobbies,
			 work:work,
			 description:description



		} } });
			


			}
		




	}
	catch(err){
		console.log(err);
	}
})

app.post("/addstory",auth,async(req,res)=>{
	try{
		const db_email=req.body.db_email;
		const email=req.body.email;
		const photoo=req.body.photoo;
		const img_depressor=req.body.img_depressor;
		const story=req.body.story;
		const temma=req.body.category;

		const newresult=await Register.findOneAndUpdate( { email: db_email },{ $push: { stories: {
			img_depressor:img_depressor,
			img_reliever:photoo,
			email:email,
			story:story,
			category:temma



		} } });
		

	}
	catch(err){
		console.log(err);
	}
})

app.post("/updateproblem",auth,async(req,res)=>{
	try{ 
		const email_sender=req.body.email_sender;
		const email=req.body.email;
		const name=req.body.name;
		const img=req.body.img;
		const phoneno=req.body.phoneno;
		const problem=req.body.problem;
		const address=req.body.address;
		const nearest_res=req.body.nearest_res;
		const bank_acc=req.body.bank_acc;
		if(email=="" || name=="" || img=="" || phoneno=="" || problem=="" || address=="" ||
		nearest_res=="" || bank_acc==""){
			res.status(400);
		}
		else{
				const newresult=await Register.findOneAndUpdate( { email: email_sender },{ $push: { user_problems: {
			name:name,
			img:img,
			phone:phoneno,
			email:email,
			address:address,
			problem:problem,
			nearest_restaurent:nearest_res,
			bank_acc:bank_acc

		} } });

		}

		

	}
	catch(err){
		console.log(err);
	}
})
app.post("/deletechats",auth,async (req,res)=>{
	try{
		const chat=req.body.chat;
		const type=req.body.type;
		const email=req.rootUser.email;
		if(type=="receive"){
			const newresult=await Register.findOneAndUpdate( { email: email },  { $pull: { mychats:{type:"received",message:chat}  } } );
		}
		else{
			console.log("the deletechats is"+chat);
		
		const result=await Register.findOne({email:email});
		console.log("the update chat result is "+result);
		const newresult=await Register.findOneAndUpdate( { email: email },  { $pull: { mychats:  {type:"send",message:chat}  } } );
		}

		
		res.status(200);



	}
	catch(err){
		console.log(err);
	}

});

app.post("/deletechatsall",auth,async (req,res)=>{
	try{
		const chat=req.body.chat;
		console.log("the deletechatall is");
		const email=req.rootUser.email;
		const result=await Register.findOne({email:email});
		console.log("the update chat result is "+result);
		const newresult=await Register.findOneAndUpdate( { email: email }, { $set: { mychats: [ ] } } );
;
		res.status(200);



	}
	catch(err){
		console.log(err);
	}

});

app.post("/deletechatslast",auth,async (req,res)=>{
	try{
		const chat=req.body.chat;
		console.log("the deletechatall is");
		const email=req.rootUser.email;
		const result=await Register.findOne({email:email});
		console.log("the update chat result is "+result);
		const newresult=await Register.findOneAndUpdate( { email: email }, { $pop: { mychats: 1 } } );
;
		res.status(200);



	}
	catch(err){
		console.log(err);
	}

});

app.post("/addtocart",auth,async(req,res)=>{
	try{
		const email=req.rootUser.email;
		const img_n=req.body.img;
		const product_name_n=req.body.product_name;
		console.log("the cart product name is "+product_name_n);
		const cost_n=req.body.cost;
		const result=await Register.findOneAndUpdate( { email: email },  { $push: { 
             cart: {
               img : img_n,
               product_name : product_name_n,
               cost:cost_n
               }  
           } 
   			});



	}
	catch(err){
		console.log(err);
	}
});

app.post("/deletetocart",auth,async(req,res)=>{
	try{
		const email=req.rootUser.email;
		const img_n=req.body.img;
		const product_name_n=req.body.product_name;
		console.log("the cart product name is "+product_name_n);
		const cost_n=req.body.cost;
		const result=await Register.findOneAndUpdate( { email: email },  { $pull: { 
             cart: {
               img : img_n,
               product_name : product_name_n,
               cost:cost_n
               }  
           } 
   			});



	}
	catch(err){
		console.log(err);
	}
});

app.post("/placeorder",auth,async(req,res)=>{
	try{
		const sender_email=req.rootUser.email;
		const email=req.body.email;
		const name_n=req.body.name;
		const product_name_n=req.body.product_name;
		console.log("the placeoreder is "+product_name_n);
		const cost_n=req.body.cost;
		const address_n= req.body.address;
		const phoneno=req.body.phoneno;
		const img_n=req.body.img;
		if(name_n=="" || product_name_n=="" || cost_n=="" || address_n=="" || phoneno==""){
			res.status(400);
		}
		else{
				const result=await Register.findOneAndUpdate( { email: email },  { $push: { 
             orders: {
               customer_name : name_n,
               product_name : product_name_n,
               cost:cost_n,
               delivery_add:address_n,
               Mobile_no:phoneno,
               img:img_n
               }  
           } 
   			});
			const result_sender=await Register.findOneAndUpdate( { email: sender_email },  { $push: { 
             orders: {
              
               customer_name : name_n,
               product_name : product_name_n,
               cost:cost_n,
               delivery_add:address_n,
               Mobile_no:phoneno,
               img:img_n
              
               }  
           } 
   			});

   			const result_sender_pull_cart=await Register.findOneAndUpdate( { email: sender_email },  { $pull: { 
             cart: {
              
              
               product_name : product_name_n,
               cost:cost_n,
               
               img:img_n
              
               }  
           } 
   			});
				res.status(200);

		}
		



	}
	catch(err){
		console.log(err);
	}
});

app.post("/deleteorder",auth,async(req,res)=>{
	try{
		const email=req.rootUser.email;
		const db_email="allusers@gmail.com";
		const img_n=req.body.img;
		const product_name_n=req.body.product_name;
		const cost_n=req.body.cost;
		const phone=req.body.phone;
		const address_n=req.body.address;
	
		
				const result=await Register.findOneAndUpdate( { email: email },  { $pull: { 
             orders: {  
               img:img_n,          
          	   product_name : product_name_n,
               cost:cost_n,
           
            
               }  
           } 
   			});
			const result_n=await Register.findOneAndUpdate( { email: db_email },  { $pull: { 
             orders: {  
               img:img_n,          
          	   product_name : product_name_n,
               cost:cost_n,
               Mobile_no:phone,
               delivery_add:address_n
           
            
               }  
           } 
   			});
	}
	catch(err){
		console.log(err);
	}
});

app.post("/register",async(req,res)=>{
	try{
		const pass=req.body.pass;
		const conpass=req.body.conpass;

		if(pass==conpass){
			const secretpass=await bcrypt.hash(pass,10);
			const registerEmployee= new Register({
				firstname:req.body.name,
				phone:req.body.phoneno,
				email:req.body.email,
				password:secretpass,
				cpassword:req.body.conpass,
				profile_status:0,
				mydepressor_status:0,
				myreliever_status:0,
				login_status:0

			});
			 console.log("the success part"+registerEmployee);
			const token=await registerEmployee.generateAuthToken();
			console.log("the success part"+token);
			res.cookie("jwt",token,{
				expires:new Date(Date.now()+30000),
				httpOnly:true
			});
			console.log("the cookie is "+cookie);
			const result=await registerEmployee.save();
			res.render("login");

		}
		else{
			res.send("Passwords are not matched.")
		}
		

	}
	catch(err){
		res.send(err)
	}
});

app.post("/login",async(req,res)=>{
	try{
		const pass=req.body.pass;
		const email=req.body.email;
		const result=await Register.findOne({email:email});
		const check=await bcrypt.compare(pass,result.password);


		const token= await result.generateAuthToken();
		console.log("the token part of login is "+token);
		res.cookie("jwt",token,{
			expires:new Date(Date.now()+3000000000),
			httpOnly:true
		});
	
		if(check==true){
			res.render("index");
			res.status(200);
			const login_status=await Register.findOneAndUpdate({email:email},{$set:{login_status:1}});

		}
		else{
			res.status(400);
			res.send("sorry  email is invalid")
		}
		console.log(result.password);

	}
	catch(err){
		console.log(err)
	}
});

app.get("/getdata",auth,(req,res)=>{
	console.log("The rootUser in getdata is"+req.rootUser);
	res.send(req.rootUser);
})

app.post("/getalldata",auth,async (req,res)=>{
	const email=req.body.email;
	const result=await Register.findOne({email:email});

	console.log("The all data is"+result);
	res.send(result);

});

app.post("/updaterelievers",auth,async (req,res)=>{
	const type=req.body.type;
	const reliever_email=req.body.email;
	const reliever_img=req.body.img;
	const reliever_name=req.body.name;
	const email=req.rootUser.email;
	console.log("the type is "+type)
	if(type=="Depressor"){
		const result=await Register.findOneAndUpdate( { email: email },  { $push: { 
             mydepressor: {
               name : reliever_name,
               img : reliever_img,
               email:reliever_email
               }  
           } 
   			});
		const mydepressor_status=await Register.findOneAndUpdate({email:email},{$set:{mydepressor_status:1}});

			console.log("The updaterelievers data is"+result);
	

		}
	else{
						const result=await Register.findOneAndUpdate( { email: email },  { $push: { 
             myreliever: {
               name : reliever_name,
               img : reliever_img,
               email:reliever_email
               }  
           } 
   				});
		 const myreliever_status=await Register.findOneAndUpdate({email:email},{$set:{myreliever_status:1}})

			console.log("The updaterelievers data is"+result);
	

	}
	

});



const securepassword=async(pass)=>{
	const result=await bcrypt.hash(pass,10);
	const check=await bcrypt.compare(pass,result);
	console.log(check);
	console.log(result);
};

securepassword("thapa@123");


const jwt=require("jsonwebtoken");

const createToken=async()=>{
	const token=await jwt.sign({_id:"60916071da02fe082c085b65"},"mynameisrashmilrajpootyoutuber",{
		expiresIn:"2 hours"
	});
	console.log(`token:${token}`);
	const userver=await jwt.verify(token,"mynameisrashmilrajpootyoutuber");
	console.log(userver);
}
createToken();


if ( process.env.NODE_ENV == "production")
	{   app.use(express.static("client/build"));
	    const path = require("path");
	    app.get("*", (req, res) => { 
	  	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); 
	 })
	}


app.listen(port,()=>{
	console.log("listening at port no 8000...");
})