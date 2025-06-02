import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Papers from "./pages/Papers";
import CurrentlyBuilding from "./pages/CurrentlyBuilding";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/currently-building" element={<CurrentlyBuilding />} />
      </Routes>
    </Layout>
  );
}
