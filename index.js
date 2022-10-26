const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const catagories = require('./data/catagories.json')
const tutorial = require('./data/singleCatagory.json');
const e = require('express');

app.get('/', (req, res) => {
    res.send('server is running')
})

app.get('/tutorial', (req, res) => {
    res.send(tutorial);
})
app.get('/team-catagories', (req, res) => {
    res.send(catagories);
})
app.get('/catagory/:id', (req, res)=>{
    const id = req.params.id;
    const catagory_tutorial = tutorial.filter(n=> n.category_id === id);
    res.send(catagory_tutorial);
})
app.get('/tutorial/:id', (req,res) =>{
    const id = req.params.id;
    const selectedTutorial = tutorial.find(n=> n._id === id)
    res.send(selectedTutorial);

    console.log(req.params)
})
app.listen(port, () => {
    console.log(' on port', port)
})