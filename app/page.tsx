import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Ide_website from "@/components/Home/Ide_website";
import Paket from "@/components/Home/Paket";
import Pertayaan from "@/components/Home/Pertayaan";
import Slide from "@/components/Home/Slide";



export default function Home() {
  return (
    <div>
      <Hero />
      <Ide_website />
      <Pertayaan />
      <Paket />
      <Slide />
      <Footer />

    </div>
  );
}
