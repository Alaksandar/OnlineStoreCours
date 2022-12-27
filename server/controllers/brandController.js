const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {

    async create(req, res, next) {
        const {name} = req.body
        const existed = await Brand.findOne({where: {name}})
        if (existed) {
            return next(ApiError.badRequest('Brand with such name already exists'))
        }
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()
