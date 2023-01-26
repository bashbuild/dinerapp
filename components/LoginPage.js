import { useState } from "react";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

export default function LoginPage() {
  const [signInOrUp, setSignInOrUp] = useState(true);

  return (
    <>
      <div className="bg-white rounded-tl-3xl rounded-br-3xl">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-center p-5">
            <div>
              <div className="text-center">
                <h1 className="text-2xl font-bold">WELCOME TO</h1>
                <h1 className="text-4xl font-bold">DINER APP</h1>
              </div>
              <div className="flex justify-center">
                <img src="images/waiter.png" />
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => setSignInOrUp(!signInOrUp)}
                  className={signInOrUp ? "btnSignup hover:bg-orange-700" : "btnSignin hover:bg-blue-700"}
                >
                  {signInOrUp ? "Sign Up" : "Sign In"}
                </button>
              </div>
            </div>
          </div>
          <div className={signInOrUp ? "bg-blue-200 p-5 rounded-br-3xl" : "bg-orange-200 p-5 rounded-br-3xl"}>
            <div className="flex justify-center">
              <h1 className="text-white font-bold text-2xl">{signInOrUp ? "Sign In" : "Sign Up"}</h1>
            </div>
            <div className="flex justify-center">
              <h1 className="italic text-green-100">Message</h1>
            </div>
            <div>{signInOrUp ? <SigninForm /> : <SignupForm />}</div>
          </div>
        </div>
      </div>
    </>
  );
}
