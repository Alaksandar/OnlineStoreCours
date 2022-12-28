import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Fridges'},
            {id: 1, name: 'Smartphones'},
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 1, name: 'Samsung'},
        ]
        this._devices = [
            {id: 1, name: "iPhone 12 mini 256GB", price: 4000, rating: 5, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
            {id: 2, name: "iPhone 12 mini 128GB", price: 3500, rating: 5, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
            {id: 3, name: "iPhone 12 mini 64GB", price: 3000, rating: 5, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
            {id: 4, name: "iPhone 12 mini", price: 2500, rating: 5, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
        ]

        makeAutoObservable(this)
    }

    // actions - fns wich change state:
    setTypes(types) {
        this._types = types
    }

    setTypes(brands) {
        this._brands = brands
    }

    setTypes(devices) {
        this._devices = devices
    }

    // computed fns: get vars from state, is called if var changes
    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}