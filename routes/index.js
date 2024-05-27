const routes = app => {
    app.use('/api/categories', require('./category'))
}

module.exports = routes