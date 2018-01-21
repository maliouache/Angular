'use strict';

var express = require("express");
var cors = require("cors");
// var busboy = require("then-busboy"),
var fileUpload = require('express-fileupload');
var multer = require("multer");
var app = express();
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(fileUpload());
var jsonParser = bodyParser.json();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, '../assets/images/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.originalname )
    }
});
var upload = multer({ //multer settings
    storage: storage
}).single('file');

app.post('/upload', function(req, res) {
    upload(req,res,function(err){
        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }
         res.json({error_code:0,err_desc:null});
    })
});
// app.post("/upload", multer({dest: "./assets/images/"}).array("uploads", 1), function(req, res) {
//     console.log(req.body);
//     res.send(req.files);
// });

var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/ProjetTW";
var assert = require("assert");
let ObjectId = require("mongodb").ObjectId;

mongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    app.use(bodyParser.json());
    app.get('/Hello', function (req, res) {
        res.end("Hello");
    });

    app.post('/Users', jsonParser, function (req, res) {
        db.collection("Users3").save(req.body, function (err) {
            if (err) console.error(err);
            else res.send('Data received:\n' + JSON.stringify(req.body));
        })
    });
    app.post('/newProduct', jsonParser, function (req, res) {
        db.collection("Products").save(req.body, function (err) {
            if (err) console.error(err);
            else res.send('Data received:\n' + JSON.stringify(req.body));
        })
    });

    app.get('/Users/:mail', function (req, res) {
        let mail = req.params.mail;
        let filtre = {}; filtre.mail_adress = mail;
        db.collection("Users3").find(filtre)
            .toArray(function (err, documents) {
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.setHeader('Access-Control-Allow-Origin', '*');
                var json = JSON.stringify(documents);
                res.end(json);
            });
    });


    app.get('/Products/:marque', function (req, res) {
        let marque = req.params.marque;
        let filtre = {}; filtre.brand = { $regex: marque, $options: "$i" };
        filtre.category = { $regex: marque, $options: "$i" };
        filtre.name = { $regex: marque, $options: "$i" };
        filtre.description = { $regex: marque, $options: "$i" };
        db.collection("Products").find({ $or: [{ "brand": filtre.brand }, { "category": filtre.category }, { "name": filtre.name }, { "description": filtre.description }] })
            .toArray(function (err, documents) {
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.setHeader('Access-Control-Allow-Origin', '*');
                var json = JSON.stringify(documents);
                res.end(json);
            });
    });

    app.get('/Category/:category', function (req, res) {
        let category = req.params.category;
        let filtre = {}; filtre.category = category;
        db.collection("Products").find(filtre).limit(20)
            .toArray(function (err, documents) {
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.setHeader('Access-Control-Allow-Origin', '*');
                var json = JSON.stringify(documents);
                res.end(json);
            });
    });
    app.get('/Shippings/:id_item', function (req, res) {
        let id_item = req.params.id_item;
        let filtre = {}; filtre.id_item = id_item;
        db.collection("Shippings").find()
            .toArray(function (err, documents) {
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.setHeader('Access-Control-Allow-Origin', '*');
                var json = JSON.stringify(documents);
                console.log(json);
                res.end(json);
            });
    });
    app.get('/Owner/:owner', function (req, res) {
        let owner = req.params.owner;
        let filtre = {}; filtre.owner = owner;
        db.collection("Products").find(filtre)
            .toArray(function (err, documents) {
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.setHeader('Access-Control-Allow-Origin', '*');
                var json = JSON.stringify(documents);
                res.end(json);
            });
    });

    app.get('/Detail/:id', function (req, res) {

        let id = req.params.id;
        let filtre = {}; filtre._id = id;
        if (/[0-9a-f]{24}/.test(id)) {
            db.collection("Products").find({ "_id": ObjectId(id) })
                .toArray(function (err, documents) {
                    res.setHeader('Content-Type', 'application/json; charset=utf-8');
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    var json = JSON.stringify(documents);
                    res.end(json);
                });
        }
    });

});

// app.post('/upload', function(req, res) {
//     if (!req.files)
//       return res.status(400).send('No files were uploaded.');
   
//     // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//     let sampleFile = req.files.uploaded_image;
   
//     // Use the mv() method to place the file somewhere on your server
//     uploaded_image.mv('../assets/images/filename.jpg', function(err) {
//       if (err)
//         return res.status(500).send(err);
   
//       res.send('File uploaded!');
//     });
//   });

app.listen(8888);
