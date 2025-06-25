"use client";
import { useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = [
    "https://picsum.photos/800/600?random=1",
    "https://picsum.photos/800/600?random=2",
    "https://picsum.photos/800/600?random=3",
    "https://picsum.photos/800/600?random=4",
    "https://picsum.photos/800/600?random=9",
    "https://picsum.photos/800/600?random=6",
    "https://picsum.photos/800/600?random=7",
    "https://picsum.photos/800/600?random=8",
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-[1920px] bg-[#fcfcf6] overflow-hidden font-albert-sans">
      <div className="flex flex-col gap-y-12">
        {/* Top Row: Placeholder + Main Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Placeholders (tall) */}
          <div className="flex-shrink-0 flex flex-row gap-6 mt-16">
            <div className="w-96 h-full bg-[#c4c4c4] " />
          </div>
          {/* Main Content */}
          <div className="flex-grow flex flex-col lg:ml-16">
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="flex-grow flex flex-col">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="w-72 h-96 bg-[#c4c4c4]" />
                  <div>
                    <div className="justify-start">
                      <span className="text-stone-900 text-3xl font-medium uppercase">
                        4.9
                      </span>
                      <span className="text-stone-900 text-xl font-medium uppercase">
                        /5.0
                      </span>
                    </div>
                    {/* 4/5 stars */}
                    <div className="inline-flex justify-start items-center gap-1.5 mt-2">
                      <svg
                        width="23"
                        height="21"
                        viewBox="0 0 23 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3333 0.333374L13.8778 8.16451H22.112L15.4504 13.0044L17.9949 20.8356L11.3333 15.9957L4.67177 20.8356L7.21626 13.0044L0.554693 8.16451H8.78884L11.3333 0.333374Z"
                          fill="#1A1919"
                        />
                      </svg>
                      <svg
                        width="23"
                        height="21"
                        viewBox="0 0 23 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3333 0.333374L13.8778 8.16451H22.112L15.4504 13.0044L17.9949 20.8356L11.3333 15.9957L4.67177 20.8356L7.21626 13.0044L0.554693 8.16451H8.78884L11.3333 0.333374Z"
                          fill="#1A1919"
                        />
                      </svg>
                      <svg
                        width="23"
                        height="21"
                        viewBox="0 0 23 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3333 0.333374L13.8778 8.16451H22.112L15.4504 13.0044L17.9949 20.8356L11.3333 15.9957L4.67177 20.8356L7.21626 13.0044L0.554693 8.16451H8.78884L11.3333 0.333374Z"
                          fill="#1A1919"
                        />
                      </svg>
                      <svg
                        width="23"
                        height="21"
                        viewBox="0 0 23 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3333 0.333374L13.8778 8.16451H22.112L15.4504 13.0044L17.9949 20.8356L11.3333 15.9957L4.67177 20.8356L7.21626 13.0044L0.554693 8.16451H8.78884L11.3333 0.333374Z"
                          fill="#1A1919"
                        />
                      </svg>
                      <svg
                        width="23"
                        height="21"
                        viewBox="0 0 23 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.6722 8.33923L13.7992 8.73083H20.7025L15.4505 12.5463L15.1175 12.7885L15.2445 13.1791L17.2503 19.3519L11.9994 15.5375L11.6663 15.2953L11.3333 15.5375L6.08236 19.3519L8.08822 13.1791L8.21615 12.7885L7.88314 12.5463L2.63119 8.73083H9.53353L9.66146 8.33923L11.6663 2.16638L13.6722 8.33923Z"
                          stroke="#1A1919"
                          strokeWidth="1.13333"
                        />
                      </svg>
                    </div>
                    <div className="inline-flex justify-start items-center gap-1.5 mt-4 w-full">
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="27.865" cy="27.865" r="27.865" fill="#C4C4C4"/>
</svg>
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-4">
<circle cx="27.865" cy="27.865" r="27.865" fill="#C4C4C4"/>
</svg>
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-4">
<circle cx="27.865" cy="27.865" r="27.865" fill="#C4C4C4"/>
</svg>

<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-4">
<circle cx="28.0547" cy="27.865" r="27.07" fill="#1A1919" stroke="#FCFCF6" stroke-width="1.59"/>
<path d="M28 19L28 37M37 28L19 28" stroke="#FCFCF6" stroke-width="2"/>
</svg>

                    </div>
                    <div className="mt-8 text-foreground text-4xl font-normal uppercase max-w-[528px]">
                      The Eye Behind the Camera, the Heart in Every Shot.
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-start gap-4 mt-8 sm:mt-0">
                    <div className="w-full sm:w-96 opacity-70 text-foreground text-xl font-normal ">
                      Lorem ipsum dolor sit amet, consecte adipiscin elit, sed do
                      eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                      enim minim
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
            </div>
            {/* Welcome text and Read More */}
            <div className="mt-12 max-w-[1192px]">
              <div className="text-foreground text-2xl font-medium uppercase leading-9">
                Welcome to a world where every frame captures the beauty,
                emotion, and story of your most cherished moments. Let my lens
                transform your memories into timeless works of art. Let my lens
                transform
              </div>
              <div className="inline-flex justify-start items-center gap-4 mt-4">
                <div className="text-stone-900 text-xl font-medium uppercase">
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
          </div>
        </div>
        {/* Bottom Row: Gallery + Placeholder */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Gallery - bottom left */}
          <div className="w-96 flex flex-col items-center md:items-start">
            <div className="w-full h-80 md:h-[320px] bg-stone-300 ">
              <Image
                src={photos[photoIndex]}
                alt="Random"
                width={700}
                height={320}
                className="w-full h-full object-cover "
              />
            </div>
            <div className="flex items-center justify-end w-full gap-6 mt-6">
              <svg
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setPhotoIndex((prevIndex) =>
                    prevIndex > 0 ? prevIndex - 1 : photos.length - 1
                  );
                }}
              >
                <mask
                  id="mask0_6_102"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="61"
                  height="61"
                >
                  <rect
                    width="61"
                    height="61"
                    transform="matrix(-1 0 0 1 61 0)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_6_102)">
                  <path
                    d="M25.4166 45.75L28.975 42.0646L19.9521 33.0417H50.8333V27.9583H19.9521L28.975 18.9354L25.4166 15.25L10.1666 30.5L25.4166 45.75Z"
                    fill="#1A1919"
                  />
                </g>
              </svg>

              <svg
                width="113"
                height="61"
                viewBox="0 0 113 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setPhotoIndex((prevIndex) =>
                    prevIndex < photos.length - 1 ? prevIndex + 1 : 0
                  );
                }}
              >
                <mask
                  id="mask0_6_98"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="113"
                  height="61"
                >
                  <rect width="113" height="61" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_6_98)">
                  <path
                    d="M87.7499 45.75L84.1916 42.0646L93.2145 33.0417H0V27.9583H93.2145L84.1916 18.9354L87.7499 15.25L103 30.5L87.7499 45.75Z"
                    fill="#1A1919"
                  />
                </g>
              </svg>
            </div>
            <div className="flex items-end justify-end w-full gap-2">
              <span className="text-stone-900 text-3xl font-medium uppercase">
                0{photoIndex + 1}
              </span>
              <span className="text-stone-900 text-xl font-medium uppercase">
                {" "}
                / 0{photos.length}
              </span>
            </div>
          </div>
          {/* Bottom right placeholder */}
          <div className="w-full md:flex-1 flex flex-col justify-start">
            <div className="w-full h-80 md:h-full bg-stone-300 " />
          </div>
        </div>
      </div>
    </div>
  );
}
