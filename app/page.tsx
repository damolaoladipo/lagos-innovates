import AboutUs from "@/components/sections/about-us";
import HeroSection from "@/components/sections/hero-section";


export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-green text-foreground">
      
      <HeroSection />
      <AboutUs/>
      
      
    </main>
  );
}
