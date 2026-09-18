const Header = () => {
    return (
        <div className= "border-b border-[#F1F5F9]">
            <div className="flex justify-between items-center py-2.5 container mx-auto">
            {/* Logo Area */}
            <div>
                <a href="#">
                    <img src="/src/assets/logo-text.png" alt="DevStack" />
                </a>
            </div>
            {/* Menu Area */}
            <div>
                <ul className="flex gap-6 text-[#475569] font-medium">
                    <li><a href="#" className="text-[#DB2777]">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            {/* Button Area */}
            <div className="flex gap-4 items-center">
                <a href="#" className="text-[#334155]">Sign In</a>
                <a href="#" className="rounded-[30px] bg-[#D91B7E] py-2.5 px-5 text-white">Sign Up</a>
            </div>
        </div>
        </div>
    );
};

export default Header;