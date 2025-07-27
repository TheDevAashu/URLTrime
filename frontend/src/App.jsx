import { useContext, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { FireBaseContext } from "./context/FireBaseContext";
import {  Outlet } from "react-router-dom";
function App() {
  const { trackAuthChange, user } = useContext(FireBaseContext);
console.log(user);

  useEffect(() => {
    trackAuthChange();
  }, []);

  return (
    <div className="bg-bgBlack flex flex-col min-h-screen font-mono">
      <Navbar />
      <main className="flex-grow mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
