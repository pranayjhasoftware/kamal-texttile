import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TextileJourney from "@/components/TextileJourney";
import Products from "@/components/Products";
import Manufacturing from "@/components/Manufacturing";
import Facility from "@/components/Facility";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <TextileJourney />

      <Products />

      <Manufacturing />

      <Facility />

      <About />

      <Contact />
    </main>
  );
}