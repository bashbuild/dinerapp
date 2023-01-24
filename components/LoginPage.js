export default function LoginPage() {
  return (
    <>
      <div className="bg-white rounded-tl-3xl rounded-br-3xl">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-5">
            <div>
                <h1 className="text-3xl font-bold">WELCOME EVERYONE!</h1>
            </div>
            <div className="flex justify-center">
              <img src="images/waiter.png" />
            </div>
            <div className="flex justify-center">
              <button className="bg-orange-400 text-white font-bold px-4 py-2 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
          <div className="bg-blue-200 p-5  rounded-br-3xl">
            <div className="flex justify-center">
              <h1 className="text-white font-bold text-2xl">Sign In</h1>
            </div>
            <div className="flex justify-center">
              <h1 className="text-white italic text-green-100">Message</h1>
            </div>
            <div>
              <form>
                <div className="my-2">
                  <label className="font-bold text-white text-sm" htmlFor="email">
                    Email
                  </label>
                  <br />
                  <input
                    className="w-full border p-2 rounded-md"
                    type='text'
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
                    type='password'
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
                        name='showpass'
                        id="showpass"
                        className="larger ml-1"
                    />
                    <label className="text-sm text-white ml-2 mb-1">Show password</label>
                </div>
                <div className="my-5">
                    <button 
                        className="w-full bg-blue-400 font-bold text-white px-3 py-2 rounded-full hover:bg-blue-700"
                    >
                        Signin
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
