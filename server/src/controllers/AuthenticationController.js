const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')


function jwtSingUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req,res)  {
        try{
            const user = await User.create(req.body)
            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: jwtSingUser(userJson)
            })
        }catch(err){
            res.status(400).send({
                error: 'This email is already in use'
            })
        }
    },
    async login (req,res)  {

        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email,
                }
            })
            if (!user) {
                res.status(403).send({
                    error: 'Login information is incorrect'
                })
            }


            const validPw = await user.comparePassword(password)
            console.log(validPw)
            if (!validPw) {
                res.status(403).send({
                    error: 'Wrong password'
                })
            }
            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: jwtSingUser(userJson)
            })
        }catch(err){
            console.log(err)
            res.status(500).send({
                error:  'An error was occured'


            })
        }
    }
}