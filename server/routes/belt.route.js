const BeltController = require('../controllers/belt.controller');
module.exports = function(app){
    app.get('/api/belt', BeltController.findAllBelts);
    app.get('/api', BeltController.index);
    app.post('/api/belt', BeltController.createBelt);
    app.get('/api/belt/:id', BeltController.getBelt);
    app.put('/api/belt/:id', BeltController.updateBelt);
    app.delete('/api/belt/:id', BeltController.deleteBelt);
}