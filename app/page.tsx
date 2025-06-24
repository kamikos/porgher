import Header from "@/components/Header";
import Home from "@/components/Home";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import OurServices from "@/components/OurServices";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Home />
      <AboutUs />
      <Services />
      <OurServices />
      <Gallery />
      <Footer />
    </div>
  );
}
