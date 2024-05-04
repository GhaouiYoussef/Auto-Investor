const nodemailer=require('nodemailer')

module.exports= async(email,emailToken) =>{
 try {   
   const transporter = nodemailer.createTransport({
       host:'smtp.gmail.com',
       port:465,
       secure: true,
       auth:{
        user:'khaliloutr4@gmail.com',
        pass:"bdgqrtntmzqlcpjh",
       }
   })

   await transporter.sendMail({
    from: "khaliloutr4@gmail.com", // Sender address
    to: email, // Recipient address
    subject: 'reset your password', // Subject line
    html:`
    <p>Please click the following link to reset your password:</p>
    <a href="http://localhost:3000/Page-Login?token=${emailToken}">reset password</a>` ,
});
console.log("Email sent Successfully");
}catch(error){
console.log("Email not sent");
console.log(error)
}
}