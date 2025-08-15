import React from 'react'
import whyImg from '../../../public/why.jpg'
import Image from 'next/image'

const WhyTrusted = () => {
  return (
  <section className="relative py-16 px-4 md:px-8 bg-white container mx-auto mt-6 max-sm:mt-0">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20 pointer-events-none"></div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
    {/* Left Column */}
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
        We Always Provide <br />
        <span className="bg-blue-100 px-2 rounded">Best Services</span>
       <button
  className="
    relative ml-3 bg-white border border-blue-400 text-blue-500
    px-5 py-1.5 rounded-full text-sm font-medium
    inline-flex items-center gap-2
    hover:bg-blue-50 transition-colors duration-200 ease-out
    max-sm:hidden

    before:content-[''] before:absolute before:top-0 before:right-[-7px]
    before:h-full before:w-full before:border-r before:border-blue-400
    before:rounded-full

    after:content-[''] after:absolute after:top-0 after:right-[-14px]
    after:h-full after:w-full after:border-r after:border-blue-400
    after:rounded-full
  "
>
  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
</button>
      </h2>
      <p className="mt-4 text-gray-600 max-w-lg">
        We provide a comprehensive suite of services tailored to meet the diverse
        needs of businesses—whether you’re beginning your digital transformation or
        looking to elevate your existing presence.
      </p>

      {/* Service List */}
      <div className="mt-8 space-y-6">
        <div>
          <span className="text-blue-500 font-bold">01</span>{" "}
          <span className="font-medium">UI/UX Design</span>
          <ul className="list-disc list-inside text-gray-500 text-sm mt-1">
            <li>Designing interfaces that prioritize usability, accessibility, and a seamless experience for your customers across all devices.</li>
          </ul>
        </div>

        <div>
          <span className="text-blue-500 font-bold">02</span>{" "}
          <span className="font-medium">Web Development</span>
          <ul className="list-disc list-inside text-gray-500 text-sm mt-1">
            <li>Creating responsive, fast, and scalable websites that align with your brand identity and business goals.</li>
          </ul>
        </div>

        <div>
          <span className="text-blue-500 font-bold">03</span>{" "}
          <span className="font-medium">Mobile App Development</span>
          <ul className="list-disc list-inside text-gray-500 text-sm mt-1">
            <li>Building high-performance mobile applications for iOS and Android with intuitive navigation and modern UI elements.</li>
          </ul>
        </div>

       

       

        
      </div>
    </div>

    {/* Right Column */}
    <div className="relative">
      {/* Image */}
      <div className="bg-blue-100/50 rounded-xl overflow-hidden">
        <Image
          src={whyImg}
          alt="Handshake"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Number Badge */}
      <div className="absolute top-3 right-3 bg-blue-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
        01
      </div>
    </div>
  </div>
</section>


  )
}

export default WhyTrusted
