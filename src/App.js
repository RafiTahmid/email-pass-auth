import { getAuth } from "firebase/auth";
import "./App.css";
import RegisterReactBs from "./Components/RegisterReactBs";
import app from "./firebase/firebase.init";

const auth = getAuth(app);

const handleRegister = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email, password);
};

function App() {
  return (
    <div className="">
      <RegisterReactBs></RegisterReactBs>
    </div>
  );
}

export default App;
