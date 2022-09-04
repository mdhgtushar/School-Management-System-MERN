//internal require
const ClientRoute = require("express").Router();

//declare routes
ClientRoute.route("/");
ClientRoute.route("/students");
ClientRoute.route("/teachers");
ClientRoute.route("/notice");
ClientRoute.route("/magazine");
ClientRoute.route("/event");
ClientRoute.route("/result");

//export the module
module.exports = ClientRoute;
