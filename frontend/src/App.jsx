import { useContext, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { FireBaseContext } from "./context/FireBaseContext";
import { Link, Outlet } from "react-router-dom";
function App() {
  const { trackAuthChange, user } = useContext(FireBaseContext);
console.log(user);

  useEffect(() => {
    trackAuthChange();
  }, []);

  return (
    <div className="bg-bgBlack flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
