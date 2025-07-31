import { Routes, Route } from "react-router-dom";
import Projects from "./Component/Projects";
import Home from "./Component/Home";
import Mac from "./Component/Mac";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/mac" element={<Mac />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
