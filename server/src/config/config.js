module.exports = {
    port:process.env.PORT || 8081,
    db: {
        database:  process.env.DB_NAME || 'songstorage',
        user: process.env.DB_USER || 'songstorage',
        password: process.env.DB_PASSWORD || 'songstorage',
        // hooks: {
        //     beforeCreate: process.env.BEFORE_CREATE || 'songstorage',
        //     beforeUpdate: process.env.BEFORE_UPDATE || 'songstorage',
        //     beforeSave: process.env.BEFORE_SAVE || 'songstorage'
        // },
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'sqlite',
            storage: './songstorage.sqlite'

        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secrets'
    }

}