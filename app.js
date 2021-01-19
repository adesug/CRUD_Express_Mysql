/**pertama */
const path = require('path');
const express = require('express');
// const ejs = require('ejs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

//ketiga create connection

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'node_crud'

});

connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected');
});

//set view file

//set view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//kedua
app.get('/',(req, res) => {
    // res.send('CRUD OPERATION USING EXPRESSJS');
    let sql = "SELECT * FROM users";
    let query = connection.query(sql, (err, rows) => {
        if(err) throw err;
        res.render('user_index', {
            title : 'CRUD XPRESSJS',
            users : rows
        });
    });
});

//server pertama
app.listen(3000, () => {
    console.log('Hallo');
});