const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Animal = mongoose.model('Animal');
module.exports = {
showAll: (req, res)=>{
  Animal.find({}, (err, animals)=>{
    if (err){
      console.log(err);
      res.render('index')
    }
    if(animals){
      console.log(animals);
      res.render('index', { animals: animals})
    }
  });
},
new: (req, res)=>{
  res.render('new')
},
showOne: (re, res)=>{
  res.render('edit', { _id:req.params.id})
},
create: (req, res)=>{
  console.log("Post Data", req.body);
  var animal = new Animal({ name: req.body.name, description: req.body.description});
  console.log(animal);
  animal.save(function(err){
    if(err){
      console.log("Something went wrong")
      res.render('new', { title: 'Errors Detected', errors: animal.errors })
    }else {
      console.log("Successfully added an Animal");
      res.redirect('/')
    }
  });
},
edit: (req, res)=>{
  Animal.findOne({ _id:req.params.id}, (err, animals)=>{
    if (err){
      console.log(err);
      res.render('index')
    }
    if (animals){
    console.log(req.params.id);
    console.log(animals);
    res.render('edit', {animals: animals})
   }
  })
},
update: (req, res)=>{
  console.log('Post Data', req.body);
  console.log(req.params.id);
  Animal.update({_id:req.params.id}, { $set: {name: req.body.name, description: req.body.description}}, (err)=>{
    console.log(err);
  })
  res.redirect('/')
},
  destroy: (req, res)=>{
    console.log(req.params.id);
    Animal.remove({ _id: req.params.id}, (err)=>{
      console.log(err);
    }),
    res.redirect('/')
  },
}
