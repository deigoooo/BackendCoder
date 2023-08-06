import fs from 'fs'

const users = []

const createNewUser = async(user) => {
    user.id = users.length === 0 ? 1 : users[users.length-1].id + 1
    users.push(user)
    await fs.promises.writeFile('./users.json', JSON.stringify(users, null, '\t'))
}

createNewUser({ name: 'Alex', last_name: 'Marin', age: 46 })
createNewUser({ name: 'Shakira', last_name: '', age: 44 })
createNewUser({ name: 'Pique', last_name: '', age: 34 })

console.log(users)

