import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <div id="FAQs" className="py-20 px-6 md:px-10 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-4 py-20 md:py-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Grid */}
          <div className="space-y-15">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight leading-tight">
                Frequently asked <br />
                <span className="text-slate-400">questions</span>
              </h1>
            </div>

            {/* Still have questions? */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 transition-all hover:border-cyan-500/30">
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold">
                  Still have a questions?
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Can't find the answer to your question? Send us an email and
                  we'll get back to you as soon as possible.
                </p>
                {/* Email Button */}
                <Link
                  target="_blank"
                  to="#"
                  onClick={(e) => {
                    window.location.href = "mailto:hudahaider303@gmail.com";
                    e.preventDefault();
                  }}
                >
                  <button className="mt-4 flex items-center gap-2 px-8 py-4 bg-linear-to-r from-indigo-600 to-cyan-600 rounded-2xl font-semibold hover:opacity-90 transition-opacity">
                    Send email
                  </button>
                </Link>
              </div>
              {/* hover */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-600/20 blur-[80px] group-hover:bg-cyan-600/40 transition-all" />
            </div>
          </div>

          {/* Right Grid */}
          <div>
            <Accordion
              type="single"
              collapsible
              className="w-full mx-auto space-y-4"
            >
              {/* Item 1 */}
              <AccordionItem
                value="item-1"
                className="border border-white/20 bg-white/5 rounded-3xl px-6 transition-all"
              >
                <AccordionTrigger className="py-6 hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4 text-left">
                    <span className="text-lg md:text-xl font-medium text-slate-200">
                      How do I get started with the platform?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-slate-400 text-lg leading-relaxed">
                  Simply sign up for an account and connect your data sources to
                  begin generating insights immediately.
                </AccordionContent>
              </AccordionItem>

              {/* Item 2 */}
              <AccordionItem
                value="item-2"
                className="border border-white/20 bg-white/5 rounded-3xl px-6 transition-all"
              >
                <AccordionTrigger className="py-6 hover:no-underline ">
                  <div className="flex items-center justify-between w-full pr-4 text-left">
                    <span className="text-lg md:text-xl font-medium text-slate-200">
                      How do I get started with the platform?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-slate-400 text-lg leading-relaxed">
                  Simply sign up for an account and connect your data sources to
                  begin generating insights immediately.
                </AccordionContent>
              </AccordionItem>

              {/* Item 3 */}
              <AccordionItem
                value="item-3"
                className="border border-white/20 bg-white/5 rounded-3xl px-6 transition-all "
              >
                <AccordionTrigger className="py-6 hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4 text-left">
                    <span className="text-lg md:text-xl font-medium text-slate-200">
                      How do I get started with the platform?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-slate-400 text-lg leading-relaxed">
                  Simply sign up for an account and connect your data sources to
                  begin generating insights immediately.
                </AccordionContent>
              </AccordionItem>

              {/* Item 4 */}
              <AccordionItem
                value="item-4"
                className="border border-white/20 bg-white/5 rounded-3xl px-6 transition-all "
              >
                <AccordionTrigger className="py-6 hover:no-underline ">
                  <div className="flex items-center justify-between w-full pr-4 text-left">
                    <span className="text-lg md:text-xl font-medium text-slate-200">
                      How do I get started with the platform?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-slate-400 text-lg leading-relaxed">
                  Simply sign up for an account and connect your data sources to
                  begin generating insights immediately.
                </AccordionContent>
              </AccordionItem>

              {/* Item 5 */}
              <AccordionItem
                value="item-5"
                className="border border-white/20 bg-white/5 rounded-3xl px-6 transition-all "
              >
                <AccordionTrigger className="py-6 hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4 text-left">
                    <span className="text-lg md:text-xl font-medium text-slate-200">
                      How do I get started with the platform?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-slate-400 text-lg leading-relaxed">
                  Simply sign up for an account and connect your data sources to
                  begin generating insights immediately.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
