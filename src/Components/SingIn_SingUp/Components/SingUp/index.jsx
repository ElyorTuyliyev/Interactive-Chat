import React, { useEffect } from "react";
// import { SIGN_up } from "./api";
import { gql, useMutation } from "@apollo/client";
const SIGN_up = gql`
  mutation signUp($userName: String!, $password: String!) {
    signUp(name: $userName, password: $password) {
      _id
      name
      password
    }
  }
`;

function SingIN() {
  const [signUp, { data, loading, error }] = useMutation(SIGN_up);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userName = e.target?.userName?.value;
    const password = e.target?.password?.value;

    if (userName && password) {
      await signUp({ variables: { userName, password } });
    }

    console.log(data);
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label for="chk" aria-hidden="true">
          Sign up
          {loading ? "loading..." : ""}
        </label>
        <input name="userName" type="text" placeholder="First Name" required />
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
