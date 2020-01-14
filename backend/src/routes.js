const {Router} = require("express")
const axios = require("axios")
const routes = Router()

DevControllers = require("./controllers/DevController")
SearchController = require("./controllers/SearchController")
//query params: request.query (parmetros da url)
//Route params: request.params (identifica um recurso para deletar ou alterar)
//Body:
routes.get('/devs', DevControllers.index)
routes.get('/devs/:id', DevControllers.show)
routes.post('/devs', DevControllers.store)
routes.put('/devs/:id', DevControllers.update)
routes.delete('/devs/:id', DevControllers.delete)
routes.get('/search', SearchController.index)

module.exports = routes 