'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import whyImg from '../../../public/why.jpg'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";

const faqs = [
  { q: "What services do you offer?", a: "End-to-end UI/UX design, web development, mobile apps, and technical SEO." },
  { q: "How long does a project take?", a: "Most engagements range from 4–12 weeks depending on scope and complexity." },
  { q: "Do you work with startups and enterprises?", a: "Yes. We partner with teams of all sizes across industries and regions." },
  { q: "What is your pricing model?", a: "We offer both fixed-price and hourly billing, tailored to fit your project's needs." },
  { q: "Do you provide post-launch support?", a: "Absolutely. We offer maintenance, updates, and scaling support after launch." },

];


export default function Faq() {
  return (
    <section id="faq" className="px-4 md:px-8 py-5 relative flex flex-col md:flex-row items-center gap-10  w-full mx-auto container mt-6 max-sm:mt-0">
      {/* Text & FAQ */}
      <div className="w-full ">
        <p className="text-sm font-semibold tracking-wider uppercase text-indigo-500 mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-8">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`} 
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="text-left text-md font-medium text-gray-800 hover:text-indigo-600 transition-colors">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-md leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* SEO Schema */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(f => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a }
              }))
            }) 
          }} 
        />
      </div>

      {/* Image */}
      <div className="w-full flex justify-center">
        <div className="relative w-full ">
        <figure className="alt">
                  <Image 
            src={whyImg} 
            alt="Why choose us?" 
            className="rounded-xl shadow-lg object-cover w-full" 
            priority
          />
                    <figcaption className="bg-blue-500">Explore More <span><FaArrowRight size={14} className="text-white"/></span></figcaption>
                  </figure>
             
          {/* <div className="absolute -bottom-5 -left-5 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md text-sm font-semibold">
            We’ve got answers!
          </div> */}
        </div>
      </div>
    </section>
  );
}
