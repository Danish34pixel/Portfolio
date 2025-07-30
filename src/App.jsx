import { Routes, Route } from "react-router-dom";
import Projects from "./Component/Projects";
import Home from "./Component/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
