// CRUD in mongoose

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mongoosedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



const schema = mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  status: {
    type: String
  }
});

const User=mongoose.model("user",schema);
// create

const me = new User({
  name: "shivam",
  age: 20,
  status: "single"
});

me.save()
  .then(user => console.log(user))
  .catch(e => {
    console.log(e);
  });

//read
User.find({}).then(user => {
  console.log(user);
});

//update

User.updateMany(
  { name: "shivam" },
  {
    $set: {
      name: "yoyo"
    }
  }
)
  .then(status => console.log(status))
  .catch(e => console.log(e));

//delete

// User.deleteOne({
//   status: "single"
// })
//   .then(user => console.log(user))
//   .catch(e => console.log(e));
