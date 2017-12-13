const myPowers = require('./common/util/math/myPowers');
var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    var data2Template = {
        head: { title: 'Home Page' },
        name: 'Shakib',
        lastname: 'Momen'
    };
    res.render('./pages/');
});

app.get('/square', function(req, res) {
    var inpNumber = 2;
    var resultNumber = myPowers.toSquare(inpNumber)
    var data2template = {
        head: { title: 'Square Page' },
        inpNumber: inpNumber,
        resultNumber: resultNumber
    };
    res.render('./pages/square', data2template);
});

app.get('/cube', function(req, res) {
    var inpNumber = 3;
    var resultNumber = myPowers.toCube(inpNumber)
    var data2Template = {
        head: { title: 'CubePage' },
        inpNumber: inpNumber,
        resultNumber: resultNumber
    };
    res.render('./pages/cube', data2Template);
});

app.get('/about', function(req, res) {
    1
    res.status(200).render('./pages/about.html');
});

app.get('/*', function(req, res) {
    res.status(404).render('./pages/error.ejs', { head: { title: 'Error' } });
});

var server = app.listen(9015, function() {
    console.log(
        'Exam Section 2, started at http://%s:%s',
        server.address().address,
        server.address().port
    );
});