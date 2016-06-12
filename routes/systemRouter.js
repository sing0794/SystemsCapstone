var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Systems = require('../models/systems');
var Verify = require('./verify');

var systemRouter = express.Router();
systemRouter.use(bodyParser.json());

systemRouter.route('/')
.get(function (req, res, next) {
    Systems.find(req.query)
        .exec(function (err, system) {
        if (err) next(err.concat('systems router find'));
        res.json(system);
    });
})

//.post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
.post(function (req, res, next) {
    Systems.create(req.body, function (err, system) {
        if (err) next(err);
//        var name = system.name;
//        res.writeHead(200, {
//            'Content-Type': 'text/plain'
//        });

//        res.end('Added the system with name: ' + name);
    });
})

.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
    Systems.remove({}, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
});

systemRouter.route('/:systemId')
.get(function (req, res, next) {
    Systems.findById(req.params.systemId)
        .exec(function (err, system) {
        if (err) next(err);
        res.json(system);
    });
})

//.put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
.put(function (req, res, next) {
    Systems.findByIdAndUpdate(req.params.systemId, {
        $set: req.body
    }, {
        new: true
    }, function (err, system) {
        if (err) next(err);
        res.json(system);
    });
})

.delete(function (req, res, next) {
        Systems.findByIdAndRemove(req.params.systemId, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
});

module.exports = systemRouter;

