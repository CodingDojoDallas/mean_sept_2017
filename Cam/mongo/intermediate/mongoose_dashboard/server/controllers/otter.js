var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Otter = mongoose.model('Otter')
//-.-. .- -- . .-. --- -. / -- .- .-. ... .... .- .-.. .-..//
module.exports = {
    showAll: function(req, res) {
        Otter.find({}, function(err, otters){
            if (err) {
                console.log(err)
                res.render('index')
            }
            if (otters) {
                console.log(otters)
                res.render('index', {otters: otters})
            }
        });
    },
    //-.-. .- -- . .-. --- -. / -- .- .-. ... .... .- .-.. .-..//
    new: function(req, res){
        res.render('new')
    },
    //-.-. .- -- . .-. --- -. / -- .- .-. ... .... .- .-.. .-..//
    create: function(req, res){
        console.log("POST DATA", req.body);
        var otter = new Otter({name: req.body.name, description: req.body.description});
        console.log(otter)
        otter.save(function(err){
            if (err) {
                console.log("Help!!!! something went wrong")
                res.render('new', {title: 'you have errors!', errors: otter.errors})
            } else {
                console.log("successfully added a otter!")
                res.redirect('/')
            }
        })
    },
    //-.-. .- -- . .-. --- -. / -- .- .-. ... .... .- .-.. .-..//
    edit: function(req, res){
        Otter.findOne({_id:req.params.id}, function(err, otters){
            if (err) {
                console.log(err)
                res.render('index')
            }
            if (otters) {
                console.log(req.params.id)
                console.log(otters)
                res.render('edit', {otters: otters})
            }
        })
    },
    //-.-. .- -- . .-. --- -. / -- .- .-. ... .... .- .-.. .-..//
    update: function(req, res){
        console.log("POST DATA", req.body);
        console.log(req.params.id)
        Otter.update({_id:req.params.id}, { $set: {name: req.body.name, description: req.body.description}}, function(err){
            console.log(err);
        })
        res.redirect('/')
    },
    //-.-. .- -- . .-. --- -. / -- .- .-. ... .... .- .-.. .-..//
    destroy: function(req, res){
        console.log(req.params.id)
        Otter.remove({_id: req.params.id}, function(err){
            console.log(err);
        })
        res.redirect('/')
    },
}