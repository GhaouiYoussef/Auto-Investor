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
    subject: 'Confirmer votre compte', // Subject line
    html:`
    <p>Please click the following link to verify your email:</p>
    <a href="http://localhost:3001/verify?token=${emailToken}">Verify Email</a>` ,
});
console.log("Email sent Successfully");
}catch(error){
console.log("Email not sent");
console.log(error)
}
}