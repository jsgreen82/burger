var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

//get all the burgers in the database
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

//post a new burger
router.post('/', function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [ 
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId});
    }
)
});

router.put('/:id', function(req, res) {
    var condition = "id =" + req.params.id;
    console.log("condtion", condition);


});

module.exports = router;