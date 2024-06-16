import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Speed from "@/components/Services/Speed";
import Safety from "@/components/Services/Safety";
import Gallery from "@/components/Services/Gallery";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Speed />
      <Safety />
      <Gallery />
      <Contact />
    </>
  );
}
