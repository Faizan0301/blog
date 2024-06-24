const userDB = require("../models/user.schema");


const creatPage = (req, res) => {
    return res.render('creat')
}
const creat = async (req, res) => {
    const { username, email, password, phone } = req.body
    try {
        await userDB.create({ username, email, password, phone })
        return res.redirect('/login')
    } catch (err) {
        console.log(err);
    }

};
const loginPage = (req, res) => {
    return res.render('login')
}
const login = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await userDB.findOne({ username: username });
        console.log(user.id);
        if (!user) {
            console.log("User not found...");
            return res.redirect('/login')
        }

        if (user.password != password) {
            console.log("Password wrong....");
            return res.redirect('/login')
        }

        return res.cookie('user', user.id).redirect('/blog')
    } catch (err) {
        console.log(err);
    }
}
const logout = async (req, res) => {
    res.clearCookie('user')
    return res.redirect('/login')
}

module.exports = {login,loginPage,creat,creatPage,logout};