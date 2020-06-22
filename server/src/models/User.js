module.exports = (sequelize, DataTypes) =>
    sequelize.define('User', {
        email: {
             type: DataTypes.STRING,
            //cant be repeated
            unique: true
        },
        password : {
            type: DataTypes.STRING
        }
    })
