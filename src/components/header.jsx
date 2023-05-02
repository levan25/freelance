import React, { useState } from "react";
import Modal from "./Modal";
import SignupModal from "./signupModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              className="w-[100px] mr-[30px] rounded-[50px] h-[40px] mt-[20px] bg-red-500 text-[white] leading-[24px] hover:text-gray-300 focus:outline-none"
              onClick={openModal}
            >
              Login
            </button>

            {/* <button className="w-[100px] mr-[30px] rounded-[50px] h-[40px] mt-[20px] bg-red-500 text-[white] leading-[24px] ">
              Log in
            </button> */}
       {/* <button
            className=" hover:text-gray-300 focus:outline-none w-[100px] rounded-[50px] h-[40px] mt-[20px] bg-red-500 text-[white] leading-[24px] "
            onClick={openSignupModal}
          >
            Sign up
          </button> */}
          <button    onClick={openSignupModal} className="w-[100px] rounded-[50px] h-[40px] mt-[20px] bg-red-500 text-[white] leading-[24px] ">
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
          <form>{/* Your form elements */}</form>
        </Modal>
        <SignupModal isOpen={isSignupModalOpen} closeModal={closeSignupModal}>
          {/* Your signup form content */}
          <h2 className="text-xl mb-4">Sign up</h2>
          <form>{/* Your form elements */}</form>
        </SignupModal>
      </header>
    </>
  );
};

export default Header;

// {/* <button
//   className="text-white hover:text-gray-300 focus:outline-none"
//   onClick={openModal}
// >
//   Login
// </button>; */}

//  <Modal isOpen={isModalOpen} closeModal={closeModal}>
//    {/* Your login form content */}
//    <form>{/* Your form elements */}</form>
//  </Modal>;

// import React, { useState } from "react";
// import Modal from "./modal";

// const Header = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleLoginClick = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <div>
// <div className="h-[80px] w-full bg-[#50d250]  flex justify-between ">
//   <span className="flex pl-[100px] pt-[25px] gap-[40px]">
//     <h1 className="cursor-pointer text-[white] text-[18px]">
//       Company Logo
//     </h1>
//     <h1 className="cursor-pointer text-[white] text-[18px]">
//       How It Work
//     </h1>
//     <h1 className="cursor-pointer text-[white] text-[18px]">
//       Browse Jobs
//     </h1>
//   </span>
//   <div className="pr-[70px] gap-3">
//     <button className="w-[100px] mr-[30px] rounded-[50px] h-[40px] mt-[20px] bg-red-500 text-[white] leading-[24px] ">
//       Log in
//     </button>
//     <button className="w-[100px] rounded-[50px] h-[40px] mt-[20px] bg-red-500 text-[white] leading-[24px] ">
//       Sign in
//     </button>
//   </div>
// </div>
// <div className="h-[40px] bg-black flex gap-[20px] pt-[10px] pl-[100px]">
//   <h1 className="text-[white] text-sm cursor-pointer hover:bg-[#cfcbcbad]">
//     Post a Project
//   </h1>
//   <h1 className="text-[white] text-sm cursor-pointer hover:bg-[#cfcbcbad]">
//     Find Jobs
//   </h1>
//   <h1 className="text-[white] text-sm cursor-pointer hover:bg-[#cfcbcbad]">
//     Get Iadeas
//   </h1>
//   <h1 className="text-[white] text-sm cursor-pointer hover:bg-[#cfcbcbad]">
//     About
//   </h1>
//   <h1 className="text-[white] text-sm cursor-pointer hover:bg-[#cfcbcbad]"></h1>
//   <div className="flex pr-[100px] gap-[40px] pb-[5px]"></div>
// </div>
//       {/* <Modal isOpen={isModalOpen} onClose={closeModal}> */}
//       {/* Your login form goes here */}
//       {/* isOpen={isModalOpen} onClose={closeModal} */}
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <h2 className="text-xl mb-4">Log in</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block mb-2">Email</label>
//             <input
//               className="border p-2 w-full"
//               type="email"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Password</label>
//             <input
//               className="border p-2 w-full"
//               type="password"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
//             Log in
//           </button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default Header;
