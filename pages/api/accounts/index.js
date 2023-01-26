import { pool } from "../../../config/db"


export default function handler(req, res) {
    switch(req.method) {
        case 'POST':
            return saveAccount(req, res)
    }
}

const saveAccount = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const [checkEmail] = await pool.query("SELECT email FROM accounts WHERE email=?", email)

        if (checkEmail.length > 0) {
            return res.status(200).json({success: false, message: "Email already exist! "})
        } else {
            await pool.query("INSERT INTO accounts SET ?", {
                name, email, password
            })

            return res.status(200).json({success: true, message: "Sign up successful!"})
        }

    } catch (error) {
        console.log(error.message)
    }
}