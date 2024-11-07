import "./App.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import ProjectsList from "./pages/ProjectsList";

import { useEffect, useRef } from "react";

function App() {
  const hasAlerted = useRef(false);

  useEffect(() => {
    if (!hasAlerted.current) {
      alert(
        "For the best experience of our awesome content, we recommend visiting our site on a desktop screen."
      );
      hasAlerted.current = true;
    }
  }, []);

  return (
    <>
      <Header />
      <ProjectsList />
      <Footer />
    </>
  );
}

export default App;
