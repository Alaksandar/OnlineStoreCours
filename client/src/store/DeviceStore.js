import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Fridges'},
            {id: 2, name: 'Smartphones'},
            {id: 3, name: 'Headphones'},
            {id: 4, name: 'Laptops'},
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'Lenowo'},
            {id: 4, name: 'Xiaomi'},
            {id: 5, name: 'Motorolla'}
        ]
        this._devices = [
            {id: 1, name: "iPhone 12 mini 256GB", price: 4000, rating: 5, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
            {id: 2, name: "iPhone 12 mini 128GB", price: 3500, rating: 5, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
            {id: 3, name: "iPhone 12 mini 64GB", price: 3000, rating: 2, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
            {id: 4, name: "iPhone 12 mini", price: 2500, rating: 3, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
            {id: 5, name: "iPhone 12v mini 256GB", price: 4000, rating: 5, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
            {id: 6, name: "iPhone 12b mini 128GB", price: 3500, rating: 4, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
            {id: 7, name: "iPhone 12 nmini 64GB", price: 3000, rating: 2, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
            {id: 8, name: "iPhone 12m mini", price: 2500, rating: 1, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
            {id: 9, name: "iPhone 12, mini 256GB", price: 4000, rating: 4, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
            {id: 10, name: "iPhone 12j mini 128GB", price: 3500, rating: 2, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
            {id: 11, name: "iPhone 12h mini 64GB", price: 3000, rating: 0, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
            {id: 12, name: "iPhone 12t mini", price: 2500, rating: 0, img: "https://www.telepolis.pl/images/katalog/Apple/Apple_iPhone_12_mini/apple-iphone-12-mini-5.jpg"},
        ]

        this._selectedType = {}
        this._selectedBrand = {}
        this._selectedDevice = {}

        makeAutoObservable(this)
    }

    // actions - fns wich change state:
    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    setSelectedDevice(device) {
        this._selectedDevice = device
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

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get selectedDevice() {
        return this._selectedDevice
    }
}
