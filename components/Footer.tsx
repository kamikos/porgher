export default function Footer() {
  return (
    <footer id="footer" className="max-w-screen relative bg-foreground text-background py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center min-h-[600px] sm:min-h-[700px] lg:min-h-[880px]">
      <div className="absolute inset-0 top-200 flex justify-center items-center z-0">
        <h3 className="opacity-10 text-center text-background text-[8vw] sm:text-[10vw] md:text-[12vw] lg:text-[180px] xl:text-[250px] font-bold font-albert-sans uppercase whitespace-nowrap">
          Photographer Portfolio
        </h3>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-8 sm:gap-12 lg:gap-14">
        <h2 className="max-w-7xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-normal font-albert-sans uppercase leading-tight">
          LET&apos;S COLLABORATE ON YOUR NEXT BIG IDEA.
        </h2>
        <button className="w-full sm:w-80 h-16 sm:h-20 p-2.5 bg-background inline-flex justify-center items-center gap-2.5 group transition-all duration-300 hover:bg-transparent border-2 border-transparent hover:border-foreground">
          <span className="text-center text-foreground text-lg sm:text-xl font-medium font-albert-sans uppercase group-hover:text-background transition-colors duration-300">
            CONTACT NOW
          </span>
        </button>
      </div>
    </footer>
  );
}
