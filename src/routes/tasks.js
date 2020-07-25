const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://jesus:todolist@todo-list-db-shard-00-00.0zqai.mongodb.net:27017,todo-list-db-shard-00-01.0zqai.mongodb.net:27017,todo-list-db-shard-00-02.0zqai.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-ehvme5-shard-0&authSource=admin&retryWrites=true&w=majority', ['tasks']);

router.get('/tasks', (req, res, next) =>{
    db.tasks.find((err, tasks) => {
        if (err) return next(err);
        res.json(tasks);
    });
});

router.get('/tasks/:id', (req, res, next) =>{
    db.tasks.findOne({_id: mongojs.ObjectId(req,params.id)}, (err, tasks) => {
        if (err) return next(err);
        res.json(tasks);
    });
});
//hacer cambio de los datos
router.post('/tasks', (req, res, next) => {
    const task = req.body;
    if(!task.title || !(task.isDone + '')) {
        res.status(400).json({
            error: 'Datos Incorrectos'
        });
    } else {
        db.tasks.save(task, (err, task) => {
            if (err) return next(err);
            res.json(task);   
        });
    }
});

router.delete('/tasks/:id', (req, res, next) => {
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, result) => {
        if (err) return next(err);
        res.json(result);
    });
});

router.put('/tasks/:id', (req, res, next) => {
    const task = req.body;
    const updateTask = {};

    if(task.isDone){
        updateTask.isDone = task.isDone;

    }

    if(task.title){
        updateTask.title = task.title;

    }

    if(!updateTask){
        res.status(400).json({
            error: 'Solicitud Incorrecta'
        });
    } else {

        db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updateTask, (err, tasks) => {
            if(err) return next(err);
            res.json(task);
        });

    }

   
});

module.exports = router;