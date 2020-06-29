const fs = require('fs')
const path = require('path')
const {Sequelize} = require('sequelize')
const config = require('../config/config')
const db = {}


const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)




fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
     .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        console.log("second model", model)
         console.log(__dirname, file)
         db[model.name] = model;
     })


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db

