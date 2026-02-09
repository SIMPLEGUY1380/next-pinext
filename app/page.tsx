import Navbar from "@/components/home/Navbar";
import AudienceSection from "@/components/home/AudienceSection";
import QuoteBanner from "@/components/home/QuoteBanner";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Articles from "@/components/home/Articles";
import ContactUs from "@/components/home/ContactUs";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <div>
      <Navbar />
      <span className="h-25 w-full block"></span>
      <AudienceSection />
      <span className="h-35 w-full block"></span>

      <button className="gradient-box gap-4">
        <h5 className="text-text">خدمات</h5>
        <span className="block w-3 h-3 bg-primary rounded-full"></span>
      </button>

      <span className="h-5 w-full block"></span>
      <QuoteBanner />
      <span className="h-12.5 md:h-32.5 w-full block"></span>
      <Services />
      <span className="h-32.5 w-full block"></span>
      <Portfolio />
      <span className="h-37.5 w-full block"></span>
      <Articles />
      <span className="h-46.25 w-full block"></span>
      <ContactUs />
      <span className="h-46.25 w-full block"></span>
      <FAQ />
      <span className="h-30 w-full block"></span>
    </div>
  );
}
