import React from "react";
import Header from "./components/template/Header";
import Home from "./components/pages/Home";
import Footer from "./components/template/Footer";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import Works from "./components/pages/Works";
import Service from "./components/pages/Services";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GithubRepos from "./components/pages/Github";


function App() {
  const [dark, updateDark] = React.useState(null);
  const ModeDark = JSON.parse(localStorage.getItem("dark"));

  React.useEffect(() => {
    if (ModeDark) {
      updateDark(ModeDark);

    }
  }, [ModeDark]);

  return (
    <>
      <Header dark={dark} updateDark={updateDark} />
      <Routes>
        <Route path={'/'} element={<Home dark={dark} updateDark={updateDark} />} />
        <Route path={'/About'} element={<About dark={dark} updateDark={updateDark} />} />
        <Route path={'/Exp'} element={<Experience dark={dark} updateDark={updateDark} />} />
        <Route path={'/Works'} element={<Works dark={dark} updateDark={updateDark} />} />
        <Route path={'/GithubRepos'} element={<GithubRepos dark={dark} updateDark={updateDark} />} />
        <Route path={'/Services'} element={<Service dark={dark} updateDark={updateDark} />} />
        
      </Routes>
      <Footer dark={dark} updateDark={updateDark} />
    </>
  );
}

export default App;
