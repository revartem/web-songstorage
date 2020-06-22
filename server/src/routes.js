const AuthencticationController = require('./controllers/AuthenticationController')
const AuthencticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')


module.exports = (app) => {
    app.post('/register',
        AuthencticationControllerPolicy.register,
        AuthencticationController.register
    )
}
