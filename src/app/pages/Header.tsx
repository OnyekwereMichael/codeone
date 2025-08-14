'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";



const navItems = [
  { href: "#home", label: "Home" },
  { href: "#product", label: "Product" },
  { href: "#solutions", label: "Solutions" },
  { href: "#resources", label: "Resources" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/90 border-b">{/* SEO: header/nav */}
      <nav className="mx-auto container flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2 group px-8 max-sm:px-4">
  {/* Icon container */}
  <span
    className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500 shadow-lg shadow-blue-300/50 transition-transform duration-200 group-hover:scale-110"
    aria-hidden
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4z" />
    </svg>
  </span>

  {/* Logo text */}
  <span className="font-extrabold text-xl tracking-tight text-blue-600 group-hover:text-blue-700 max-sm:hidden">
    CodeOne
  </span>
</a>


        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm font-medium text-foreground/70 hover:text-foreground">Contact</a>
          <Button className=" inline-flex items-center font-semibold gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <a href="#cta">Start a Project</a>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-border max-sm:mr-4"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t bg-background">
          <ul className="container py-4 space-y-3 px-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/80 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
             <button
  className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
>
  <a href="#cta" onClick={() => setOpen(false)}>
    Contact Us
  </a>
</button>

            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
