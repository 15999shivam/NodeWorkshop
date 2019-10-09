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

    //inserting data(creating)
    // db.collection("user").insertOne(
    //   {
    //     name: "shivam",
    //     age: 23,
    //     status: "single"
    //   },
    //   (error, data) => {
    //     console.log(data.ops);
    //   }
    // );

    //finding data (reading data) //find,findOne,other for multiple tasks
    // db.collection("user")
    //   .find({ age: 20 })
    //   .forEach(user => {
    //     console.log(user);
    //   });

    // db.collection("user").updateOne(
    //   {
    //     age: 22
    //   },
    //   {
    //     $set: {
    //       name: "yoyo honey singh"
    //     }
    //   }
    // );

    //delete operation
    db.collection("user").deleteOne({
      age: 22
    });
  }
);
