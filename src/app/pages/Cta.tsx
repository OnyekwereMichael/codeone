import { AiOutlineArrowRight } from 'react-icons/ai';

export default function CTASection() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white text-center max-sm:mt-6">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-medium mb-4">
         Let&apos;s Build Something
        </h2>
        <p className="text-[14px] md:text-xl text-white/90 mb-10">
          No tech skills? No startup experience? No problem.<br />
          <span className="block">Netsprin guides you every step of the way.</span>
        </p>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          <button className="bg-white text-[#2563EB] font-medium py-3 px-6 rounded-full flex items-center gap-2 hover:bg-blue-100 transition">
            Try for free <AiOutlineArrowRight size={18} />
          </button>

          <button className="border border-white text-white py-3 px-6 rounded-full hover:bg-white hover:text-[#2563EB] transition">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
