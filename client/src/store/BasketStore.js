import { makeAutoObservable } from 'mobx'

export default class BasketStore {
    constructor() {
        this._basketDevices = []

        makeAutoObservable(this)
    }

    // actions - fns wich change state:
        setBasketDevices(id) {
            this._basketDevices = [...this._basketDevices, id]
    }

    // computed fns: get vars from state, is called if var changes
    get basketDevices() {
        return this._basketDevices
    }
}
