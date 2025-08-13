import heroImage from "../../../public/Hero.webp";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import Logo from '../../../public/logo.png'

export default function Hero() {
  return (
    <section id="home" className="">
      {/* Background subtle gradient */}
      <div className=" bg-gradient-to-br from-blue-50 via-white to-blue-100" aria-hidden />

    <div className="max-w-8xl mx-auto grid gap-8 md:grid-cols-2 items-center pt-8 md:pt-8 px-8 max-sm:px-4">

        
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-15 mb-5 max-sm:leading-12">
            Stay ahead of the <br /> curve with our
            forward-thinking
          </h1>

          <p className="text-lg text-gray-600 mb-7 max-w-xl">
            We provide dedicated support and maintenance services to ensure that your systems run smoothly and efficiently. Our team is always ready to assist you, offering prompt and reliable support whenever you need it
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 max-sm:w-[60%]">
            <a
              href="#projects"
              aria-label="View our work"
              className="inline-flex items-center font-semibold gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Work
              <FiArrowDown size={22} className="-rotate-45" />
            </a>
          </div>


        </div>

        {/* Image Section */}
        <div >
          <Image
            src={heroImage}
            alt="Team collaborating in modern office"
            className="w-full object-cover rounded-2xl "
            loading="eager"
          />
        </div>

      </div>

      <section className="px-8 grid gap-8 md:grid-cols-2 items-center max-sm:mt-5 max-sm:px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl ">
  {["UI UX Design", "Web Development", "SEO", "App Development", "Digital Marketing", "Brand & Strategy"].map(
    (item, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md hover:shadow-lg border border-black/40 px-4 py-3 text-center font-semibold text-gray-700 transition-all duration-300 hover:scale-105"
      >
        {item}
      </div>
    )
  )}
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
  <div className="bg-blue-400 rounded-4xl p-4 max-sm:p-8">
      <div className="flex gap-1 text-white items-center mb-2">
        <FaPlus size={22} />
          <p className="text-xl font-semibold ">20</p>
      </div>
      <p className="font-semibold text-[15px] text-white my-2">Years of Experience</p>
       <p className="text-white">Netsprin boasts a team of seasoned <br className="hidden sm:block"/> professionals with extensive experience</p>
    </div>
    {/* second block  */}
  <div className="bg-black rounded-4xl p-4">
      {/* <div className="flex gap-1 text-white items-center mb-2">
        <FaPlus size={22} />
          <p className="text-xl font-semibold">20</p>
      </div>
      <p className="font-semibold my-1 text-[15px] text-white">Years of Experience</p>
       <p className="text-white">Netsprin boasts a team of seasoned <br className="hidden sm:block"/> professionals with extensive experience</p> */}
       <Image src={Logo} alt=""/>
    </div>
</div>
</section>

    </section>
  );
}
