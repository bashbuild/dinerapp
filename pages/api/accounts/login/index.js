import { pool } from "../../../../config/db";

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return signinAccount(req, res);
  }
}

const signinAccount = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [checkEmail] = await pool.query(
      "SELECT * FROM accounts WHERE email=?",
      email
    );

    if (checkEmail.length > 0) {
      //Check password
      if (checkEmail[0].password === password) {
        return res
        .status(200)
        .json({ success: true, message: "Password correct!" });
      } else {
        return res
          .status(200)
          .json({ success: false, message: "Invalid email/password." });
      }

    } else {
      return res
        .status(200)
        .json({ success: false, message: "Invalid email/password." });
    }
  } catch (error) {
    console.log(error.message);
  }
};
