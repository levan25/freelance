function Header() {
  return (
    <div>
      <div className="h-[80px] w-full bg-[#50d250]  flex justify-between ">
        <span className="flex pl-[100px] pt-[25px] gap-[40px]">
          <h1 className="cursor-pointer text-[white] text-[18px]">
            company logo
          </h1>
          <h1 className="cursor-pointer text-[white] text-[18px]">
            How It Work
          </h1>
          <h1 className="cursor-pointer text-[white] text-[18px]">
            Browse Jobs
          </h1>
        </span>
        <span className="flex pr-[100px] gap-[40px] pb-[5px]">
          <button className="w-[100px] rounded-[50px] h-[40px] mt-[20px] bg-red-500 text-[white] leading-[24px] ">
            Log In
          </button>
          <button className="w-[100px] rounded-[50px] h-[40px] mt-[20px] bg-red-500 text-[white] leading-[24px] ">
            Sign Up
          </button>
        </span>
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
      </div>
    </div>
  );
}

export default Header;
