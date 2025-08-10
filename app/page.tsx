import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import Accommodations from "@/components/sections/Accommodations";
import Amenities from "@/components/sections/Amenities";
import EventsSection from "@/components/sections/EventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LocationSection from "@/components/sections/LocationSection";
import FaqSection from "@/components/sections/FaqSection";
import jsonLd from "@/lib/jsonLd";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutSection />
      <Accommodations />
      <Amenities />
      <EventsSection />
      <TestimonialsSection />
      <FaqSection />
      <LocationSection />
    </>
  );
}