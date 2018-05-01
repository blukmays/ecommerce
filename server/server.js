const express = require('express');
const bodyPaser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


// Mongoo Setup
mongoose.connect("mongodb://blukm:sakura14@ds161038.mlab.com:61038/ecommerce");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    url: String
});

const ProductModel = mongoose.model("products", ProductSchema);

const UserSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    imageUrl: String
});

const UserModel = mongoose.model("users", UserSchema);

const app = express();

app.use(express.static(path.resolve(__dirname + '/../build')))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyPaser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

// Serializes User info for security
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    UserModel.findOne({_id: id}, function(err, user) {
        done(err, user);
    });
});

// Setup Passport middleware for Google
passport.use(new GoogleStrategy({
        clientID: '161317582843-takuk8e2smaoqso6vb8a21t0l9vj3k5g.apps.googleusercontent.com',
        clientSecret: 'eCw6ReEU3G7e-MKC09awmi83',
        callbackURL: "http://localhost:3001/api/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        console.log('profile info from google', profile);

        UserModel.findOne({_id: profile.id}, (err, user) => {

            console.log('errr', err, 'userrrrrr', user)
            if (!err && user) {
                return cb(null, user);
            }

            UserModel.create({
                _id: profile.id,
                name: profile.displayName,
                email: profile.emails.length ? profile.emails[0].value : null,
                imageUrl: profile.photos.length ? profile.photos[0].value : null
            }).then(newUser => {
                cb(null, user);
            }).catch(err => {
                cb(err, null);
            })
        });
    }
));

// Authentication routes
app.get('/api/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/api/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.send('Logged in!!!');
    });


// CREATE A PRODUCT
app.post("/api/products", (req, res) => {
    console.log('reqqqqq body', req.body);
    ProductModel.create(req.body).then(newProduct => {
        res.send(newProduct)
    }).catch(err => res.send(err));
});

// GET ALL PRODUCTS
app.get("/api/products", (req, res) => {
    ProductModel.find().then(products => {
        res.send(products);
    }).catch(err => res.send(err));
});

// DELETE A PRODUCT
app.delete("/api/products", (req, res) => {
    const productId = req.body.id
    ProductModel.remove({_id: productId}).then(res => res.send(res))
        .catch(err => res.send(err));
})

//app.get('*', (req, res) => {
  //  res.sendFile(path.resolve(__dirname ))
//})

app.listen(process.env.PORT || 3001, () => console.log('Server started on 3000!!!'));