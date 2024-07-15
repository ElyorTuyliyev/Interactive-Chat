import React from "react";
import SingUpSinIn from "./SingInSingUp.style";
import SingIN from "./Components/Sing.in";
import SingUp from "./Components/Sing.up";

const SinInSingUp = () => {
  return (
    <SingUpSinIn>
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <SingIN />
        <SingUp />
      </div>
    </SingUpSinIn>
  );
};

export default SinInSingUp;
