const express = require('express')
const fs = require('fs')

const db = require('./../mockdata/db.json')

const categoryRouter = express.Router()

categoryRouter.get('/', (req, res) => {
    res.json({
        'message': 'Category list',
        'data': db['categories']
    });
})

categoryRouter.post('/', (req, res) => {
    const newCategory = req.body
    db['categories'].push(newCategory)

    fs.writeFileSync(__dirname + '/../mockdata/db.json',JSON.stringify(db))

    res.json({
        'message': 'Store category',
        'data': req.body
    });
})


module.exports = categoryRouter