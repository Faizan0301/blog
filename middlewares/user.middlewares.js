const userAuth = (req, res, next) => {
    const userCookie = req.cookies.user

    if (userCookie) {
        next()
    } else {
        return res.redirect('/login')
    }
}

module.exports = userAuth