import React from "react";

function SingUp() {
  return (
    <div class="login">
      <label for="chk" aria-hidden="true">
        Login
      </label>
      <input type="email" name="email" placeholder="Email" required="" />
      <input type="password" placeholder="Password" required="" />
      <button>Login</button>
    </div>
  );
}

export default SingUp;
