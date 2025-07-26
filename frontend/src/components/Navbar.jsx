import React, { useContext, useState } from "react";
import { FireBaseContext } from "../context/FireBaseContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { signUpWithGoogle, user, logout } = useContext(FireBaseContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-0 right-0 z-10 ">
      <div className="flex min-h-20 w-[92%] m-auto border-[1px] backdrop-blur-lg border-neutral-800 rounded-3xl items-center justify-between px-20 ">
        <div>
          <Link className="text-white text-2xl" to="/">
            URLTrim
          </Link>
        </div>
        <ion-icon
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          name={isMenuOpen ? "close-outline" : "menu-outline"}
          className="pointer text-white  text-2xl md:hidden"
        ></ion-icon>
        <div>
          <ul
            className={`flex flex-col fixed top-[80px] text-white backdrop-blur-lg  items-center  h-[40vh] w-[100%] md:flex-row md:static md:h-auto ${
              isMenuOpen ? "left-0" : "left-[-100%]"
            }`}
          >
            {user ? (
              <li className="px-1 ">
                <Link className=" py-2 px-2 rounded-3xl   hover:text-gray-300" to="/dashboard">
                  {" "}
                  DashBoard
                </Link>
              </li>
            ) : null}

            <li className="px-1 ">
              <a className="py-2 px-4 rounded-3xl  hover:text-gray-300" href="#">
                Contact Us
              </a>
            </li>

            {!user ? (
              <>
                <li className="px-1">
                  <button
                    onClick={signUpWithGoogle}
                    className="bg-black text-white flex items-center gap-2 border border-white/20 px-6 py-2 sm:col-span-2 rounded-xl  hover:bg-lightGrey hover:cursor-pointer"
                  >
                    Continue With Google
                    <img
                      className="h-5 object-cover"
                      src="./image/google.png"
                      alt="err"
                    ></img>
                  </button>
                </li>
              </>
            ) : (
              <li className="px-1 ">
                <button
                  onClick={logout}
                  className="bg-black backdrop-blur-lg border border-white/20 text-white px-6 py-2 rounded-xl hover:bg-lightGrey hover:cursor-pointer"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
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
