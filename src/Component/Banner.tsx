import heroImage from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="py-7.5 md:py-15">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 justify-between gap-8 items-center px-3.5 md:px-0">
      <div className="md:col-span-7">
        <h1 className="text-[#0F172A] text-[30px] md:text-[60px] text-center md:text-left font-extrabold"  style={{ fontFamily: '"Inter", sans-serif' }}>Build Your Ideal <br/><span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent mb-6">Development Stack</span></h1>
        <p className="text-[#475569] text-[18px] mt-3 md:mt-6 text-center md:text-left">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-6 md:mt-10 flex gap-3 justify-center md:justify-start">
          <a href="#" className="btn bg-linear-to-r from-[#F97316] to-[#EC4899] text-white border-[#E5E7EB] rounded-lg">Explore Technologies</a>
          <a href="#" className="btn bg-white text-black border-[#E5E7EB] rounded-lg">Learn More</a>
        </div>
      </div>
      <div className="md:col-span-5 justify-center md:justify-end flex">
        <img src={heroImage} alt="Banner Stack" className="md:w-120 md:h-120"/>
      </div>
    </div>
    </div>
  );
};

export default Banner;
