import React, { useEffect } from "react";
// import { SIGN_up } from "./api";
import { gql, useMutation } from "@apollo/client";
const SIGN_up = gql`
  mutation SignUp($userName: String!, $password: String!) {
    signUp(name: $userName, password: $password) {
      _id
      name
      password
    }
  }
`;

function SingIN() {
  const [signUp, { data, loading, error }] = useMutation(SIGN_up);
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = e.target;
    signUp({ userName: username, password });
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
