import React from "react";

function SingIN() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    fetch("http://localhost:9000/auth/sign-up", {
      method: "POST",
      headers: {
        "CONTENT-type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    })
      .then((res) => res.json())
      .then(console.log)
      .catch((err) => console.log(err));
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label for="chk" aria-hidden="true">
          Sign up
        </label>
        <input name="username" type="text" placeholder="First Name" required />
        <input
          name="password"
          type="password"
          id="password"
          placeholder="Password"
          required
        />

        <button>Sign up</button>
      </form>
    </div>
  );
}

export default SingIN;
