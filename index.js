const express = require('express'); 
require('dotenv').config({ path: 'key.env' });

const App = express(); 
const PORT = process.env.PORT || 5000; 

App.use(express.urlencoded({ extended: true }));
App.use(express.json());
App.use((req, res, next) => {
    console.log(`Path ${req.path} with Method ${req.method}`);
    next();
}); 

const homeRoute = require('./routes/homeRoute'); 
const fbWebhookRoute = require('./routes/fbWebhookRoute'); 

App.use('/', homeRoute.router); 
App.use('/facebook', fbWebhookRoute.router); 


App.listen(PORT, ()=> {
    console.log('App is listening to the port of ', PORT);
})