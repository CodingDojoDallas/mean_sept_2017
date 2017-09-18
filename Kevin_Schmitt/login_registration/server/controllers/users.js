// get the model
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('User');

class UsersController {
    homepage(req,res){
        return res.render('index');
    }
    dashboard(req,res){
        if(!req.session.user_id){
            return res.redirect('/');
        }
        res.render('dashboard', { session: req.session })
    }
    create(req,res){
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        User.create(req.body, (err, user) => {
            if(err){
                console.log(err);
            }
            req.session.user_id = user._id;
            req.session.name = user.name;
            // for angular return json always / with ejs return render or redirect
            // return res.json(user);
            return res.redirect('/dashboard');
        })
    }
    authenticate(req,res){
        User.findOne({email: req.body.email}, (err, user) => {
            if(err){
                console.log(err);
            }
            // if(user && bcrypt.compareSync(req.body.password, user.password)){   or
            if(user && user.authenticater(req.body.password)){
                req.session.user_id = user._id;
                req.session.name = user.name;
                // return res.json(user);
                return res.redirect('/dashboard');
            }
            return res.json({
                'errors': 'invalid credentials'
            });
        })
    }
    isLoggedIn(req,res){
        if(req.session.user_id){
            return res.json({
                'status': true
            })
        } else {
            return res.json({
                'status': false
            })
        }
    }
    logout(req,res){
        delete req.session.user_id;
        // return res.json({
        //     'status':false
        // })
        return res.redirect('/')
    }
}


module.exports = new UsersController();