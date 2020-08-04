const User = require('../models/User');

exports.test = function(req, res) {
    res.send("Hello");
};

exports.create = function(req, res) {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(function(err) {
        if (err) {
            console.log(err)
        }
        res.send("User created !!!")
    });
};

exports.detail = function(req, res) {
    User.findById(req.params.id, function(err, ret) {
        if (err) return next(err);
        res.send(ret);
    });
};

exports.update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('user udpated!!!');
    });
};

exports.delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};