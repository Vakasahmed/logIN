import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Headers } from "node-fetch";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/nine-gap",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  firstName: String,
  lasttName: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

app.post("/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const user = new User({
        firstName,
        lastName,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});

var myHeaders = new Headers();
myHeaders.append("apikey", "5EVYGlorMy19UwoBJAwq26Ersoiutr5j");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("nine-gap/dist"));
}

app.listen(PORT, () => {
  console.log(`BE started at port ${PORT}`);
});
