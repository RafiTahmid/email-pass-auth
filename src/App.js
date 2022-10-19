import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Components/layout/Main";
import LoginBS from "./Components/LoginBS";
import RegisterReactBs from "./Components/RegisterReactBs";
// import { getAuth } from "firebase/auth";
// import app from "./firebase/firebase.init";

// const auth = getAuth(app);

// const handleRegister = (event) => {
//   event.preventDefault();
//   const email = event.target.email.value;
//   const password = event.target.password.value;
//   console.log(email, password);
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main>0</Main>,
    children: [
      {
        path: "/",
        element: <RegisterReactBs></RegisterReactBs>,
      },
      {
        path: "/register",
        element: <RegisterReactBs></RegisterReactBs>,
      },
      {
        path: "/login",
        element: <LoginBS></LoginBS>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      {/* <RegisterReactBs></RegisterReactBs> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
