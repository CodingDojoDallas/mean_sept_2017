// get the model
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('User');

class UsersController{
  dashboard(req, res){
    if(!req.session.user_id){
			return res.redirect('/');
		}
     res.render('dashboard', { session: req.session})
  }
  homepage(req, res){
    return res.render('index');
  }
  create(req, res){
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, user)=>{
      if(err){
        console.log('Something Went Wrong, User Was Not Created');
      }
      console.log(`Success! The User, ${user.first_name} was created`);
      req.session.user_id = user._id;
      // if using angular
      // return res.json(user);
      return res.redirect('/dashboard')
    });
  }
  authenticate(req, res){
    User.findOne({ email: req.body.email }, (err, user) => {
      if(err){
        // If using angular
        return res.json(err);
        // If using ejs
        // return res.redirect('/')

        console.log(err);
      }
      if(user && user.authenticate(req.body.password)){
        req.session.user_id = user._id;
        console.log(`${user.first_name} ${user.last_name}, has logged in successfully`);
        // If using angular
        // return res.json(user);

        // Otherwise if you're using ejs
        return res.redirect('/dashboard')
      }
          console.log(`The email: ${req.body.email} or the password: ${req.body.password} is not valid`);
          return res.json({
            'errors': 'Invalid Credentials'
      });
    });
  }
  isLoggedIn(req, res){
    if(req.session.user_id){
      // If using angular
      return res.json({
        'status': true
      });
      // If using ejs
      // Return res.redirect - send back a boolean
    }else {
      // if using ejs
      // Redirect to the login page

      // If using angular
      return res.json({
        'status': false
      })
    }
  }
  logout(req, res){
    delete req.session.user_id;
    //if using angular
    // return res.json({
    //   'status': true
  // });
    // If using ejs
    // Redirect back to the root
      return res.redirect('/')
  }
}
module.exports = new UsersController();
