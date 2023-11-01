import jwt from 'jsonwebtoken'

//helper function
export const generateToken = (user) => jwt.sign({ user }, 'secret', { expiresIn: '24h' })

//helper function
export const authToken = (req, res, next) => {
    // const token = req.headers.auth
    const token = req.signedCookies['jwt-coder']
    if (!token) return res.status(401).send({ error: 'Not Auth' })
    jwt.verify(token, 'secret', (error, credentials) => {
        if (error) return res.status(403).send({ error: 'Not Authorized' })
        req.user = credentials.user
        next()
    })
}