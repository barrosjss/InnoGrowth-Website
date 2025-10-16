import AboutSection from "@/components/about-section";
import AppointmentModal from "@/components/appointment-modal";
import BlogSection from "@/components/blog-section";
import ClientsSection from "@/components/clients-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroGeometric from "@/components/hero-geometric";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projects-section";
import ServicesSection from "@/components/services-section";
import TeamSection from "@/components/team-section";

export default function Home() {
  return (
    <>
      <HeroGeometric />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ProjectsSection />
      <ClientsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <Navbar />
      <AppointmentModal />
    </>
  );
}
