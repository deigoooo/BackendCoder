import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
import Mailgen from 'mailgen'

const getbill = (req, res) => {
    const destinatario = req.body.destinatario
    const numeroPedido = req.body.pedido
    let config = {
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        }
    }
    let transporter = nodemailer.createTransport(config)
    let Mailgenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Coder Shop',
            link: 'http://www.coderhouse.com'
        }
    })
    let response = {
        body: {
            intro: "Your bill has arrived!",
            table: {
                data: [
                    {
                        item: 'Notebook',
                        description: 'A simple notebook',
                        price: '$1900'
                    }
                ]
            },
            outro: 'Looking forward to do more business'
        }
    }
    let mail = Mailgenerator.generate(response)

    let message = {
        from: 'Dpto Ventas - Coder Shop <codershop@coderhouse.com>',
        to: destinatario,
        subject: `Compra ${numeroPedido} realizada con éxito`,
        html: mail
    }
    transporter.sendMail(message)
        .then(() => {
            return res.status(200).json({ message: 'Yo have received an email' })
        })
        .catch(err => res.status(500).json({ err }))
}

export default getbill