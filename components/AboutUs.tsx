export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-screen overflow-hidden font-albert-sans">
      <div className="flex flex-col lg:flex-row gap-x-20">
        {/* Left Column */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-full h-[602px] bg-stone-300 mt-[73px]"></div>
            <div className="w-full h-80 bg-stone-300 mt-20"></div>
            <div className="flex items-center gap-6 mt-24">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12H4M4 12L10 6M4 12L10 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <span className="text-stone-900 text-3xl font-medium font-['Albert_Sans'] uppercase">
                  01
                </span>
                <span className="text-stone-900 text-xl font-medium font-['Albert_Sans'] uppercase">
                  {" "}
                  / 08
                </span>
              </div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-grow flex flex-col mt-8 lg:mt-0">
          <div className="flex flex-col xl:flex-row gap-8">
            <div className="w-72 h-96 bg-stone-300 flex-shrink-0"></div>
            <div className="flex-grow flex flex-col">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <div className="justify-start">
                    <span className="text-stone-900 text-3xl font-medium font-['Albert_Sans'] uppercase">
                      4.9
                    </span>
                    <span className="text-stone-900 text-xl font-medium font-['Albert_Sans'] uppercase">
                      /5.0
                    </span>
                  </div>
                  <div className="inline-flex justify-start items-center gap-1.5 mt-4">
                    <div className="size-8 bg-stone-300 rounded-full" />
                    <div className="size-8 bg-stone-300 rounded-full" />
                    <div className="size-8 bg-stone-300 rounded-full" />
                    <div className="size-8 bg-stone-900 rounded-full" />
                    <div className="size-8 bg-stone-300 rounded-full flex items-center justify-center text-sm">
                      +
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-96 opacity-70 text-stone-900 text-xl font-normal font-['Albert_Sans']">
                  Lorem ipsum dolor sit amet, consecte adipiscin elit, sed do
                  eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                  enim minim
                </div>
              </div>
              <div className="mt-8 text-stone-900 text-4xl font-normal font-['Albert_Sans'] uppercase max-w-lg">
                The Eye Behind the Camera, the Heart in Every Shot.
              </div>
            </div>
            <div className="relative self-start mt-8 xl:ml-auto">
              <div className="size-16 rounded-full border-2 border-stone-900" />
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="px-2.5 py-1.5 bg-stone-50 inline-flex justify-center items-center gap-2.5">
                  <div className="text-stone-900 text-xl font-medium font-['Albert_Sans'] uppercase">
                    Explore now
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="text-stone-900 text-2xl font-medium font-['Albert_Sans'] uppercase leading-9">
              Welcome to a world where every frame captures the beauty, emotion,
              and story of your most cherished moments. Let my lens transform
              your memories into timeless works of art. Let my lens transform
            </div>
            <div className="inline-flex justify-start items-center gap-4 mt-4">
              <div className="text-stone-900 text-xl font-medium font-['Albert_Sans'] uppercase">
                Read More
              </div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="mt-20 h-[485px] bg-stone-300"></div>
        </div>
      </div>
    </div>
  );
}
