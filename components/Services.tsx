export default function Services() {
  const PortraitIcon = (
    <svg
      className="size-12"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 15V9L15 12L10 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );

  const EventIcon = (
    <svg
      className="size-12"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8C2 5.17157 2 3.75736 2.87868 2.87868C3.75736 2 5.17157 2 8 2H16C18.8284 2 20.2426 2 21.1213 2.87868C22 3.75736 22 5.17157 22 8V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16V8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );

  const ProductIcon = (
    <svg
      className="size-12"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 19V8.2C5 7.0799 5.89543 6.2 7 6.2H17C18.1046 6.2 19 7.0799 19 8.2V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6.2V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 19H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 11L12 14L10 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const LifestyleIcon = (
    <svg
      className="size-12"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 10.4C17.5 12.1673 16.0673 13.6 14.3 13.6C12.5327 13.6 11.1 12.1673 11.1 10.4C11.1 8.63269 12.5327 7.2 14.3 7.2C16.0673 7.2 17.5 8.63269 17.5 10.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13.3008 11.3999L14.3008 9.3999L15.3008 11.3999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7012 10.7H14.9012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 18V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 18V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 18V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const services = [
    {
      title: "Portrait Photography",
      description: "Showcase your personality with stunning portraits.",
      icon: PortraitIcon,
      staggered: false,
      highlighted: false,
    },
    {
      title: "Event Photography",
      description: "Showcase your personality with stunning portraits.",
      icon: EventIcon,
      staggered: true,
      highlighted: false,
    },
    {
      title: "Product Photography",
      description: "Showcase your personality with stunning portraits.",
      icon: ProductIcon,
      staggered: false,
      highlighted: true,
    },
    {
      title: "Lifestyle Photography",
      description: "Showcase your personality with stunning portraits.",
      icon: LifestyleIcon,
      staggered: true,
      highlighted: false,
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#1a1919] text-[#fcfcf6] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="w-full max-w-2xl text-5xl md:text-6xl font-normal font-['Albert_Sans'] uppercase">
            Creative Photography, Tailored for You.
          </h2>
          <div className="hidden md:flex flex-col items-center gap-4 flex-shrink-0">
            <button className="relative group size-32 rounded-full border-2 border-[#fcfcf6] flex items-center justify-center text-xl font-medium font-['Albert_Sans'] uppercase">
              <div className="absolute size-full rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 bg-[#fcfcf6]"></div>
              <span className="relative group-hover:text-[#1a1919] transition-colors duration-300">
                Explore now
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 grid-rows-5">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 flex flex-col justify-between min-h-[480px] transition-colors duration-300 row-span-4 grid-col-${index + 1} ${
                service.staggered ? "row-start-2" : `row-start-1`
              } ${
                service.highlighted
                  ? "bg-stone-200 text-stone-900"
                  : "border border-[#fcfcf6]"
              }`}
            >
              <div>
                <div className="mb-8">{service.icon}</div>
                <h3 className="text-3xl font-medium font-['Albert_Sans'] uppercase mb-4">
                  {service.title}
                </h3>
                <p className="opacity-70 text-xl font-normal font-['Albert_Sans'] mb-4">
                  {service.description}
                </p>
              </div>
              <a
                href="#"
                className="inline-flex justify-start items-center gap-4 group"
              >
                <span
                  className={`text-xl font-medium font-['Albert_Sans'] uppercase ${
                    service.highlighted ? "text-stone-900" : "text-[#fcfcf6]"
                  }`}
                >
                  Read More
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-2"
                >
                  <path
                    d="M4 12H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 6L20 12L14 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
