import React from "react";
import SingUpSinIn from "./SingInSingUp.style";

const SinInSingUp = () => {
  return (
    <SingUpSinIn>
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <label for="chk" aria-hidden="true">
              Sign up
            </label>
            <input type="text" placeholder="First Name" required="" />
            <input type="text" placeholder="Last Name" required="" />
            <input type="email" id="email" placeholder="Email" required="" />
            <input type="number" id="number" placeholder="Number" required="" />
            <input
              type="password"
              id="password"
              placeholder="Password"
              required=""
            />

            <button type="button" onclick="sub()">
              Sign up
            </button>
          </form>
        </div>

        <div class="login">
          <label for="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required="" />
          <input type="password" placeholder="Password" required="" />
          <button>Login</button>
        </div>
      </div>
    </SingUpSinIn>
  );
};

export default SinInSingUp;
