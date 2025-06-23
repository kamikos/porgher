import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="grid min-h-screen grid-cols-7 grid-rows-6">
        {/* Left Image */}
        <div className="relative bg-gray-300 col-span-3 row-span-4">
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
                  className="text-8xl font-bold text-gray-200 select-none"
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
                  <div className="w-16 h-px bg-black"></div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      PASSION MEETS PRECISION
                    </h2>
                    <p className="text-lg text-gray-900">BEHIND EVERY SHOT.</p>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-white text-black border-black hover:bg-gray-50 px-8 py-3 rounded-full"
                  >
                    EXPLORE NOW
                  </Button>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="col-span-1 row-span-4 flex flex-col justify-between items-center">
                  <div>
                    <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                    enim minim
                    </p>
                    <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                    Get Started
                    </Button>

                  </div>
                <div className="w-48 h-64 lg:w-64 lg:h-80 relative bg-gray-300 ml-8">
                  <Image
                    src="/placeholder.svg?height=320&width=256"
                    alt="Photography sample"
                    fill
                    className="object-cover"
                  />
                </div>
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
