import React, { useContext, useState } from "react";
import { FireBaseContext } from "../context/FireBaseContext";

const Navbar = () => {
  const { signUpWithGoogle, user, logout } = useContext(FireBaseContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <nav className="fixed top-5 left-0 right-0 z-10 ">
      <div className="flex min-h-20 w-[92%] m-auto border-[1px] backdrop-blur-lg border-neutral-800 rounded-3xl items-center justify-between px-20 ">
        <div>
          <p className="text-white text-2xl">URLTrim</p>
        </div>
        <ion-icon
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          name={isMenuOpen ? "close-outline" : "menu-outline"}
          className="pointer text-white  text-2xl md:hidden"
        ></ion-icon>

        <ul
          className={`flex flex-col fixed top-[80px] text-white backdrop-blur-lg  items-center  h-[40vh] w-[100%] md:flex-row md:static md:h-auto ${
            isMenuOpen ? "left-0" : "left-[-100%]"
          }`}
        >
          <li className="px-1 my-2">
            <a
              className=" py-2 px-2 rounded-3xl transition-all ease-out delay-300  hover:bg-amber-300"
              href="#"
            >
              {" "}
              DashBoard
            </a>
          </li>
          <li className="px-1 my-2">
            <a
              className="py-2 px-2 rounded-3xl transition-all ease-out delay-300  hover:bg-amber-300"
              href="#"
            >
              Contact Us
            </a>
          </li>

          {!user ? (
            <>
              <li className="px-1 my-2">
                <a className="py-2 px-2" href="#">
                  <button
                    onClick={signUpWithGoogle}
                    className="bg-black text-white flex items-center gap-2 border border-white/20 px-6 py-2 sm:col-span-2 rounded-xl  hover:bg-lightGrey hover:cursor-pointer"
                  >
                    Continue With Google 
                    <img  className="h-5 object-cover" src="./image/google.png" alt="err"></img>
                  </button>
                </a>
              </li>
              
            </>
          ) : (
            <li className="px-1 my-2">
              <a className="py-2 px-2 " href="#">
                <button onClick={logout} className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-2 rounded-xl">
                  Logout
                </button>
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// <div className="flex gap-4 items-center">
//           <button className="bg-darkGrey text-white px-6 py-2 sm:col-span-2 rounded-xl  hover:bg-lightGrey hover:cursor-pointer">
//             Sign Up
//           </button>
//           <button className="bg-darkGrey text-white px-6 py-2 sm:col-span-2 rounded-xl  hover:bg-lightGrey hover:cursor-pointer">
//             Sign In
//           </button>
//           <ion-icon className="sm:hidden" name="menu-outline"></ion-icon>
//         </div>
