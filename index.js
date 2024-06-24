const express = require('express');
const router = require('./routers/router');
const cookie = require('cookie-parser');
const db = require('./config/database');
const path=require('path');
const userAuth = require('./middlewares/user.middlewares');
const b_router = require('./routers/blog_router');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
app.use(express.static('public'));
app.use(cookie());
app.use(router);
app.use(userAuth)
app.use("/blog",b_router)

app.listen(8083, (err) => {
    if (!err) {
        db()
        console.log("server start. http://localhost:8083");
    }
});