import crypto from 'crypto'

const BD = []

class UserManager {
    getUsers = () => BD
    insertUser = user => {
        const salt = crypto.randomBytes(128).toString('base64')
        user.password = crypto.createHmac('sha256', salt).update(user.password).digest('hex')
        BD.push(user)
    }
}

const manager = new UserManager()
manager.insertUser({
    name: 'Alex',
    lastname: 'Marin',
    username: 'alexmarinmendez',
    password: 'secret'
})
manager.insertUser({
    name: 'Alvaro',
    lastname: 'Estanislao',
    username: 'alvaroe',
    password: 'coder'
})

console.log(manager.getUsers())