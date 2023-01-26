export default function SignupForm() {
  return (
    <>
      <form>
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
            placeholder="name"
            required
            maxLength={32}
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
          />
        </div>
        <div className="my-2">
          <label className="font-bold text-white text-sm" htmlFor="email">
            Password
          </label>
          <br />
          <input
            className="w-full border p-2 rounded-md"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
            maxLength={32}
          />
        </div>
        <div className="flex items-center mt-3.5 mb-7">
          <input
            type="checkbox"
            name="showpass"
            id="showpass"
            className="ml-1"
          />
          <label className="text-sm text-white ml-2 mb-1">Show password</label>
        </div>
        <div className="my-5">
          <button className="w-full bg-orange-400 font-bold text-white px-3 py-2 rounded-full hover:bg-orange-700">
            Signin
          </button>
        </div>
      </form>
    </>
  );
}
