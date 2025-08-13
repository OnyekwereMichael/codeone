import Image from "next/image";
import p1 from "../../../public/project-1.jpg";
import p2 from "../../../public/project-2.jpg";
import p3 from "../../../public/project-3.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";


const projects = [
  { img: p1, title: "Remontada App ", desc: "Building the software according to specifications and conducting thorough testing (unit tests, integration tests" },
  { img: p2, title: "FinchPay", desc: "Fintech wallet onboarding" },
  { img: p3, title: "CloudVision", desc: "Analytics dashboard for SaaS Creating detailed project plans, wireframes, and system architectures" },
];

export default function Projects() {
  return (
    <section id="projects" className="px-8 max-sm:px-4 max-sm:mt-5">
      <div className="max-w-8xl">
        <div className="">
          <p className="text-3xl font-semibold tracking-wider uppercase text-black mb-2 text-center">Our Latest Projects</p>
          <h2 className="text-lg text-black md:text-xl text-center  tracking-tight mb-10">We provide a comprehensive suite of services to help <br className="max-sm:hidden"/>   businesses  thrive in the digital age.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
{projects.map((p, index) => (
  <article
    key={p.title}
    className="rounded-xl border bg-card overflow-hidden flex flex-col relative"
  >
    {/* First Card: Image Top + Text Bottom */}
    {index === 0 && (
      <>
        <div className="relative">
          <div className="bg-blue-100/50 rounded-xl p-6">
            <Image
              src={p.img}
              alt={`${p.title} preview`}
              loading="lazy"
              className="w-full h-72 object-cover mx-auto rounded-xl"
            />
          </div>
          <div className="absolute top-4 right-4 bg-blue-500 rounded-full p-2 shadow-md cursor-pointer">
            <FiArrowDown size={25} className="-rotate-125 text-white" />
          </div>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
        </div>
      </>
    )}

    {/* Second Card: Image Only */}
    {index === 1 && (
      <div className="relative flex-1">
        <div className="bg-blue-100/50 rounded-xl p-6 h-full flex items-center justify-center">
          <Image
            src={p.img}
            alt={`${p.title} preview`}
            loading="lazy"
            className="w-full h-96 object-cover mx-auto rounded-xl"
          />
        </div>
        <div className="absolute top-6 right-4 bg-blue-500 rounded-full p-2 shadow-md cursor-pointer">
          <FiArrowDown size={25} className="-rotate-125 text-white" />
        </div>
      </div>
    )}

    {/* Third Card: Text Top + Image Bottom */}
    {index === 2 && (
      <>
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
        </div>
        <div className="relative">
          <div className="bg-blue-100/50 rounded-xl p-6">
            <Image
              src={p.img}
              alt={`${p.title} preview`}
              loading="lazy"
              className="w-full h-72 object-cover mx-auto rounded-xl"
            />
          </div>
          <div className="absolute top-4 right-4 bg-blue-500 rounded-full p-2 shadow-md cursor-pointer">
            <FiArrowDown size={25} className="-rotate-125 text-white" />
          </div>
        </div>
      </>
    )}
  </article>
))}


        </div>

        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 justify-center mx-auto my-4">
  Explore more
  <FaArrowRight className="text-white" size={14} />
</button>

      </div>
    </section>
  );
}