import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Form from "./component/Form";
import WeatherCard from "./component/WeatherCards";
import {useSelector} from "react-redux";
import ThemeToggle from "./component/ThemeToggle";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme ? "App dark" : "App light"}>
      <ThemeToggle />
      <Form />
      <WeatherCard />
    </div>
  );
}

export default App;
