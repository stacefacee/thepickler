module.exports ={
  submitEmail: (req, res) => {
    const transporter = req.app.get('transporter')
    const {email, name, message} = req.body
    const mailOptions = {
      from: email,
      to: "yourmomma@yahoo.com",
      subject: "contact us",
      text: message
    }
    transporter.sendMail(mailOptions, (error, data) => {
      if(!error){
        res.sendStatus(200)
      } else{
        console.log(error)
        res.sendStatus(500)
      }
      
    })
  }
}