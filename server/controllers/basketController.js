const {Basket, BasketDevice, Device} = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {

    async addBasketDevice(req, res, next) {
        try {
            const basket = await Basket.findOne({where: {userId: req.user.id}})
            const basketDevice = await BasketDevice.create({deviceId: req.body.deviceId, basketId: basket.id})
            return res.json(basketDevice)
        } catch (error) {
            console.log(error);
            next(ApiError.badRequest(error.message))
        }
    }

    async getBasket(req, res) {
        const basket = await Basket.findOne({
            where: {userId: req.user.id},
        })
        const basketDevices = await BasketDevice.findAll({
            where: {basketId: basket.id}
        })
        return res.json(basketDevices)
    }
}

module.exports = new BasketController()
