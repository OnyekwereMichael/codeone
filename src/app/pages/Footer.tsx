import { Mail, Twitter, Linkedin, Github } from 'lucide-react';
import MessageInput from './MessageInput';


const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Company', href: '#pricing' },
      { name: 'Solutions', href: '#templates' },
      { name: 'Services', href: '#demo' }
    ],
    resources: [
      { name: 'Case Studies', href: '#blog' },
      { name: 'Contact Us', href: '#stories' },
      { name: 'Update Journals', href: '#help' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
      { name: 'Partners', href: '#partners' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@gidipitch.com', label: 'Email' }
  ];

  return (
    <footer className="bg-[white] container mx-auto">
      <div className=" px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
              <a href="#home" className="flex items-center gap-2 group ">
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
  <span className="font-extrabold text-xl tracking-tight text-blue-600 group-hover:text-blue-700">
    CodeOne
  </span>
</a>
            <p className="text-muted-foreground mb-6 leading-relaxed mt-3 max-w-md">
           Netsprin aims to empower businesses to achieve their goals, drive innovation, and stay competitive in the rapidly evolving technology landscape.
            </p>
            
            
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-xl">Our Company</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xl">Community</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-4">Our Social Media</h4>
            {/* <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul> */}

         <p className="mb-6">Connect with us on our social media handles</p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Netsprin. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {/* <a href="#privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookie Policy
            </a> */}

            <MessageInput  />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;