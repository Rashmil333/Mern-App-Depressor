require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const cors = require("cors");
const http = require('http').createServer(app);
const socket = require("socket.io");
const bcrypt = require("bcryptjs");
require("./db/conn");
const Register = require("./models/register");
const AllStories = require("./models/stories");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth")
const port = process.env.PORT || 3002;
// TrainChatData();
var jssvm = require('js-svm');
// var iris = require('js-datasets-iris');
var Dataset = require('./Datasets/dataset');

var svm = new jssvm.BinarySvmClassifier({
  alpha: 0.01, // learning rate
  iterations: 1000, // maximum iterations
  C: 5.0, // panelty term
  trace: false // debug tracing
});

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')
app.use(express.static(staticPath))
app.use(express.static(partialsPath));
app.set("view engine", 'hbs');
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

console.log(process.env.SECRET_KEY);
// SVM initialization
var iris = require('js-datasets-iris');
iris.shuffle();
var trainingDataSize = Math.round(iris.rowCount * 0.9);
var trainingData = [];
var testingData = [];
for (var i = 0; i < iris.rowCount; ++i) {
  var row = [];
  row.push(iris.data[i][0]); // sepalLength;
  row.push(iris.data[i][1]); // sepalWidth;
  row.push(iris.data[i][2]); // petalLength;
  row.push(iris.data[i][3]); // petalWidth;
  row.push(iris.data[i][4] == "Iris-virginica" ? 1.0 : 0.0); // output which is 1 if species is Iris-virginica; 0 otherwise
  if (i < trainingDataSize) {
    trainingData.push(row);
  } else {
    testingData.push(row);
  }
}

// testingData.push([ 4.09, 3.45, 2.34, 2.05,1 ])
var result = svm.fit(trainingData);
// //////////////////////////////////////



var result = svm.fit(trainingData);



app.get("/index", (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  res.status(200).send('testing');
})

app.get("/logout", auth, async (req, res) => {
  try {
    res.clearCookie("jwt");
    console.log("logout sucessfully");
    res.status(200);
    res.render("index");

  } catch (err) {
    res.status(500).send(error);
  }
})
app.get("/secret", auth, (req, res) => {
  console.log("the cookie jwt is" + req.cookies.jwt);
  res.render("secret");
})
app.get("/auth", auth, (req, res) => {
  console.log("the cookie jwt is" + req.cookies.jwt);
  res.status(200).send('testing');
});

app.get("/sltest", (req, res) => {
  res.status(200);
  res.send();
});


app.post("/svm", auth, (req, res) => {
  const newarray = req.body.newarray;
  console.log(newarray)
  // console.log("hello i am working");
  var result = svm.fit(trainingData);

  var resulta = []
  testingData.push(newarray)
  for (var i = 0; i < testingData.length; ++i) {
    var predicted = svm.transform(testingData[i]);
    console.log(`$$ ${testingData[i]}`);
    console.log("actual: " + testingData[i][4] + " predicted: " + predicted);
    resulta.push(predicted);


  }

  res.status(200).send(String(resulta[resulta.length - 1]));;
})
app.post("/updatechats", auth, async (req, res) => {
  try {
    const chat = req.body.chat;
    const member = req.body.member;
    console.log("the member is" + member);
    if (member) {
      const sender_data = await Register.findOne({ email: req.rootUser.email });
      console.log("The reciever data is" + sender_data);
      reciever_chat = sender_data.firstname + ":" + chat;
      const reciever = await Register.findOneAndUpdate({ email: member }, {
        $push: {
          mychats: {
            type: "received",
            message: reciever_chat

          }
        }
      });
      console.log(reciever);
    }

    const email = req.rootUser.email;
    const result = await Register.findOne({ email: email });
    console.log("the update chat result is " + result);
    const newresult = await Register.findOneAndUpdate({ email: email }, {
      $push: {
        mychats: {
          type: "send",
          message: chat
        }
      }
    });
    const newresults = await Register.findOneAndUpdate({ email: email }, { $inc: { total_messages: 1 } });
    res.status(200);



  }
  catch (err) {
    console.log(err);
  }

});

app.post("/sahyog_memory", async (req, res) => {
  try {
    const key = req.body.key;
    const value = req.body.value
    const result = await Register.findOneAndUpdate({ email: 'allusers@gmail.com' }, {
      $push: {
        memory: {
          key: key,
          value: value
        }


      }
    });
    res.status(200).send('yes i send it to the database.')
  }

  catch (err) {
    console.log(err);
  }
})

