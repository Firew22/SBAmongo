//const { render } = require('ejs');
const articleRouter = require('./routes/articles');
const express = require('express');
const mongoose = require('mongoose')
const Article = require('./models/article')
const methodOverRide = require('method-override')
const app = express();     

mongoose.connect('mongodb://localhost/blog')
useCreateIndex:true

app.set('view engine','ejs' )

app.use(express.urlencoded({extended: false }))
app.use(methodOverRide('_method'))


app.get('/', async(req, res) => {
    const articles = await Article.find().sort({createdDate:'desc'})

    
    res.render('articles/index',{articles: articles})
})
app.use('/articles',articleRouter)



app.listen(5000)

