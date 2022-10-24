const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const catagories = require('./data/catagories.json')
const news = require('./data/singleCatagory.json');
const e = require('express');

app.get('/', (req, res) => {
    res.send('server is running')
})

app.get('/news', (req, res) => {
    res.send(news);
})
app.get('/team-catagories', (req, res) => {
    res.send(catagories);
})
app.get('/catagory/:id', (req, res)=>{
    const id = req.params.id;
    const catagory_news = news.filter(n=> n.category_id === id);
    res.send(catagory_news);
})
app.get('/news/:id', (req,res) =>{
    const id = req.params.id;
    const selectedNews = news.find(n=> n._id === id)
    res.send(selectedNews);

    console.log(req.params)
})
app.listen(port, () => {
    console.log('t20 on port', port)
})