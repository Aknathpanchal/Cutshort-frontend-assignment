import "./App.css";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import Logo from "./Components/Logo/Logo";
import Steper from "./Components/Steper/Steper.jsx";
function App() {
  return (
    <div className="day">
      <Logo />
      <Steper />
      <AllRoutes />
    </div>
  );
}

export default App;
