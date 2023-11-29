import dotenv from 'dotenv'
dotenv.config()
import twilio from 'twilio'

export const sendSMS = (req, res) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    
    const client = twilio(accountSid, authToken)
    
    client.messages
      .create({
         body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
         from: process.env.TWILIO_PHONE_NUMBER,
         to: '+51942270712'
       })
      .then(message => res.send(message));

}