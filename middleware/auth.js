const jwt=require("jsonwebtoken");
const Register=require("../models/register");

const auth=async(req,res,next)=>{
	try{
		// const token=req.cookies.jwt;
		const token=req.headers['authorization'];
		console.log('1',token);
		if(token){
			token=token.split(' ')[1];
		}
		nsole.log('2',token);
		const verifyUser=jwt.verify(token,process.env.SECRET_KEY);
		console.log(verifyUser);
		const rootUser=await Register.findOne({_id:verifyUser._id,"tokens.token":token});
		console.log("The rootUser is "+rootUser);
		if(!rootUser){
			throw new Error("User not found");
		}
		else{
			nsole.log('1',"hhh->>>>>>");
				req.token=token;
				req.rootUser=rootUser;
				req.userID=rootUser._id;
		}
	
		
		next();

	}
	catch(error){
		res.status(401).send(error);
	}

};

module.exports=auth;