const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req,res){
    burger.selectAll(function(data){
        console.log("Eight", data)
        let hbsObject = {
            burgers: data,
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req,res){
    console.log(req.body);
    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.name, req.body.devoured],
        function (result) {
          // Send back the ID of the new quote
          res.json({ id: result.insertId });
        }
    );
});

router.put("/api/burgers/:id", function(req,res){
    console.log(req.params.id);
    const id = req.params.id;

    burger.updateOne(id, function(result){
        if(result.changedRows === 1){
            return res.status(200).end();
        }
        else if(result.changedRows === 0){
            return res.status(400).end();
        }
    })
})

module.exports = router;