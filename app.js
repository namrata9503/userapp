var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require('mongoose')
, cors = require('cors');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://namrata:Swapnac123@cluster0-jvvsr.mongodb.net/user-crud?retryWrites=true')
mongoose.connection.on('error', (error) => console.error(error))
mongoose.connection.on('open', () => console.log('successfully connected with mongodb..'))

app.use('/', indexRouter);
app.use('/users', usersRouter);


const userController = require('./controller/user');

app.post('/api/v1/users', userController.postNewUser);
app.get('/api/v1/users', userController.getAll);
app.get('/api/v1/users/:id', userController.getUserById);
app.post('/api/v1/user', userController.getUserOne);


app.put('/api/v1/user/:id', userController.updateUserById);
app.put('/api/v1/user', userController.findOneUpdate);
app.put('/api/v1/user', userController.updateMultiple);
app.put('/api/v1/user', userController.updateOne);

//app.put('/api/v1/user/:id', userController.replaceOne);

app.delete('/api/v1/user/:id', userController.deleteUserById);




app.listen(4444, () => console.log('Express server at 4444'))

module.exports = app;
