const express = require('express')
const Router = express.Router()
const Route_Handlers = require('../RouteHandlers/RouteHandlers')

Router.route('/')
         .get(Route_Handlers.getAllDocs)
         .post(Route_Handlers.CreateDoc)
Router.route('/:id')
         .get(Route_Handlers.getDocById)
         .patch(Route_Handlers.UpdateDoc)
         .delete(Route_Handlers.DeleteDoc)
         
module.exports = Router         