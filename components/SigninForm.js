import axios from "axios";
import { useState } from "react";

export default function SigninForm() {
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState("");
  const [togglePass, setTogglePass] = useState(false);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setAccount({
      ...account,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setMessage('Please wait...')
    setMessageStyle('text-white italic mt-2')
    
    try {
      const result = await axios.post("/api/accounts/login", account)

      if (result.data.success) {
        setMessage(result.data.message)
        setMessageStyle("text-green-600 italic mt-2")
      } else {
        setMessage(result.data.message)
        setMessageStyle("text-red-400 italic mt-2")
      }

    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className={messageStyle}>{message}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <label className="font-bold text-white text-sm" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="w-full border p-2 rounded-md"
            type="text"
            id="email"
            name="email"
            placeholder="example@email.com"
            required
            maxLength={32}
            onChange={handleChange}
          />
        </div>
        <div className="my-2">
          <label className="font-bold text-white text-sm" htmlFor="email">
            Password
          </label>
          <br />
          <input
            className="w-full border p-2 rounded-md"
            type={togglePass ? "text" : "password"}
            id="password"
            name="password"
            placeholder="password"
            required
            maxLength={32}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center mt-3.5 mb-7">
          <input
            type="checkbox"
            name="showpass"
            id="showpass"
            className="ml-1"
            onChange={() => setTogglePass(!togglePass)}
          />
          <label className="text-white ml-2 mb-0.5">Show password</label>
        </div>
        <div className="my-5">
          <button 
            type="submit"
            className="w-full bg-blue-400 font-bold text-white px-3 py-2 rounded-full hover:bg-blue-700"
          >
            Signin
          </button>
        </div>
      </form>
    </>
  )
}
