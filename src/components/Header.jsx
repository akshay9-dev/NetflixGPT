import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { IMAGE_URL, LOGO_URL } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe will be called when component unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GptSearch
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row items-center justify-between">
      <img className="w-32 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
      {user && (
        <div className=" flex items-center p-2 gap-2 md:gap-4">
          <button
            className="absolute md:relative left-0  py-1 md:py-2 px-2 md:px-4 bg-purple-800 text-white rounded-lg mx-2 md:mx-4 my-2 cursor-pointer text-xs md:text-lg -mt-16 md:mt-4"
            onClick={handleGptSearchClick}>
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="absolute md:relative right-20 md:right-0 w-8 h-8 md:w-12 md:h-12 rounded -mt-18 md:mt-0"
            alt="user icon"
            src={IMAGE_URL}
          />

          <button
            className="absolute md:relative right-4 md:right-0 font-bold text-white md:mt-4 mb-3 cursor-pointer  text-xs md:text-lg -mt-15"
            onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
