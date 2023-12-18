import logger from "../logger.js"

const auth = (req, res, next) => {
    const user = req.query.user
    if (user !== 'admin') {
        logger.error(`Usuario ${user} intentó acceder a la base de datos`)
        return res.send({ status: 'error', error: 'Not authorized' })
    }
    next()
}

export default auth