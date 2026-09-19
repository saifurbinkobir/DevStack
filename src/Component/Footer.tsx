import logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <div className="pt-8 pb-12 md:pt-16 md:pb-12 px-3.5 md:px-0 border-t border-[#F1F5F9]">
      {/* Footer Main Area */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 md:gap-10 justify-between items-start mb-6 md:mb-14">
        <div className="md:col-span-2 text-center md:text-left">
          <a href="#" className="flex justify-center md:justify-start">
            <img src={logo} alt="Dev Stack" />
          </a>
          <p className="text-[#64748B] my-3 w-[90%]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="text-[#475569] flex justify-center gap-6 md:justify-start md:gap-4 font-semibold">
            <a href="#">Github</a>
            <a href="#">Twitter</a>
            <a href="#">Linkedin</a>
          </div>
        </div>
        <div className="md:col-span-1 hidden md:block">
          <h1 className="text-[#0F172A] uppercase font-bold md:mb-4">Product</h1>
          <ul className="text-[#64748B] text-[12px] flex flex-col gap-2.5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Projets</a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1 hidden md:block">
          <h1 className="text-[#0F172A] uppercase font-bold md:mb-4">Company</h1>
          <ul className="text-[#64748B] text-[12px] flex flex-col gap-2.5">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1 hidden md:block">
          <h1 className="text-[#0F172A] uppercase font-bold md:mb-4">Legal</h1>
          <ul className="text-[#64748B] text-[12px] flex flex-col gap-2.5">
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom Area */}
      <div className="border-t border-[#F1F5F9] pt-4 md:pt-8 flex justify-between items-center container mx-auto">
            <p className="text-[#94A3B8] text-[12px]">© 2026 Dev Stack. All rights reserved.</p>
            <p className="text-[#94A3B8] text-[12px] gap-6 flex items-center">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
            </p>
      </div>
    </div>
  );
};

export default Footer;
