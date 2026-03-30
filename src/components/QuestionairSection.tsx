import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <div
      id="FAQs"
      className="md:py-20 py-10 px-6 md:px-10  text-white border-t border-gray-800"
    >
      <div className="max-w-5xl mx-auto px-4 py-20 md:py-10">
        {/* heading */}
        <div className="space-y-15">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight leading-tight">
              Frequently asked <br />
              <span className="text-slate-400">questions</span>
            </h1>
          </div>

          {/* Right Grid */}

          <Accordion
            type="single"
            collapsible
            className="w-full mx-auto max-w-3xl space-y-4"
          >
            {/* Item 1 */}
            <AccordionItem
              value="item-1"
              className="border border-white/20 bg-white/5 rounded-3xl px-6 transition-all"
            >
              <AccordionTrigger className="py-5 hover:no-underline">
                <span className="text-lg md:text-xl font-medium text-slate-200">
                  What technologies do you specialize in?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-400 text-lg leading-relaxed">
                I specialize in modern frontend technologies including React,
                TypeScript, Tailwind CSS, and JavaScript. I focus on building
                responsive, scalable, and user-friendly interfaces with clean
                and efficient code.
              </AccordionContent>
            </AccordionItem>

            {/* Item 2 */}
            <AccordionItem
              value="item-2"
              className="border border-white/20 bg-white/5 rounded-3xl px-6 transition-all"
            >
              <AccordionTrigger className="py-5 hover:no-underline">
                <span className="text-lg md:text-xl font-medium text-slate-200">
                  Do you create responsive and mobile-friendly designs?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-400 text-lg leading-relaxed">
                Yes, every project I build is fully responsive and optimized for
                all screen sizes. I ensure a seamless experience across mobile,
                tablet, and desktop devices using modern layout techniques.
              </AccordionContent>
            </AccordionItem>

            {/* Item 3 */}
            <AccordionItem
              value="item-3"
              className="border border-white/20 bg-white/5 rounded-3xl px-6 transition-all"
            >
              <AccordionTrigger className="py-5 hover:no-underline">
                <span className="text-lg md:text-xl font-medium text-slate-200">
                  Can you convert designs into functional websites?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-400 text-lg leading-relaxed">
                Absolutely! I can transform Figma, Adobe XD, or any design into
                a fully functional, pixel-perfect website with smooth animations
                and optimized performance.
              </AccordionContent>
            </AccordionItem>

            {/* Item 4 */}
            <AccordionItem
              value="item-4"
              className="border border-white/20 bg-white/5 rounded-3xl px-6 transition-all"
            >
              <AccordionTrigger className="py-5 hover:no-underline">
                <span className="text-lg md:text-xl font-medium text-slate-200">
                  What makes your frontend development unique?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-400 text-lg leading-relaxed">
                I focus on user-centric design, smooth interactions, and clean
                UI aesthetics. My goal is not just to build websites, but to
                create engaging digital experiences that feel modern and
                intuitive.
              </AccordionContent>
            </AccordionItem>

            {/* Item 5 */}
            <AccordionItem
              value="item-5"
              className="border border-white/20 bg-white/5 rounded-3xl px-6 transition-all"
            >
              <AccordionTrigger className="py-5 hover:no-underline">
                <span className="text-lg md:text-xl font-medium text-slate-200">
                  Are you available for freelance or collaboration?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-slate-400 text-lg leading-relaxed">
                Yes, I am open to freelance projects, internships, and
                collaborations. Feel free to reach out through the contact
                section—I'd love to work on exciting ideas and bring them to
                life.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
