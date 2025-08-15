import { FiArrowDown } from 'react-icons/fi';
import SideSteps from './Sidestep';

export default function CTASection() {
  return (
    <section className="">
     
      <div className="w-full card py-20 bg-blue-600 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplrtzGok0nhAfnWCRBQ1Am0r_1PF-A2yJ_8--gaFDUHa50qy02jyTnMfsOsB0V6LRQ8c&usqp=CAU')] bg-repeat bg-blend-overlay bg-opacity-60 mt-6 text-black text-center max-sm:mt-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
         Let&apos;s Make Something
        </h2>
        <p className="text-[14px] md:text-lg text-black mb-10">
          No tech skills? No startup experience? No problem.<br />
          <span className="block">Netsprin guides you every step of the way.</span>
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
       <SideSteps />
    </section>
  );
}
