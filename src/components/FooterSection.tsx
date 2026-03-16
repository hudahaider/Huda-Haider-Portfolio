import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="p-8 text-center text-sm">
        <div className="flex gap-8 justify-center mb-6">
           <Mail size={28} className="hover:text-cyan-500" />
           <Facebook size={28} className="hover:text-cyan-500" /> 
           <Instagram size={28} className="hover:text-cyan-500" /> 
           <Linkedin size={28} className="hover:text-cyan-500" />  
        </div>
       Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
};
export default FooterSection;