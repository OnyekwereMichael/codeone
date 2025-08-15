import { FiArrowDown } from 'react-icons/fi';
import SideSteps from './Sidestep';
import hmo from '../../../public/curr.png'
import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="">
     
      <div className="w-full bottom-leftt  card py-20 bg-blue-600 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplrtzGok0nhAfnWCRBQ1Am0r_1PF-A2yJ_8--gaFDUHa50qy02jyTnMfsOsB0V6LRQ8c&usqp=CAU')] bg-repeat bg-blend-overlay bg-opacity-60 mt-14 text-black text-center max-sm:mt-6">
      {/* <Image src={hmo} alt="Hero Image" loading="eager" width={20} height={20} className='text-white bg-blue-600'/> */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
         Let&apos;s Make Something
        </h2>
        <p className=" text-[14px] md:text-[16px] text-black mb-10">
      No tech skills? No startup background? No problem at all. You don’t need years of coding experience or a business degree to bring your idea to life.
<span className="block">Netsprin walks with you from the very first spark of inspiration to a fully launched, thriving product—every single step of the way.</span>
        </p>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          <button className="bg-black text-white font-medium py-3 px-6 rounded-full flex items-center gap-2 transition">
            Book a Demo <FiArrowDown size={18} className="-rotate-125 text-white" />
          </button>

          <button className="border border-black flex items-center gap-2 text-black py-3 px-6 rounded-full hover:bg-black/90 hover:text-white transition">
            Try for free <FiArrowDown size={18} className="-rotate-125 text-black hover:text-white" />
          </button>
        </div>
      </div>
      </div>
       {/* <SideSteps /> */}
    </section>
  );
}
