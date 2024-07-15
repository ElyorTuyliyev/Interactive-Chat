import React from "react";

function SingIN() {
  return (
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

        <button>Sign up</button>
      </form>
    </div>
  );
}

export default SingIN;
