import {fileURLToPath} from 'url'
import { dirname } from 'path'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import passport from 'passport'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export const JWT_PRIVATE_KEY = 'secret'
export const JWT_COOKIE_NAME = 'myCookie'

export default __dirname

export const createHash = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

export const isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password)
}

export const generateToken = user => jwt.sign({ user }, JWT_PRIVATE_KEY, { expiresIn: '24h' })

export const extractCookie = req => (req && req.cookies) ? req.cookies[JWT_COOKIE_NAME] : null
// export const extractCookie = req => (req && req.cookies) ?? req.cookies[JWT_COOKIE_NAME]

export const passportCall = strategy => {
    return async (req, res, next) => {
        passport.authenticate(strategy, function(err, user, info) {
            if (err) return next(err)
            if (!user) return res.status(401).render('errors/base', {error: 'No tengo token!' })
            req.user = user
            next()
        })(req, res, next)
    }
}

export const handlePolicies = policies => (req, res, next) => {
    const user = req.user.user || null
    if (!policies.includes(user.role.toUpperCase())) {
        return res.status(403).render('errors/base', { error: 'No autorizado!'})
    }
    return next()
}
