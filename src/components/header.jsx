import React, { useState } from "react";
import Modal from "./Modal";
import SignupModal from "./signupModal";
import { CloseModal } from "@/icons/social";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = async (e) => {
    try {
      e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <>
      <header>
        <div className="h-[80px] w-full bg-[#50d250]  flex justify-between ">
          <span className="flex pl-[100px] pt-[25px] gap-[40px]">
            <h1 className="cursor-pointer text-[white] text-[18px]">
              Company Logo
            </h1>
            <h1 className="cursor-pointer text-[white] text-[18px]">
              How It Work
            </h1>
            <h1 className="cursor-pointer text-[white] text-[18px]">
              Browse Jobs
            </h1>
          </span>
          <div className="pr-[70px] gap-3">
            <button
              className=" w-[100px] mr-[30px] rounded-[50px] h-[40px] mt-[20px] bg-red-500 text-[white] leading-[24px] hover:text-gray-300 focus:outline-none"
              onClick={openModal}
            >
              Login
            </button>

            <button
              onClick={openSignupModal}
              className=" w-[100px] rounded-[50px] h-[40px] mt-[20px] bg-red-500 text-[white] leading-[24px] hover:text-gray-300 focus:outline-none "
            >
              Sign in
            </button>
          </div>
        </div>
        <div className="h-[40px] bg-black flex gap-[20px] pt-[10px] pl-[100px]">
          <h1 className="text-[white] text-sm cursor-pointer hover:bg-[#cfcbcbad]">
            Post a Project
          </h1>
          <h1 className="text-[white] text-sm cursor-pointer hover:bg-[#cfcbcbad]">
            Find Jobs
          </h1>
          <h1 className="text-[white] text-sm cursor-pointer hover:bg-[#cfcbcbad]">
            Get Iadeas
          </h1>
          <h1 className="text-[white] text-sm cursor-pointer hover:bg-[#cfcbcbad]">
            About
          </h1>
          <h1 className="text-[white] text-sm cursor-pointer hover:bg-[#cfcbcbad]"></h1>
          <div className="flex pr-[100px] gap-[40px] pb-[5px]"></div>
        </div>
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          {/* Your login form content */}

          <div className="flex justify-between">
            <h1 className="text-xl mb-4">Login</h1>
            <div>
              <div className="bg-red-500 pt-[3px] flex justify-center h-[30px] w-[30px] cursor-pointer">
                <CloseModal />
              </div>
            </div>
          </div>
          <form className="flex flex-col">
            <label className="text-[18px] cursor-pointer " for="first">
              Gmail:
            </label>
            <input
              onChange={(e) => setemail(e.target.value)}
              className="text-[white] pl-[20px] bg-[#958888b2] rounded-[10px] mt-[10px] h-[30px]"
              defaultValue={email}
              type="email"
              id="first"
              name="first"
              required
              minlength="8"
              maxlength="20"
            />
            <label className="mt-[10px] text-[18px] cursor-pointer " for="last">
              Password:
            </label>
            <input
              // on changi gaukete
              onChange={(e) => setpassword(e.target.value)}
              defaultValue={password}
              className="text-[white] pl-[20px] bg-[#958888b2] rounded-[10px] mt-[10px] h-[30px]"
              type="password"
              id="last"
              name="last"
              minlength="5"
              maxlength="10"
              pattern="[a-z0-9]{1,15}"
              title="Password should be digits (0 to 9) or alphabets (a to z)."
            />
            <div className="flex justify-center">
              <button
                onClick={signIn}
                className="flex justify-center bg-red-500 hover:bg-red-400 w-[200px] h-[30px] mt-[15px] rounded-[50px]"
                type="submit"
              >
                Log in
              </button>
            </div>
          </form>
        </Modal>
        <SignupModal isOpen={isSignupModalOpen} closeModal={closeSignupModal}>
          {/* Your signup form content */}
          <div className="flex justify-between">
            <h2 className="text-xl mb-4">Sign up</h2>
            <div>
              <div className="bg-red-500 pt-[3px] flex justify-center h-[30px] w-[30px] cursor-pointer">
                <CloseModal />
              </div>
            </div>
          </div>
          <form className="flex flex-col">
            <label className="text-[18px] cursor-pointer " for="first">
              First name:
            </label>
            <input
              className="text-[white] pl-[20px] bg-[#958888b2] rounded-[10px] mt-[10px] h-[30px]"
              type="text"
              id="first"
              name="first"
              required
              minlength="8"
              maxlength="20"
            />
            <label className="mt-[10px] text-[18px] cursor-pointer " for="last">
              Last name:
            </label>
            <input
              className="text-[white] pl-[20px] bg-[#958888b2] rounded-[10px] mt-[10px] h-[30px]"
              type="text"
              id="last"
              name="last"
              minlength="5"
              maxlength="10"
              pattern="[a-z0-9]{1,15}"
              title="Password should be digits (0 to 9) or alphabets (a to z)."
            />
            <label
              className="text-[18px] mt-[15px] cursor-pointer "
              for="email"
            >
              Email:
            </label>
            <input
              className="text-[white] pl-[20px] bg-[#958888b2] rounded-[10px] mt-[10px] h-[30px]"
              type="email"
              id="email"
              name="email"
              required
              minlength="8"
              maxlength="20"
            />
            <label
              className="text-[18px] cursor-pointermt-[15px] mt-[15px] "
              for="password"
            >
              Password:
            </label>
            <input
              className="text-[white] pl-[20px] bg-[#958888b2] rounded-[10px] mt-[10px] h-[30px]"
              type="password"
              id="password"
              name="passowrd"
              required
              minlength="8"
              maxlength="20"
            />
            <label
              className="text-[18px] cursor-pointer mt-[15px]"
              for="confrim password"
            >
              Confirm Password:
            </label>
            <input
              className="text-[white] pl-[20px] bg-[#958888b2] rounded-[10px] mt-[10px] h-[30px]"
              type="password"
              id="confrim password"
              name="confrim password"
              required
              minlength="8"
              maxlength="20"
            />
            <div className="flex justify-center">
              <button
                className="flex justify-center bg-red-500 hover:bg-red-400 w-[200px] h-[30px] mt-[15px] rounded-[50px]"
                type="submit"
              >
                Log in
              </button>
            </div>
          </form>
        </SignupModal>
      </header>
    </>
  );
};

export default Header;
