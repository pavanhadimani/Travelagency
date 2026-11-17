import Hero from "@/components/home/Hero";
import StatsCounters from "@/components/home/StatsCounters";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedTourPackages from "@/components/home/FeaturedTourPackages";
import TravelCategories from "@/components/home/TravelCategories";
import TravelExperienceTimeline from "@/components/home/TravelExperienceTimeline";
import CustomerTestimonials from "@/components/home/CustomerTestimonials";
import TravelGallery from "@/components/home/TravelGallery";
import LatestBlogs from "@/components/home/LatestBlogs";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import AuthModal from "@/components/home/AuthModal";

export default function Home() {
  return (
    <div className="w-full">
      <AuthModal />
      <Hero />
      <StatsCounters />
      <PopularDestinations />
      <WhyChooseUs />
      <FeaturedTourPackages />
      <TravelCategories />
      <TravelExperienceTimeline />
      <CustomerTestimonials />
      <TravelGallery />
      <LatestBlogs />
      <FAQ />
      <Contact />
    </div>
  );
}
