import { useContext, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { FireBaseContext } from "./context/FireBaseContext";

function App() {
  const { trackAuthChange, user } = useContext(FireBaseContext);


  useEffect(() => {
    trackAuthChange();
  }, []);

  

  return (
    <div className="bg-bgBlack flex flex-col min-h-screen ">
      <Navbar />

      <main className="flex-grow mt-20">
        <LandingPage />
      </main>

      <Footer />
    </div>
  );
}

export default App;