app.post("/deletemy_members", auth, async (req, res) => {
  try {

    const member_email = req.body.member_email;
    const email = req.rootUser.email;
    const me = await Register.findOneAndUpdate({ email: email }, {
      $pull: {
        myreliever: { email: member_email }
      }
    })
    res.status(200).send('testing');


  }

  catch (err) {
    console.log(err)
  }
})

app.post("/test", auth, async (req, res) => {
  try {
    const formData = req.body.formData;
    console.log("The form data is", formData);

  }
  catch {

  }
})
// app.post("/findstorygetdata", async (req, res) => {
//   try {
//     const ID = req.body.ID;
//     console.log('>>>>>>>>>>>>' + ID)
//     const findedStory = await AllStories.findOne({ story_id: ID });
//     console.log(findedStory);
//   }
//   catch (err) {
//     console.log(err);
//   }
// })

app.post("/findstorygetdata", async (req, res) => {
  const ID = req.body.ID;
  console.log('>>>>', ID)
  const result = await AllStories.findOne({ story_id: ID });
  console.log(result)
  res.status(200).send(result);

});

app.post("/postCommentStory", async (req, res) => {
  try {
    const db_email = 'allusers@gmail.com';
    const Comment = req.body.Comment;
    const ID = req.body.ID;
    const Commentor = req.body.Commentor
    const CommentorImage = req.body.Commentor_img;
    const d = new Date();
    const storiesResult = await AllStories.findOneAndUpdate({ story_id: ID }, {
      $push: {
        Comments: {
          Date: `${d.getDate()} /${d.getMonth()} /${d.getFullYear()}`,
          comment: Comment,
          commentor: Commentor,
          commentor_img: CommentorImage
        }
      }
    });

    // console.log(StoriesResult);
    // console.log(result);
  }
  catch (err) {
    console.log(err);
  }
});

app.post("/profile", auth, async (req, res) => {
  try {

    const email_sender = req.rootUser.email;
    const type = req.body.type;
    const name_d = req.body.name_d;
    const mobile_no = req.body.mobile_no;
    const email_id = req.body.email_id;
    const img = req.body.img;
    const age = req.body.age;
    const category = req.body.category;
    const hobbies = req.body.hobbies;
    const work = req.body.work;
    const description = req.body.description;
    if (img == "" || age == "" || description == "") {
      res.status(400);
    }


    else if (type == "first_send") {
      const newresult = await Register.findOneAndUpdate({ email: email_sender }, {
        $set: {
          profile: {
            name: name_d,
            mobile_no: mobile_no,
            email_id: email_sender,
            img: img,
            age: age,
            category: category,
            hobbies: hobbies,
            work: work,
            description: description



          }
        }
      });

      db_email = "allusers@gmail.com"

      const profile_status = await Register.findOneAndUpdate({ email: email_sender }, { $set: { profile_status: 1 } })
      if (category == "Depressor") {
        const newresult = await Register.findOneAndUpdate({ email: db_email }, {
          $push: {
            depressors: {
              name: name_d,
              mobile_no: mobile_no,
              email: email_sender,
              img: img,
              age: age,
              category: category,
              hobbies: hobbies,
              work: work,
              description: description



            }
          }
        });

      }
      else if (category == "Reliever") {
        const newresult = await Register.findOneAndUpdate({ email: db_email }, {
          $push: {
            relievers: {
              name: name_d,
              mobile_no: mobile_no,
              email: email_sender,
              img: img,
              age: age,
              category: category,
              hobbies: hobbies,
              work: work,
              description: description



            }
          }
        });

      }
      else if (category == "Both") {
        const newresult = await Register.findOneAndUpdate({ email: db_email }, {
          $push: {
            both: {
              name: name_d,
              mobile_no: mobile_no,
              email: email_sender,
              img: img,
              age: age,
              category: category,
              hobbies: hobbies,
              work: work,
              description: description



            }
          }
        });

      }

      res.status(200).send("Created")




    }
    else if (type == "update") {
      console.log("Updating....")
      const newresult = await Register.findOneAndUpdate({ email: email_sender }, {
        $set: {
          profile: {
            name: name_d,
            mobile_no: mobile_no,
            email_id: email_sender,
            img: img,
            age: age,
            category: category,
            hobbies: hobbies,
            work: work,
            description: description



          }
        }
      });


    }

    res.send(200);





  }
  catch (err) {
    console.log(err);
  }
})


