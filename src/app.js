const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

const {accounts, users, writeJSON} = require('./data');

const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true}));
app.get('/', (req,res) => res.render('index', {title: 'Account Summary', accounts}));
app.get('/account', accountRoutes);
app.get('/services', servicesRoutes);



app.listen(3000, () => console.log('PS project running in port 3000....'));