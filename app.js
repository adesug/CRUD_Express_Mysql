/**pertama */
const path = require('path');
const express = require('express');
const ejs = require('ejs');
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



//kedua
app.get('/', (req, res) => {
    res.send('CRUD OPERATION USING EXPRESSJS');
});

//server pertama
app.listen(3000, () => {
    console.log('Hallo');
});