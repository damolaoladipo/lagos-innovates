import AboutUs from "@/components/sections/about-us";
import Footer  from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import Programs from "@/components/sections/programs";
import StatisticsSection  from "@/components/sections/statistics";
import Testimonials from "@/components/sections/testimonials";



export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-green text-foreground">
      
        <HeroSection />
        <AboutUs/>
        <StatisticsSection/>
        <Programs/>
        <Testimonials/>
        <Footer/>
      
    </main>
  );
}
