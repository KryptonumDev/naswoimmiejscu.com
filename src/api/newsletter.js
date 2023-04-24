const axios = require('axios');


export default function handler(req, res){
  res.setHeader('Access-Control-Allow-Origin', 'https://naswoimmiejscu.com/');
  if(req.method === `POST`){
    const data = {
      email: req.body.email || '',
    }
    let isError = false;
    !(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(data.email.toLowerCase()) && (isError = true);
  
    if(isError){
      res.status(422).send(req.body)
    } else {
      axios.post(`https://api.mailerlite.com/api/v2/groups/${process.env.MAILERLITE_GROUPID}/subscribers/`, data, {
        headers: {
          'Content-Type': 'application/json',
          'X-MailerLite-ApiKey': process.env.MAILERLITE_API
        }
      })
      .then(() => {
        res.status(200).json({ success: true })
      })
      .catch(() => {
        res.status(422).json({ success: false })
      });
    }
  } else {
    res.status(404).send('');
  }
}