app.post("/profile_update", auth, async (req, res) => {
  try {

    const email_sender = req.rootUser.email;
    const type = req.body.type;
    const name_d = req.body.name_d;
    const mobile_no = req.body.mobile_no;
    const email_id = req.body.email_id;
    const img = req.body.img;
    const age = req.body.age;
    const category = req.body.category;
    const hobbies = req.body.hobbies;
    const work = req.body.work;
    const description = req.body.description;
    const newresult = await Register.findOneAndUpdate({ email: email_sender }, {
      $set: {
        profile: {
          name: name_d,
          mobile_no: mobile_no,
          email_id: email_sender,
          img: img,
          age: age,
          category: category,
          hobbies: hobbies,
          work: work,
          description: description



        }
      }
    });




    res.status(200).send('testing');

  }

  catch (err) {
    console.log(err);
  }
})

app.post("/addstory", auth, async (req, res) => {
  try {
    const db_email = req.body.db_email;
    const email = req.body.email;
    const photoo = req.body.photoo;
    const img_depressor = req.body.img_depressor;
    const story = req.body.story;
    const temma = req.body.category;
    const storyID = new Date().getTime();

    const newresult = await Register.findOneAndUpdate({ email: db_email }, {
      $push: {
        stories: {
          story_id: storyID,
          img_depressor: img_depressor,
          img_reliever: photoo,
          email: email,
          story: story,
          category: temma,
          comments: {
            comment_img: '',
            comment_author: '',
            comment: ''
          }
        }
      }
    });
    const StoriesResult = new AllStories({
      story_id: storyID,
      Comments: []

    });
    const result = await StoriesResult.save();


  }
  catch (err) {
    console.log(err);
  }
});

app.post("/addstoryforapp", auth, async (req, res) => {
  try {
    const db_email = "allusers@gmail.com";
    const useremail = req.rootUser.email
    const photoo = req.body.photoo;
    const img_depressor = req.body.img_depressor;
    const story = req.body.story;
    const temma = req.body.category;

    const newresult = await Register.findOneAndUpdate({ email: db_email }, {
      $push: {
        stories: {
          img_depressor: img_depressor,
          img_reliever: photoo,
          email: useremail,
          story: story,
          category: temma



        }
      }
    });

    const addtomystory = await Register.findOneAndUpdate({ email: useremail }, {
      $push: {
        stories: {
          img_depressor: img_depressor,
          img_reliever: photoo,
          email: useremail,
          story: story,
          category: temma
        }
      }
    })


  }
  catch (err) {
    console.log(err);
  }
})




app.post("/updateproblem", auth, async (req, res) => {
  try {
    const email_sender = req.body.email_sender;
    const email = req.body.email;
    const name = req.body.name;
    const img = req.body.img;
    const phoneno = req.body.phoneno;
    const problem = req.body.problem;
    const address = req.body.address;
    const nearest_res = req.body.nearest_res;
    const bank_acc = req.body.bank_acc;
    if (email == "" || name == "" || img == "" || phoneno == "" || problem == "" || address == "" ||
      nearest_res == "" || bank_acc == "") {
      res.status(400);
    }
    else {
      const newresult = await Register.findOneAndUpdate({ email: email_sender }, {
        $push: {
          user_problems: {
            name: name,
            img: img,
            phone: phoneno,
            email: email,
            address: address,
            problem: problem,
            nearest_restaurent: nearest_res,
            bank_acc: bank_acc

          }
        }
      });
      res.end();
      res.status(200);

    }



  }
  catch (err) {
    console.log(err);
  }
})
app.post("/deletechats", auth, async (req, res) => {
  try {
    const chat = req.body.chat;
    const type = req.body.type;
    const email = req.rootUser.email;
    if (type == "receive") {
      const newresult = await Register.findOneAndUpdate({ email: email }, { $pull: { mychats: { type: "received", message: chat } } });
    }
    else {
      const result = await Register.findOne({ email: email });
      console.log("the update chat result is " + result);
      const newresult = await Register.findOneAndUpdate({ email: email }, { $pull: { mychats: { type: "send", message: chat } } });
    }


    res.status(200);



  }
  catch (err) {
    console.log(err);
  }

});

