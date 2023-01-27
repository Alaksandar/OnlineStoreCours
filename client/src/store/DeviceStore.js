import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._baskets = {}
        this._basketDevices = []
    
        this._selectedType = {}
        this._selectedBrand = {}
        this._selectedDevice = {}

        this._page = 1
        this._totalCount = 0
        this._limit = 3

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
    setBasket(basket){
        this._basket = basket
    }
    setBasketDevices(id) {
        this._basketDevices = [...this._basketDevices, id]
    }
    
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setSelectedDevice(device) {
        this._selectedDevice = device
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }
    setLimit(limit) {
        this._limit = limit
    }

    // computed fns: get vars from state, are called if var changes
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get basket() {
        return this._baskets
    }
    get basketDevices() {
        return this._basketDevices
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
    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }
    get limit() {
        return this._limit
    }
}
