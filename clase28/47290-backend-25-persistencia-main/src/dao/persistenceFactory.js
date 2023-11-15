import config from "../config/config.js";

export default class PersistenceFactory {
    static getPersistence = async() => {
        switch (config.app.persistence) {
            case 'ARRAY':
                let { default: UsersDaoArray } = await import('./usersDaoArray.js')
                return new UsersDaoArray
            case 'FILE':
                let { default: UsersDaoFile } = await import('./usersDaoFile.js')
                return new UsersDaoFile
            case 'MONGO':
                let { default: UserDAODB } = await import('./usersDaoMongo.js')
                return new UserDAODB
            default:
                break;
        }
    }
}