const express = require('express')

module.exports = function(server) {
    //API ROUTES
    const router = express.Router()
    server.use('/api', router)

    //TODO SERVICES
    const todoService = require('../api/todoService')
    todoService.register(router, '/todos')
}