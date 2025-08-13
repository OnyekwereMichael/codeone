import Image from "next/image";
import aboutImage from "../../../public/About.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";

export default function AboutSection() {
   const stats = [
    { value: "90+", label: "Projects\nCompleted" },
    { value: "60+", label: "Our\nClients" },
    { value: "40+", label: "Services\nProvided" },
  ];

  return (
    <section id="about" className="pt-16 pb-8 ">
      {/* Top Header Section */}
      <div className="max-w-8xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center ">
        <div className="flex items-center gap-1 ">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-2 md:mb-5 ">
              About Our Creative <br className="max-sm:hidden"/> Agency
          </h1>
           <button className="ml-3 bg-white border border-blue-400 text-blue-500 px-4 py-1 rounded-full text-sm inline-flex items-center gap-1 hover:bg-blue-50 transition max-sm:hidden">
          <span>→</span>
        </button>
        </div>

        <p className="text-gray-600 text-center md:text-left text-[16px] md:text-[px] max-sm:mt-3">
          We are a development company, crafting high-performance <br />
          websites, mobile apps, and <br className="max-sm:hidden"/> UI/UX designs that drive business
          success.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-8xl mx-auto grid md:grid-cols-3 gap-10 items-center bg-white pt-8 md:pt-8 px-8 max-sm:px-4 rounded-2xl">
        
        {/* Left: Image spanning 2 columns */}
        <div className="relative w-full h-full md:col-span-2">
          <Image
            src={aboutImage}
            alt="Team working in office"
            className="rounded-xl object-cover w-full "
          />
            <button className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 mt-4">
  Explore More
  <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">
    <FaArrowRight className="text-white" size={14} />
  </span>
</button>

        </div>
      

        {/* Right: Stats */}
        <div className="space-y-4">
          <section className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <h1 className="text-blue-500 font-bold text-7xl">07</h1>
              <p className="text-xl text-blue-400 font-medium">
                Years of Experience
              </p>
            </div>
            <div>
              <FiArrowDown size={25} className="-rotate-45 text-blue-500" />
            </div>
          </section>
                    <p className="text-gray-600 font-medium mb-6">
            We are development company, we craft high-performance websites,
            mobile apps, and UI/UX designs that drive business success.
          </p>


            <div className="space-y-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex items-center justify-between border-b border-blue-500  transition p-4"
        >
          {/* Left side: number + label */}
          <div className="flex gap-3 items-center">
            <p className="text-blue-500 font-bold text-3xl">{stat.value}</p>
            <p className="text-blue-500 text-lg leading-snug whitespace-pre-line">
              {stat.label}
            </p>
          </div>

          {/* Right side: arrow in a circle */}
          <div className="p-2 rounded-full border border-blue-500 flex items-center justify-center">
            <FaArrowRight size={18} className="text-blue-500" />
          </div>
        </div>
      ))}
    </div>
         
        </div>

      </div>
    </section>
  );
}
