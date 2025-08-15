import heroImage from "../../../public/Hero.webp";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import Logo from '../../../public/logo.png'
import { IoPlay } from "react-icons/io5";

export default function Hero() {
  return (
    <section id="home" className="">
      {/* Background subtle gradient */}
      <div className=" " />

    <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center pt-8 md:pt-8 px-8 max-sm:px-4">

        
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
          {/* <Image
            src={heroImage}
            alt="Team collaborating in modern office"
            className="w-full object-cover rounded-2xl top-left-bottom-right"
            loading="eager"
          /> */}

<figure className="">
  <Image
            src={heroImage}
            alt="Team collaborating in modern office"
            className="w-full object-cover rounded-2xl "
            loading="eager"
          />
  <figcaption className="bg-blue-500">Watch Tutorial  <span><IoPlay size={14} className="text-white"/></span></figcaption>
</figure>
          
        </div>

      </div>

      <section className="px-8 mx-auto container grid gap-8 md:grid-cols-2 items-center  max-sm:px-4 max-sm:mt-12 max-sm:gap-1">
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
  <div className="bg-blue-600 rounded-4xl p-4 max-sm:p-8 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplrtzGok0nhAfnWCRBQ1Am0r_1PF-A2yJ_8--gaFDUHa50qy02jyTnMfsOsB0V6LRQ8c&usqp=CAU')] bg-repeat bg-blend-overlay bg-opacity-60">
      <div className="flex gap-1 text-white items-center mb-2">
        <FaPlus size={22} />
          <p className="text-xl font-semibold ">20</p>
      </div>
      <p className="font-semibold text-[15px] text-white my-2">Years of Experience</p>
       <p className="text-white">Netsprin boasts a team of seasoned <br className="hidden sm:block"/> </p>
    </div>
    {/* second block  */}
  <div className="bg-black rounded-4xl p-4">
      {/* <div className="flex gap-1 text-white items-center mb-2">
        <FaPlus size={22} />
          <p className="text-xl font-semibold">20</p>
      </div>
      <p className="font-semibold my-1 text-[15px] text-white">Years of Experience</p>
       <p className="text-white">Netsprin boasts a team of seasoned <br className="hidden sm:block"/> professionals with extensive experience</p> */}
       <Image src={Logo} alt="" className="w-full"/>
    </div>
</div>
</section>

    </section>
  );
}