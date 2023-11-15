import UsersService from "../services/usersService.js";
import UserDTO from "../dto/usersDTO.js";
const usersService = new UsersService()

const getUsers = async(req, res) => {
    let result = await usersService.getUsers()
    let resultDTO = result.map(user => new UserDTO(user))
    res.send(resultDTO)
}

const saveUser = async(req, res) => {
    let user = req.body
    let result = await usersService.addUser(user)
    res.send(new UserDTO(result))
}

export default { getUsers, saveUser }