app.post("/deletechatsall", auth, async (req, res) => {
  try {
    const chat = req.body.chat;
    const email = req.rootUser.email;
    const result = await Register.findOne({ email: email });
    const newresult = await Register.findOneAndUpdate({ email: email }, { $set: { mychats: [] } });
    ;
    res.status(200);



  }
  catch (err) {
    console.log(err);
  }

});



app.post("/deletechatslast", auth, async (req, res) => {
  try {
    const chat = req.body.chat;
    const email = req.rootUser.email;
    const result = await Register.findOne({ email: email });
    const newresult = await Register.findOneAndUpdate({ email: email }, { $pop: { mychats: 1 } });
    ;
    res.status(200);



  }
  catch (err) {
    console.log(err);
  }

});

app.post("/addtocart", auth, async (req, res) => {
  try {
    const email = req.rootUser.email;
    const img_n = req.body.img;
    const product_name_n = req.body.product_name;
    const cost_n = req.body.cost;
    const result = await Register.findOneAndUpdate({ email: email }, {
      $push: {
        cart: {
          img: img_n,
          product_name: product_name_n,
          cost: cost_n
        }
      }
    });

    res.status(200).send('testing');

  }


  catch (err) {
    console.log(err);
  }
});

app.post("/deletetocart", auth, async (req, res) => {
  try {
    const email = req.rootUser.email;
    const img_n = req.body.img;
    const product_name_n = req.body.product_name;
    const cost_n = req.body.cost;
    const result = await Register.findOneAndUpdate({ email: email }, {
      $pull: {
        cart: {
          img: img_n,
          product_name: product_name_n,
          cost: cost_n
        }
      }
    });


    res.status(200).send('testing');

  }
  catch (err) {
    console.log(err);
    res.status(400).send('testing');

  }
});

app.post("/placeorder", auth, async (req, res) => {
  try {
    const sender_email = req.rootUser.email;
    const email = req.body.email;
    const name_n = req.body.name;
    const product_name_n = req.body.product_name;
    const quantity_ = req.body.quantity
    const cost_n = req.body.cost;
    const address_n = req.body.address;
    const phoneno = req.body.phoneno;
    const img_n = req.body.img;
    if (name_n == "" || product_name_n == "" || cost_n == "" || address_n == "" || phoneno == "") {
      res.status(400);
    }
    else {
      const result = await Register.findOneAndUpdate({ email: email }, {
        $push: {
          orders: {
            customer_name: name_n,
            product_name: product_name_n,
            cost: cost_n,
            delivery_add: address_n,
            Mobile_no: phoneno,
            img: img_n,
            quantity: quantity_
          }
        }
      });
      const result_sender = await Register.findOneAndUpdate({ email: sender_email }, {
        $push: {
          orders: {

            customer_name: name_n,
            product_name: product_name_n,
            cost: cost_n,
            delivery_add: address_n,
            Mobile_no: phoneno,
            img: img_n,
            quantity: quantity_

          }
        }
      });

      const result_sender_pull_cart = await Register.findOneAndUpdate({ email: sender_email }, {
        $pull: {
          cart: {


            product_name: product_name_n,
            cost: cost_n,

            img: img_n

          }
        }
      });
      res.status(200);

    }




  }
  catch (err) {
    console.log(err);
  }
});

app.post("/deleteorder", auth, async (req, res) => {
  try {
    const email = req.rootUser.email;
    const db_email = "allusers@gmail.com";
    const img_n = req.body.img;
    const product_name_n = req.body.product_name;
    const cost_n = req.body.cost;
    const phone = req.body.phone;
    const address_n = req.body.address;


    const result = await Register.findOneAndUpdate({ email: email }, {
      $pull: {
        orders: {
          img: img_n,
          product_name: product_name_n,
          cost: cost_n,


        }
      }
    });
    const result_n = await Register.findOneAndUpdate({ email: db_email }, {
      $pull: {
        orders: {
          img: img_n,
          product_name: product_name_n,
          cost: cost_n,
          Mobile_no: phone,
          delivery_add: address_n


        }
      }
    });
  }
  catch (err) {
    console.log(err);
  }
});

