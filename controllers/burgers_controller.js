const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req,res){
    burger.selectAll(function(data){
        let hbsObject = {
            burgers: data,
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req,res){
    burger.create(
        ["burger_name", "devoured"], [req.body.burger_name,req.body.burger_devoured],
        function(result){
            res.json({id: result.insertId});
        }
    );
});

router.put("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id;
    console.log("condition: ",condition);

    burger.updateOne({devoured:req.body.devoured}, condition, function(result){
        if(result.changedRows === 0){
            return res.status(200).end();
        }
    })
})

module.exports = router;