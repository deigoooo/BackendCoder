// import UsersDaoArray from "../dao/usersDaoArray.js";
// import UsersDaoFile from "../dao/usersDaoFile.js"
// import UserDAODB from "../dao/usersDaoMongo.js"
import PersistenceFactory from "../dao/persistenceFactory.js"

export default class UsersService {
    constructor() {
        // this.usersDao = new UsersDaoArray()
        // this.usersDao = new UsersDaoFile()
        // this.usersDao = new UserDAODB()
        this.usersDao
        this.init()
    }

    init = async() => {
        this.usersDao = await PersistenceFactory.getPersistence()
    }

    getUsers = async() => {
        return await this.usersDao.getAll()
    }

    addUser = async(user) => {
        return await this.usersDao.save(user)
    }
}