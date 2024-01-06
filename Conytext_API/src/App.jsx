import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Content/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <p>React With Coffee and Dark Chocolate</p>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
