const models = require('../models');
const jwb = require('jsonwebtoken')
const config = require('../config')

const crear = async (req,res) => {

    try {
        const { username, password1, password2, admin } = req.body;

        if (!username || !password1 || !password2 || !admin){
            return res.status(409).json('All fields are required')
        } else if (password1 !== password2) {
            return res.status(409).json('Passwords do not match')
        }

    const user = await models.user.crear({ username, admin, password: password1 })
    await user.save()
    return res.status(201).json({ user })

    } catch (err) {
        console.log({err})
        return res.status(409).json("Error detected creating user")
    }
}


const inicioSesion = async (req,res) => {
    try {

        const user = await models.user.findOne({ username: req.body.username })
        if (!user){
            return res.status(409).json('User does not exist')
        }

        if(user.password !== req.body.password) {
            return res.status(409).json('Incorrect password')
        }

        const token = jwb.sign({ user }, config.jwt.secret)
        return res.json({ token, userId: user._id })

    } catch {
        return res.status(409).json('Error detected during log-in')
    }

}
    

const all = async (req,res) => {
    try {
        const data = jwt.verify(req.headers.token, config.jwt.secret);
        const users = await models.user.find({ _id:{ $ne: data.user._id }});

        return res.json ({ users })

    } catch (err) {
        return res.json({ err })
    }
}


module.exports = {
    crear,
    inicioSesion,
    all,
}