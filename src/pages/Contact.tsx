import { Mail, Phone, Send } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_dfqbawb",
        "template_q4j3k6v",
        form.current,
        "PYL0PYKm9n_R3C2Os",
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current?.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to send message");
      });
  };

  return (
    <div className="md:py-20 py-10  border-t border-gray-800">
      <div id="contact" className="w-full max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-2">Get in Touch</h2>
          <div className="h-1 w-70 bg-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-2xl">
          {/* Left Side: Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Let's collaborate
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I'm currently open to new opportunities and projects. Whether
                you have a question or just want to say hi, I'll try my best to
                get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="text-cyan-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">
                    Email
                  </p>
                  <a
                    href="mailto:hudahaider303@gmail.com"
                    className="text-slate-200 hover:text-cyan-400 transition-colors break-all sm:break-normal block"
                  >
                    hudahaider303@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                  <Phone className="text-cyan-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">
                    Phone
                  </p>
                  <p className="text-slate-200">+92 311 3331997</p>
                  <p className="text-slate-200">+92 314 1560128</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-3 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-700/50">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1 mb-5">
                    Name
                  </label>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Enter name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1 mb-5">
                    Email
                  </label>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="name@example.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1 mb-5">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-10 rounded-xl transition-all active:scale-95 shadow-lg shadow-cyan-900/20"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
