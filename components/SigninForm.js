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

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setMessage(account.email)
    setMessageStyle("italic text-green-100")
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
