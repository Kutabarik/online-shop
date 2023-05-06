import logo from './logo.svg';
import './App.scss';
import MainLayout from "./layout/MainLayout";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route  path="" element={<Home />}/>
      </Route>
    </Routes>
  );
}

export default App;
