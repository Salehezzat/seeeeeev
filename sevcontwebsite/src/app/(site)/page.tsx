import { Hero } from "@/components/home/hero";
import { SolutionsSection } from "@/components/home/solutions-section";
import { WhySevcont } from "@/components/home/why-sevcont";
import { GlobalPresence } from "@/components/home/global-presence";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { TrustedProcess } from "@/components/home/trusted-process";
import { TrustedBy } from "@/components/home/trusted-by";
import { InsightsSection } from "@/components/home/insights-section";
import { ContactCta } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsSection />
      <WhySevcont />
      <GlobalPresence />
      <FeaturedProjects />
      <TrustedProcess />
      <TrustedBy />
      <InsightsSection />
      <ContactCta />
    </>
  );
}
