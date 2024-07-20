const router = require('express').Router();
const api = require('./api');
const Task = require('../models/Task');

// localhost:3001/api
router.use("/api", api);

router.get('/', async (req, res) => {
    const allTasks = await Task.findAll();
    const sanitizedData = allTasks.map((task) => {
        return task.get({ plain: true });
    })
    console.log(allTasks);
    console.log('==================');
    console.log(sanitizedData);
    // const testData = {
    //     name: "Test Work",
    //     description: "Work to do",
    //     status: "In progress"
    // };
    res.render('todo', { sanitizedData });
})

// localhost:3001/pikachu
router.get("/pikachu", (req, res) => {
    res.json('Hello Pikachu!');
})


module.exports = router;