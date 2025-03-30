import Hero from "@/components/hero"
import ImpactStats from "@/components/impact-stats"
import AboutSection from "@/components/about-section"
import MentorsSection from "@/components/mentors-section"
import EventsSection from "@/components/events-section"
import HallOfFameSection from "@/components/hall-of-fame-section"
import TestimonialsSection from "@/components/testimonials-sections"
import JoinSection from "@/components/join-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contect-section"
import FaqSection from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ImpactStats />
      <AboutSection />
      <MentorsSection />
      <EventsSection />
      <HallOfFameSection />
      <TestimonialsSection />
      <JoinSection />
      <GallerySection />
      <ContactSection />
      <FaqSection />
    </main>
  )
}

