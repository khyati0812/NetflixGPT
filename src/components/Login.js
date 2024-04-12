import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { addUser } from "../utils/userSlice";
import { checkValidData, checkValidName } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Login = () => {
  const [isSign, setIsSign] = useState(true);
  const [error, setError] = useState(null);
  const [error2, setError2] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSign = () => {
    setIsSign(!isSign);
  };
  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(name?.current?.value);
    if (!isSign) {
      const nameCheck = checkValidName(
        email.current.value,
        password.current.value,
        name.current.value
      );
      setError2(nameCheck);
      if (nameCheck) return;
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnwImoD5h7MGaqrkqn-HrjTIkmvqG22FgAUgLWY8Lzw&s",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, password, displayName, photoURL } =
                auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setError2(error.message);
            });
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError2(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      const message = checkValidData(
        email.current.value,
        password.current.value
      );
      setError(message);
      if (message) return;

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    }
    // console.log(message);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="absolute w-3/6 p-12 bg-black bg-opacity-60 my-12 mx-auto right-0 left-0 top-32 text-white rounded-lg"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSign ? "Sign In" : "Sign up"}
          </h1>
          {!isSign && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 w-full text-sm bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 w-full text-sm bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full text-sm bg-gray-700"
          />
          {/* <p className="py-2 text-lg text-red-600">
            {isSign ? { error } : { error2 }}
          </p> */}
          {!isSign && <p className="py-2 text-lg text-red-600">{error2}</p>}
          {isSign && <p className="py-2 text-lg text-red-600">{error}</p>}
          <button
            className="p-2 my-2 w-full bg-red-700 rounded-lg text-sm"
            onClick={handleButtonClick}
          >
            {isSign ? "Sign In" : "Sign up"}
          </button>
          <p
            className="py-4 font-serif text-lg cursor-pointer"
            onClick={toggleSign}
          >
            {isSign
              ? "New to Netflix?Sign Up Now!"
              : "Already Registered?Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
