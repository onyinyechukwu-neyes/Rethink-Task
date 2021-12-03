import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Pages/Home/components/Header";
const Services = React.lazy(() => import("./Pages/Services"));
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/AboutUs"));
const Login = React.lazy(() => import("./Pages/Forms/Login"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
