import { Pizza } from "lucide-react";
import React from "react";

const DemoSection = () => {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(48% 0%, 61% 7%, 78% 4%, 95% 18%, 100% 39%, 92% 59%, 74% 71%, 59% 88%, 41% 100%, 24% 92%, 10% 77%, 2% 58%, 0% 37%, 9% 20%, 27% 8%)",
            }}
            className="absolute left-1/2 top-1/2 w-[100rem] aspect-[1155/678] -translate-x-1/2 -translate-y-1/2 rotate-[15deg] bg-gradient-to-br from-emerald-500 via-teal-400 to-cyan-200 opacity-30 blur-3xl"
          />
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border broder-gray-500/20 mb-4">
            <Pizza className="w-6 h-6 text-rose-500" />
          </div>
          <div className="text-center mb-16">
            <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6">
              Watch how Sommaire transforms this{" "}
              <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                Next.js course PDF
              </span>{" "}
              into an easy-to-read summary!
            </h3>
          </div>

          <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
            {/* Summary View */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
