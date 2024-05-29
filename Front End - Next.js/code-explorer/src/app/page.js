import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionContact from "@/components/SectionContact";
import SectionGallery from "@/components/SectionGallery";
import SectionHero from "@/components/SectionHero";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionGallery />
      <SectionContact />
      <Footer />
    </>
  );
}
