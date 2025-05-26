import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import Accommodations from "@/components/sections/Accommodations";
import Amenities from "@/components/sections/Amenities";
import Gallery from "@/components/sections/Gallery";
import EventsSection from "@/components/sections/EventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";
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
      <Gallery />
      <EventsSection />
      <TestimonialsSection />
      <LocationSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}