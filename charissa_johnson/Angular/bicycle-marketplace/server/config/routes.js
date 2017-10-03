const mongoose = require("mongoose");
const path = require("path");

users = require("./../controllers/users.js");
bicycles = require("./../controllers/bicycles.js");

module.exports = function(app){

    app.post("/findUser", function(req, res){
        console.log("Inside Find User Server Express route... " + req.body.email);
        users.findUser(req, res);
    })

    app.post("/addUser", function(req, res){
        console.log("Inside Add User Server Express route..." + req.body.email);
        users.create(req, res);
    })

    app.get("/logout", function(req, res){
        console.log("Inside Logout Express route...");
        users.logout(req, res);
    })

    app.get("/getSession", function(req, res){
        console.log("Inside Get Session Server Express route..." + req.session.userId);
        users.getSession(req, res);

    })

    app.post("/addBicycle", function(req, res){
        console.log("Inside Add Bike Server Express route..." + req.body.title);
        bicycles.addBicycle(req, res);
    })

    app.get("/getAllBikes", function(req, res){
        console.log("Inside Getting All Bikes Server Express route...");
        bicycles.getAllBikes(req, res);
    })
    app.post("/findCreator", function(req, res){
        console.log("Inside Creator info Server Express route...");
        users.findCreator(req, res);
    })
    app.post("/getMyBikes", function(req, res){
        console.log("Inside Get My Bikes info Server Express route...");
        bicycles.getMyBikes(req, res);
    })
    app.post("/removebike", function(req, res){
        console.log("Inside remove bike action!");
        bicycles.removebike(req, res);
    })
    app.post("/updateBicycle", function(req, res){
        console.log("Inside Update Bike Server Express route...");
        bicycles.updateBicycle(req, res);
    })
    app.all("*", (req,res,next)=>{
        res.sendfile(path.resolve("./public/dist/index.html"))
    });

}