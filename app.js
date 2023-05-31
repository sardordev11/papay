console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router.js");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");
// BSSR -Backend server side rendering

// 4: Routing code
//app.use("/resto", router_bssr);
app.use("/", router);

module.exports = app;