import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Location from "@/components/Location";
import Pricing from "@/components/Pricing";
import System from "@/components/System";
import Flow from "@/components/Flow";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <System />
      <Flow />
      <Testimonials />
      <FAQ />
      <Overview />
      <Location />
    </>
  );
}
