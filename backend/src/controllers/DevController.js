const axios = require("axios")
const Dev = require("../models/Dev")
const parseStringAsArray = require("../utils/ParseStringAsArray")



module.exports = {
    async index(request, response){
        const devs = await Dev.find()
        return response.json(devs)
    },

    async show(request, response){
        const dev = await Dev.findById(request.params.id)
        return response.json({dev})
    },
    
    async store(request, response) {
    const {github_username, techs, latitude, longitude} = request.body
    let dev = await Dev.findOne({github_username})
    if (!dev){
        const resp = await axios.get(`https://api.github.com/users/${github_username}`)
        const {name = login,bio,avatar_url} =resp.data
        const techArray = parseStringAsArray(techs)
        const location = {
            type:'Point',
            coordinates: [longitude,latitude],
        }
        dev  = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techArray,
            location
        })
        
    }
    return response.json(dev)
    },
    async update(request, response) {
        const techArray = parseStringAsArray(techs)
        const devs = await Dev.findByIdAndUpdate(request.params.id, request.body, {new: true})
        return response.json(devs)
    },
    async delete(request, response) {
        const devs = await Dev.findByIdAndRemove(request.params.id)
        return response.send()
    }
}
