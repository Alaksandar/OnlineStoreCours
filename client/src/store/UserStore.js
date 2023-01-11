import { makeAutoObservable } from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    // actions - fns wich change state:
    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    // computed fns: get vars from state, is called if var changes
    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}
