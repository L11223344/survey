var express = require('express');
const path = require('path')
var app = express();
const routes = require('./route')
const DB = require('./config/connectDB');
DB()
const PORT = 4000 || process.env.PORT;
// set the view engine to ejs
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/', express.static('./public'));
// use res.render to load up an ejs view file

app.use('/v1', routes)
app.get('/', function (req, res) {
    res.render('pages/index');
});

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
});
