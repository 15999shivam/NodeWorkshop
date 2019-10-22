const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

url = "mongodb://127.0.0.1:27017";

mongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("error");
    }
    console.log("DB connected");
    const db = client.db("Acm-Task-Manager");

    // // inserting data(creating)
    // db.collection("user").insertMany(
    //   [
    //   {
    //     name: "Ishan",
    //     age: 18,
    //     status: "single"
    //   },
    //   {
    //     name: "Mohit",
    //     age: 19,
    //     status: "single"
    //   },
    //   {
    //     name: "Sujeet",
    //     age: 19,
    //     status: "single"
    //   },
    //   {
    //     name: "Aniket",
    //     age: 19,
    //     status: "single"
    //   },
    //   {
    //     name: "Shivam",
    //     age: 19,
    //     status: "single"
    //   },
    //   {
    //     name: "Bhavesh",
    //     age: 19,
    //     status: "single"
    //   },
    // ]).then(data=>console.log(data))
   

    // finding data (reading data) //find,findOne,other for multiple tasks
    // db.collection("user")
    //   .find({ age: 18 })
    //   .forEach(user => {
    //     console.log(user);
    //   });


    db.collection("user").updateOne(
      {
        age: 18
      },
      {
        $set: {
          name: "Ishan"
        }
      }
    );

    // //delete operation
    // db.collection("user").deleteOne({
    //   age: 22
    // });
  }
);
