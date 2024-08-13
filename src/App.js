import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Sublink from "./Component/Sublink/Sublink";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dinnings from "./Component/Dinnings";
import ExperienceandEvent from "./Component/ExperienceandEvent";
import Featured from "./Component/Featured/Featured";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Sublink />
        <Featured />
        <Routes>
          <Route path="/" element={<Dinnings />} />
          <Route path="/ExperienceandEvent" element={<ExperienceandEvent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
