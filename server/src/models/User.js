
const bcrypt = require('bcrypt');


function hashPassword(user) {
    const SALT_FACTOR = 10

    if (!user.changed('password')) {
        return;
    }
    return bcrypt
        .genSalt(SALT_FACTOR)
        .then(salt => bcrypt.hash(user.password, salt))
        .then(hash => {
            user.setDataValue('password', hash)
        })
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
                beforeSave: hashPassword
            }
        }
    )

    User.prototype.comparePassword = function (password) {
        return bcrypt.compare(password, this.password);
    }

    return User
}