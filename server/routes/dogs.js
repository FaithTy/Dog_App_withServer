const router = require('express').Router()

let Dog = require('../models/dog.model')

router.route('/').get((req, res) => {
  Dog.find()
    .then(dogBreed =>  res.json(dogBreed))
    .catch(err =>  res.status(400).json('Error:' + err))
});

router.route('/vote').post((req, res) => {
  const name = req.body.name;
  // const breed_Id = Number(req.body.breed_Id)
  const counterLikes = Number(req.body.counterLikes);
  const counterDisLikes = Number(req.body.counterDisLikes);

  const newDogBreed = new Dog({
      name,
      // breed_Id,
      counterLikes, 
     counterDisLikes
    })

  newDogBreed.save()
    .then(() => res.json('Dog vote added'))
    .catch((err) => res.status(400).json('Error: ' + err));
})

router.route('/:name').get((req, res) => {
  console.log(req.params.name, 'reeq body by getid')
  Dog.findOne( {name:req.params.name})
    .then(dog => res.json(dog))
    .catch(err => res.status(400).json('Error ' + err))
})

module.exports = router;