app.post("/register", async (req, res) => {
  try {
    const pass = req.body.pass;
    const conpass = req.body.conpass;

    if (pass == conpass) {
      const secretpass = await bcrypt.hash(pass, 10);
      const registerEmployee = new Register({
        firstname: req.body.name,
        phone: req.body.phoneno,
        email: req.body.email,
        password: secretpass,
        cpassword: req.body.conpass,
        profile_status: 0,
        mydepressor_status: 0,
        myreliever_status: 0,
        login_status: 0,
        nav_cursor: ""

      });
      const token = await registerEmployee.generateAuthToken();
      // console.log("the success part" + token);
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 30000),
        httpOnly: true
      });
      // console.log("the cookie is " + cookie);
      const result = await registerEmployee.save();
      res.status(200).send('Registered Successfully!!!');

    }
    else {

      res.status(400).send("Passwords are not matched.");
    }


  }
  catch (err) {
    res.send(err)
  }
});

app.post("/login", async (req, res) => {
  try {
    const pass = req.body.pass;
    const email = req.body.email;
    const result = await Register.findOne({ email: email });
    if (result == null) {
      console.log('yes the email is null')
      res.status(201);
      res.end();
      res.json();

    }
    else {
      const check = await bcrypt.compare(pass, result.password);
      if (check == true) {
        const token = await result.generateAuthToken();
        res.cookie("jwt", token, {
          expires: new Date(Date.now() + 3000000000),
          httpOnly: true
        });
        res.send({
          token
        });
        res.status(200);
        const login_status = await Register.findOneAndUpdate({ email: email }, { $set: { login_status: 1 } });

      }
      else {
        res.status(400);
        res.send("sorry  email is invalid")
      }
    }
  }
  catch (err) {
    console.log(err)
  }
});

app.get("/getdata", auth, (req, res) => {
  res.send(req.rootUser);
})

app.post("/getalldata", auth, async (req, res) => {
  const email = req.body.email;
  const result = await Register.findOne({ email: email });
  res.send(result);

});

app.post("/updaterelievers", auth, async (req, res) => {
  const type = req.body.type;
  const reliever_email = req.body.email;
  const reliever_img = req.body.img;
  const reliever_name = req.body.name;
  const email = req.rootUser.email;
  const phone = req.body.phone;
  if (type == "Depressor") {
    const result = await Register.findOneAndUpdate({ email: email }, {
      $push: {
        mydepressor: {
          name: reliever_name,
          img: reliever_img,
          email: reliever_email,
          phone_no: phone
        }
      }
    });
    const mydepressor_status = await Register.findOneAndUpdate({ email: email }, { $set: { mydepressor_status: 1 } });

  }
  else {
    const result = await Register.findOneAndUpdate({ email: email }, {
      $push: {
        myreliever: {
          name: reliever_name,
          img: reliever_img,
          email: reliever_email,
          phone_no: phone
        }
      }

    }, { upsert: true });
    const myreliever_status = await Register.findOneAndUpdate({ email: email }, { $set: { myreliever_status: 1 } })



  }


});



app.post("/update_password", auth, async (req, res) => {
  try {
    const email = req.rootUser.email
    const pass = req.body.pass
    const repass = req.body.repass
    const secretpass = await bcrypt.hash(pass, 10);
    const result = await Register.findOneAndUpdate({ email: email }, {
      $set: {
        password: secretpass,
        cpassword: repass
      }
    });
    res.status(200).send("testing");
  }
  catch (err) {
    console.log(err)
  }
});




const securepassword = async (pass) => {
  const result = await bcrypt.hash(pass, 10);
  const check = await bcrypt.compare(pass, result);
};

securepassword("thapa@123");


const jwt = require("jsonwebtoken");

const createToken = async () => {
  const token = await jwt.sign({ _id: "60916071da02fe082c085b65" }, "mynameisrashmilrajpootyoutuber", {
    expiresIn: "2 hours"
  });
  console.log(`token:${token}`);
  const userver = await jwt.verify(token, "mynameisrashmilrajpootyoutuber");
}
createToken();


if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}


const server = http.listen(port, () => {
  console.log("listening at the port no 8000")
});


io = socket(server);

io.on("connection", (socket) => {
  console.log("The socket id is:" + socket.id);

  socket.on("join_room", (data) => {

    socket.join(data);
    console.log("User Joined Room: " + data);
  });

  socket.on("send_message", (data) => {
    console.log(data);
    console.log("the data is saved to database!!!")
    socket.to(data.room).emit("receive_message", data.content);
  });



  socket.on("disconnect", () => {
    console.log("USER DISCONNECTED");
  });
});
