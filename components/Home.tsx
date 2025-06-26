import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground max-w-screen overflow-hidden font-albert-sans px-4 sm:px-6">
      <section className="min-h-screen flex flex-col lg:grid lg:grid-cols-7 lg:grid-rows-5 gap-4 lg:gap-x-6">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col space-y-8 py-8">
          {/* Mobile Quote */}
          <h1 className="text-lg sm:text-xl font-light italic leading-relaxed text-gray-900 px-2">
            PHOTOGRAPHY ISN&apos;T JUST ABOUT TAKING PICTURES; IT&apos;S ABOUT TELLING
            YOUR STORY. LET&apos;S CREATE SOMETHING EXTRAORDINARY TOGETHER, ONE
            SHOT AT A TIME.
          </h1>
          
          {/* Mobile Main Image */}
          <div className="relative bg-[#c4c4c4] h-64 sm:h-80 mx-2">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Photography hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Mobile Content */}
          <div className="px-2 space-y-6">
            <div className="w-20 h-1 bg-black"></div>
            <h2 className="text-xl sm:text-2xl font-medium font-albert-sans text-foreground">
              PASSION MEETS PRECISION{"\n"}
              BEHIND EVERY SHOT.
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt labore et dolore magna aliqua. Ut
              enim minim
            </p>
            <div className="w-full sm:w-48 h-12 sm:h-14 p-2.5 bg-[#1a1919] flex justify-center items-center">
              <div className="text-[#fcfcf6] text-lg sm:text-xl font-medium font-albert-sans">
                Get Started
              </div>
            </div>
          </div>
          
          {/* Mobile Secondary Image */}
          <div className="mx-2 h-64 sm:h-80 bg-[#c4c4c4]" />
          
          {/* Mobile Explore Button */}
          <div className="flex justify-center px-2">
            <button className="group flex items-center hover:scale-105 transition-transform duration-300">
              <div className="relative size-16 sm:size-20 flex-shrink-0">
                <svg
                  className="transition-transform duration-500 ease-in-out group-hover:rotate-180 group-hover:scale-110"
                  width="100%"
                  height="100%"
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
              <span className="relative -ml-6 bg-background text-foreground py-1 pl-2 pr-4 text-lg sm:text-xl font-medium uppercase transition-colors duration-300">
                Explore now
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Layout - Left Image */}
        <div className="hidden lg:block relative bg-[#c4c4c4] col-span-3 row-span-4">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Photography hero image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop Layout - Right Content */}
        <div className="hidden lg:block col-span-4 row-span-4">
          {/* Top Quote */}
          <div className="grid grid-cols-2 grid-rows-5 h-full">
            <h1 className="col-span-2 row-span-1 text-2xl lg:text-3xl xl:text-4xl font-light italic leading-relaxed text-gray-900 mb-8">
              PHOTOGRAPHY ISN&apos;T JUST ABOUT TAKING PICTURES; IT&apos;S ABOUT TELLING
              YOUR STORY. LET&apos;S CREATE SOMETHING EXTRAORDINARY TOGETHER, ONE
              SHOT AT A TIME.
            </h1>
            {/* left side */}
            <div className="col-span-1 row-span-4 grid grid-cols-5 grid-rows-8 max-h-[800px]">
              {/* Middle Section with Vertical Text */}
              <div className="col-span-1 row-span-8">
                {/* Vertical PHOTOGRAPHER text */}
                <div
                  className="text-6xl xl:text-8xl font-bold text-foreground opacity-10 select-none"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                  }}
                >
                  PHOTOGRAPHER
                </div>
              </div>
              <div className="row-span-4"></div>
              <div className="col-span-4 row-span-4 h-full">
                <div className="space-y-6 flex flex-col justify-between h-full">
                  <div className="pl-6">
                    <div className="w-30 h-1 mb-4 bg-black"></div>
                    <h2 className="text-xl xl:text-2xl font-medium font-albert-sans text-foreground mb-2">
                      PASSION MEETS PRECISION{"\n"}
                      BEHIND EVERY SHOT.
                    </h2>
                  </div>
                  <div className="flex flex-col items-end gap-4 flex-shrink-0">
                    <button className="group flex items-center hover:scale-105 transition-transform duration-300">
                      <div className="relative size-20 xl:size-24 flex-shrink-0">
                        <svg
                          className="transition-transform duration-500 ease-in-out group-hover:rotate-180 group-hover:scale-110"
                          width="100%"
                          height="100%"
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
                      <span className="relative -ml-6 xl:-ml-8 bg-background text-foreground py-1 pl-2 pr-4 text-lg xl:text-xl font-medium uppercase transition-colors duration-300">
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
                <p className="text-gray-600 leading-relaxed text-sm xl:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                  enim minim
                </p>
                <div className="w-40 xl:w-48 h-12 xl:h-14 p-2.5 bg-[#1a1919] inline-flex justify-center items-center gap-2.5">
                  <div className="justify-start text-[#fcfcf6] text-lg xl:text-xl font-medium font-albert-sans">
                    Get Started
                  </div>
                </div>
              </div>
              <div className="w-full max-w-sm xl:w-96 h-80 xl:h-[537px] bg-[#c4c4c4]" />
            </div>
          </div>
        </div>
        
        {/* Bottom Full-Width Text */}
        <div className="col-span-7 row-span-1 flex items-center justify-center px-4 lg:px-8 xl:px-16 py-8 lg:py-0">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-black text-gray-900 leading-none text-center">
            PORGHER STUDIO
          </h2>
        </div>
      </section>
    </div>
  );
}
