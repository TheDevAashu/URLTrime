import { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AuthDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase

export const FireBaseContext = createContext(null);
const FireBaseApp = initializeApp(firebaseConfig);
const FireBaseAuth = getAuth(FireBaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const FireBaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const trackAuthChange = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("User Logged in");
      } else {
        console.log("NOt logged in");
      }
    });
  };

  const logout = async () => {
    try {
      await signOut(auth);

      // console.log("User signed out successfully! 👋");
      navigate("/");
      setUser(null);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  return (
    <FireBaseContext.Provider
      value={{ signUpWithGoogle, trackAuthChange, user, logout }}
    >
      {props.children}
    </FireBaseContext.Provider>
  );
};
