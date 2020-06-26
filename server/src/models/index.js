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


// const modeli = [
//     require('./User')(sequelize, Sequelize),
// ]
//
// modeli.forEach(function(file) {
//     var model = sequelize.import(path.join(__dirname, file));
//     console.log("first model ", model)
//     console.log(file, __dirname)
//     // db[model.name] = model;
// })

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


// files.filter(e => e !== 'index.js')
//     .forEach((file) => {
//         console.log('File', file)
//         const model =  sequelize.import(path.join(__dirname, file))
//         console.log(model)
//
//         // db[model.name] = model
//     })

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db

