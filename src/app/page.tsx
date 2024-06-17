import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Speed from "@/components/Services/Speed";
import Safety from "@/components/Services/Safety";
import Gallery from "@/components/Services/Gallery";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import BtnToTop from "@/components/ui/BtnToTop";

export default function Home() {
  return (
    <>
      <BtnToTop />
      <Header />
      <Hero />
      <Speed />
      <Safety />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
