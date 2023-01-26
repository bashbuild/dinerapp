import { useState } from "react";
import axios from 'axios'

export default function SignupForm() {
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState("");
  const [togglePass, setTogglePass] = useState(false);
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = ({ target: { name, value } }) => {
    if (name === "name") {
        setAccount({
          ...account,
          [name]: value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
            letter.toUpperCase()
          ),
        });
    } else {
        setAccount({
            ...account,
            [name]: value
        })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await axios.post("/api/accounts", account)

    if (result.data.success) {
        setMessage(result.data.message)
        setMessageStyle("text-green-200 italic")
    } else {
        setMessage(result.data.message)
        setMessageStyle("text-red-400 italic")
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <h1 className={messageStyle}>{message}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <label className="font-bold text-white text-sm" htmlFor="email">
            Name
          </label>
          <br />
          <input
            className="w-full border p-2 rounded-md"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            maxLength={32}
            onChange={handleChange}
          />
        </div>
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
          <button className="w-full bg-orange-400 font-bold text-white px-3 py-2 rounded-full hover:bg-orange-700">
            Signup
          </button>
        </div>
      </form>
    </>
  );
}
