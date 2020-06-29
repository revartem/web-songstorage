const bcrypt = require('bcrypt');
const saltRounds = 10;


function hashPassword(user) {
    return bcrypt.genSalt(saltRounds)
        .then(salt => bcrypt.hash(user.password, salt))
        .then(hash => {
            user.setDataValue('password', hash)
            return Promise.resolve();
        })
        .catch(err => {
            return Promise.reject(err)
        });
}


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
            email: {
                type: DataTypes.STRING,
                //cant be repeated
                unique: true
            },
            password: {
                type: DataTypes.STRING
            }
        },
        {
            hooks: {
                beforeCreate: hashPassword,
                beforeUpdate: hashPassword,
            }
        }
    )

    User.prototype.comparePassword = function (password) {
        console.log(password, this.password)
        return bcrypt.compare(password, this.password);
    }

    return User
}