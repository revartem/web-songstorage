module.exports = {
    port:process.env.PORT || 8081,
    db: {
        database:  process.env.DB_NAME || 'songstorage',
        user: process.env.DB_USER || 'songstorage',
        password: process.env.DB_PASSWORD || 'songstorage',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'sqlite',
            storage: './songstorage.sqlite'

        }
    }

}