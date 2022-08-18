
const SG_API_KEY='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'
const TO_EMAIL= 'anurag.shukla@ecinfosolutions.com'
const FROM_EMAIL='anuragshukla8004@gmail.com'


// require("dotenv").config();
const sgMail = require("@sendgrid/mail");

// const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;
sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {
  const { email, name, companyName,  mobileNum, message } = req.body;
  const msg = {
    to: TO_EMAIL, // Change to your recipient
    from: FROM_EMAIL, // Change to your verified sender
    subject: "Contact",
    html: `<p><strong>name: </strong>${email}</p>
    <p><strong>email: </strong>${name}</p>    
    <p><strong>message: </strong>${companyName}</p>
    <p><strong>message: </strong>${mobileNum}</p>
    <p><strong>message: </strong>${message}</p>`,
  };
  await sgMail.send(msg);
  console.log("email sent");
  res.status(200).json({ success: true });
}