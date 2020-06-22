const Joi = require('joi')

module.exports = {
    register(req,res,next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const {error} = Joi.validate(req.body, schema)
        if(error){
            //it takes the earliest name of property that errored
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password that you provided didn't match following rules:
                        <br>
                        1. It must contain ONLY the following characters: a-z, A-Z, 0-9;
                        <br>
                        2. It must be at least 8 char in length and not more then 32.
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information.'
                    })
            }
        }else {
            next()
        }

    }
}