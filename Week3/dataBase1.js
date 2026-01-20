const express = require("express")
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://DataBase1_Anurag:First1234@cluster0.gsrzw.mongodb.net/user_app?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));


const User = mongoose.model('Users', { name: String, email: String, password: String });


app.post("/signup", async function(req, res) {
const username = req.body.username;
const password = req.body.password;
const name = req.body.name;
const existingUser = await User.findOne({ email: username });
// CRUD => create, update, delete, Read
if (existingUser) {
return res.status(400).send("Username already exists");
}
const user = new User({
name: name,
email: username,
password: password
});


user.save();
res.json({
"msg": "User created successfully"
})
})


// const user = new User({
//     name : 'Anurag Yadav',
//     email : 'anurag@gmail.com',
//     password : '123456'
// });

// user.save();