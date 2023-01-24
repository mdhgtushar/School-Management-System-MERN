//external imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//internal imports
const ClientRoute = require("./routes/ClientRoute");
const AdminRoute = require("./routes/AdminRoute");
const HandleError = require("./middlewares/HandleError");

//init
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//dbconnect
mongoose.connect(process.env.MONGODB, (err) => {
  if (err) {
    console.log("DB NOT CONNECTED");
    console.log(err)
  } else {
    console.log("DB CONNECTED");
  }
});

//routing
app.get("/", (req, res) => res.send("App is running"));
app.use("/api/client", ClientRoute);

app.use("/api/admin", AdminRoute);

//error handeling
app.use(HandleError);

//run the app
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err
    ? console.log("App not running")
    : console.log("App running on port " + PORT)
);
