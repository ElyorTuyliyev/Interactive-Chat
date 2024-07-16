import SingIN from "./Components/SingUp";
import SingUp from "./Components/SingIn";
import StyledAuth from "./SingInSingUp.style";

const SinInSingUp = () => {
  return (
    <StyledAuth>
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <SingIN />
        <SingUp />
      </div>
    </StyledAuth>
  );
};

export default SinInSingUp;
