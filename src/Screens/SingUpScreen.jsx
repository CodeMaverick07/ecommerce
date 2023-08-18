import React from "react";

import Singing from "../components/Singing";
import Signup from "../components/Signup";

const SingUpScreen = () => {
  return (
    <div className="mt-14 w-screen h-screen flex justify-center items-center">
      <div className="-mt-24 h-2/3 w-1/3 bg-gray-200 rounded-xl shadow-xl md:w-3/4 ">
        <div className="flex justify-around text-xl font-bold text-gray-800 m-6 ">
          <div className="">SignUp</div>

          <div className=" ">LogIn</div>
        </div>
        <div className="h-1 w-full bg-gray-600"></div>
        <Signup />
        <Singing />
      </div>
    </div>
  );
};

export default SingUpScreen;
