import "./App.css";
import Message from "./Components/Message";
import SinInSingUp from "./Components/SingIn_SingUp";
import Container from "./container";

function App() {
  return (
    <div className="App">
      <Container>
        <Message messageText={"birinchi messege ketdi "} sendData={"12:01"} />
        <Message messageText={"birinchi messege ketdi "} sendData={"12:01"} />
      </Container>
    </div>
  );
}

export default App;
