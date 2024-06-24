const blogDB = require("../models/blog.Schema")
const fs = require('fs')

const indexPage = async (req, res) => {
    try {
        const data = await blogDB.find({})
        return res.render('blog', { data })
    } catch (err) {
        console.log(err);
    }
}
const addBlogPage = (req, res) => {
    return res.render('addBlog')
}
const addBlog = async (req, res) => {
    const { title, image, date, discription, id } = req.body

    if (id) {
        if (req.file) {
            let image = req.file.path
            try {
                const data = await blogDB.findByIdAndUpdate(id, { title, image, date, discription })
                let oldImg = data.image
                fs.unlinkSync(oldImg)
                return res.redirect('/blog')
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                await blogDB.findByIdAndUpdate(id, { title, image, date, discription })
                return res.redirect('/blog')
            } catch (err) {
                console.log(err);
            }
        }
    } else {
        let image = req.file.path
        try {
            await blogDB.create({ title, image, date, discription })
            return res.redirect('/blog')
        } catch (err) {
            console.log(err);
        }
    }
}
const editBlog = async (req, res) => {
    const { id } = req.params
    try {
        const data = await blogDB.findById(id)
        return res.render('editBlog', { data })
    } catch (err) {
        console.log(err);
    }
}
const editPage = async (req, res) => {
    try {
        const data = await blogDB.find({})
        return res.render('edit', { data })
    } catch (err) {
        console.log(err);
    }
}
const deleteBlog = async (req, res) => {
    const { id } = req.params
    try {
        const data = await blogDB.findByIdAndDelete(id)
        let image=data.image
        fs.unlinkSync(image)
        return res.redirect('/editPage')
    } catch (err) {
        console.log(err);
    }
}

module.exports = { indexPage, addBlogPage, addBlog, editBlog, editPage,deleteBlog }


