import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "enter user email",
    pass: "enter generated app password ",
  },
});

app.post("/send-mail", async (req, res) => {
  const { name, email, company, department, message } = req.body;
  console.log(req.body);

  const mailOptions = {
    from: "----@gmail.com",
    to: "------@gmail.com",
    subject: `New Contact Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Company: ${company}
      Department: ${department}
      
      Message:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
