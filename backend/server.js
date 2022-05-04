// Require modules
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Authentication modules
const passport = require('passport');
const methodOverride = require('method-override');
const flash = require('express-flash');
const session = require('express-session');

// Require routes
const publicRouter = require('./routes/publicRoutes');
const userRouter= require ('./routes/userRoutes');
// const privateRouter = require('./routes/privateRoutes');



// Set views and public folders and use body parser
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));


//NEW use passport
app.use(passport.initialize());
app.use(passport.session());

// Use routes

app.use('/', publicRouter);
// app.use('/auth', userRouter);
// app.use('/private', privateRouter);





// Connect to MongoDB server on port 27017 and database
dotenv.config();

mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true})
    .then(() => {
        console.log('Database connection successful')
        app.listen(process.env.PORT, "localhost", (err) =>{
            if(err) console.log("Server could not be started" + err.message);
            else console.log(`Server listening at port ${process.env.PORT}....`)
        })
    })
    .catch(err => {
        console.error(err.message)
    });


// Create server
const app = express();

//NEW express session
app.use(flash());
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 60 * 60 * 1000}
}))
