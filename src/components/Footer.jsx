import { Facebook, Download } from "@/icons/social";

// Goati xar pirdap iri mnishvnelobit !!!

function Footer() {
  return (
    <div className="flex flex-col">
      <footer className="bg-[#24262b] pt-70px absolute bottom-0 w-full ">
        <div className="flex justify-center mb-[30px]">
          <div className="flex gap-[100px] pl-[50px]">
            <div className="pt-[30px]">
              <h1 className="cursor-pointer text-[white] text-[16px]">
                We Are A Company Skillstream
              </h1>
              <h1 className="cursor-pointer text-[white] text-[16px]">
                We Are Helping A People To find Jobs
              </h1>
              <h1 className="cursor-pointer text-[white] text-[16px]">
                And Companyes To Hire People
              </h1>
            </div>
            <div class="flex flex-col">
              <h1 className="cursor-pointer text-[white] text-[20px] hover:text-[#8a8989] pt-[25px]">
                About
              </h1>
              <h1 className="cursor-pointer text-[white] text-[16px] hover:text-[#8a8989]">
                Our serveses
              </h1>
              <h1 className="cursor-pointer text-[white] text-[16px] hover:text-[#8a8989]">
                Privacy Policy
              </h1>
              <h1 className="cursor-pointer text-[white] text-[16px] hover:text-[#8a8989]">
                Rules
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="cursor-pointer text-[white] text-[20px] hover:text-[#8a8989] pt-[20px]">
                Categories
              </h1>
              <h1 className="cursor-pointer text-[white] text-[16px] hover:text-[#8a8989]">
                UI/UX Desain
              </h1>
              <h1 className="cursor-pointer text-[white] text-[16px] hover:text-[#8a8989]">
                Write And Translate
              </h1>
              <h1 className="cursor-pointer text-[white] text-[16px] hover:text-[#8a8989]">
                Freelance
              </h1>
              <h1 className="cursor-pointer text-[white] text-[16px] hover:text-[#8a8989]">
                Mobile Development
              </h1>
              <h1 className="cursor-pointer text-[white] text-[16px] hover:text-[#8a8989]">
                Web Development
              </h1>
            </div>
            <div className="flex justify-items-end">
              <h1 className="cursor-pointer text-[white] text-[20px] pl-[300px] pt-[30px]">
                Follow Us On
              </h1>
              <Facebook />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
