import fs from 'fs'

const user = {
    name: 'Alex',
    last_name: 'Marin',
    age: 46
}

fs.promises.writeFile('./users.json', JSON.stringify(user))
