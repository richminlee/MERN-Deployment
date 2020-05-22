const { Belt } = require('../models/belt.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.findAllBelts = (req, res) => {
    Belt.find()
      .then(belts => res.json(belts))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

module.exports.getBelt = (req, res) => {
    Belt.findOne({_id:req.params.id})
      .then(belt => res.json(belt))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

module.exports.createBelt = ( request, response) => {
    const { project, dueDate, status } = request.body;
    Belt.create({
        project,
        dueDate,
        status
    })
    .then(belt => response.json(belt))
    .catch(err => response.status(400).json(err));
};

module.exports.updateBelt = (request, response) => {
    Belt.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
    .then(updatedBelt => response.json(updatedBelt))
    .catch(err => response.status(400).json(err))
}
module.exports.deleteBelt = (request, response) => {
    Belt.deleteOne({ _id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}