import "./App.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import ProjectsList from "./pages/ProjectsList";

import { useEffect, useRef, useState } from "react";

function App() {
  const hasAlerted = useRef(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!hasAlerted.current) {
      setShowModal(true);
      hasAlerted.current = true;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-2/5 md:w-1/2 -mt-52 md:mt-0 -ml-52 md:ml-0">
            <button
              className="block ml-auto text-red-500 hover:text-gray-200 bg-gray-200 hover:bg-red-500 px-2 rounded-full"
              onClick={closeModal}
              style={{ boxShadow: "1px 1px 0px" }}
            >
              &times;
            </button>
            <div className="text-center">
              <h4>👋 Hi! I'm Ajithkumar, the developer of this webpage.</h4>
              <p>
                For the best experience,{" "}
                <span className="text-blue-500 font-semibold">
                  I recommend visiting this webpage on a desktop screen.
                </span>
              </p>
              <p>Thanks for visiting and understanding!</p>
              <p className="text-xs text-end mt-5">
                Press
                <span className="inline-block px-1 py-0.5 border border-gray-300 rounded bg-gray-200 shadow-sm font-mono mx-1">
                  Esc
                </span>
                key or
                <span
                  className="text-red-500 bg-gray-200 px-1 rounded-full mx-1"
                  style={{ boxShadow: "1px 1px 0px" }}
                >
                  &times;
                </span>
                 to close the modal.
              </p>
            </div>
          </div>
        </div>
      )}
      <Header />
      <ProjectsList />
      <Footer />
    </>
  );
}

export default App;
