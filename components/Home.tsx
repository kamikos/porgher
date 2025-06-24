import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground max-w-screen overflow-hidden font-albert-sans px-6">
      <section className="grid min-h-screen grid-cols-7 grid-rows-5 gap-x-6">
        {/* Left Image */}
        <div className="relative bg-[#c4c4c4] col-span-3 row-span-4">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Photography hero image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="col-span-4 row-span-4">
          {/* Top Quote */}
          <div className="grid grid-cols-2 grid-rows-5">
            <h1 className="col-span-2 row-span-1 text-2xl lg:text-3xl font-light italic leading-relaxed text-gray-900">
              PHOTOGRAPHY ISN'T JUST ABOUT TAKING PICTURES; IT'S ABOUT TELLING
              YOUR STORY. LET'S CREATE SOMETHING EXTRAORDINARY TOGETHER, ONE
              SHOT AT A TIME.
            </h1>
            {/* left side */}
            <div className="col-span-1 row-span-4 grid grid-cols-5 grid-rows-8 max-h-[800px]">
              {/* Middle Section with Vertical Text */}
              <div className="col-span-1 row-span-8">
                {/* Vertical PHOTOGRAPHER text */}
                <div
                  className="text-8xl font-bold text-foreground opacity-10 select-none"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                  }}
                >
                  PHOTOGRAPHER
                </div>
              </div>
              <div className="row-span-5"></div>
              <div className="col-span-4 row-span-3">
                <div className="space-y-6">
                  <div className="w-26 h-px bg-black"></div>
                  <div>
                    <h2 className="text-2xl font-medium font-albert-sans text-foreground mb-2">
                      PASSION MEETS PRECISION{"\n"}
                      BEHIND EVERY SHOT.
                    </h2>
                  </div>
                  <div className="hidden md:flex flex-col items-center gap-4 flex-shrink-0">
                    <button className="group flex items-center hover:scale-105 transition-transform duration-300">
                      <div className="relative size-24 flex-shrink-0">
                        <svg
                          className="transition-transform duration-500 ease-in-out group-hover:rotate-180 group-hover:scale-110"
                          width="94"
                          height="94"
                          viewBox="0 0 94 94"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="47"
                            cy="47"
                            r="45.5"
                            stroke="#1a1919"
                            strokeWidth="3"
                            className="transition-colors duration-300 group-hover:stroke-[#1a1919]"
                          />
                        </svg>
                      </div>
                      <span className="relative -ml-8 bg-background text-foreground py-1 pl-2 pr-4 text-xl font-medium uppercase transition-colors duration-300">
                        Explore now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="col-span-1 row-span-4 flex flex-col justify-between items-start">
              <div className="flex flex-col items-start max-w-md space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                  enim minim
                </p>
                <div className="w-48 h-14 p-2.5 bg-[#1a1919] inline-flex justify-center items-center gap-2.5">
                  <div className="justify-start text-[#fcfcf6] text-xl font-medium font-albert-sans">
                    Get Started
                  </div>
                </div>
              </div>
              <div className="w-96 h-[537px] bg-[#c4c4c4]" />
            </div>
          </div>
        </div>
        {/* Bottom Full-Width Text */}
        <div className="col-span-7 row-span-1 flex items-center justify-center px-8 lg:px-16">
          <h2 className="text-6xl lg:text-8xl xl:text-9xl font-black text-gray-900 leading-none">
            PORGHER STUDIO
          </h2>
        </div>
      </section>
    </div>
  );
}
