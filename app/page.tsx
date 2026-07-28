import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/sections/footer";
import { SectionSkeleton } from "@/components/ui/section-skeleton";

const About = dynamic(
  () => import("@/components/sections/about").then((m) => m.About),
  { loading: () => <SectionSkeleton /> }
);
const Services = dynamic(
  () => import("@/components/sections/services").then((m) => m.Services),
  { loading: () => <SectionSkeleton /> }
);
const WhyChooseUs = dynamic(
  () => import("@/components/sections/why-choose").then((m) => m.WhyChooseUs),
  { loading: () => <SectionSkeleton /> }
);
const Products = dynamic(
  () => import("@/components/sections/products").then((m) => m.Products),
  { loading: () => <SectionSkeleton /> }
);
const Projects = dynamic(
  () => import("@/components/sections/projects").then((m) => m.Projects),
  { loading: () => <SectionSkeleton /> }
);
const Statistics = dynamic(
  () => import("@/components/sections/statistics").then((m) => m.Statistics),
  { loading: () => <SectionSkeleton height="h-56" /> }
);
const Process = dynamic(
  () => import("@/components/sections/process").then((m) => m.Process),
  { loading: () => <SectionSkeleton /> }
);
const Testimonials = dynamic(
  () =>
    import("@/components/sections/testimonials").then((m) => m.Testimonials),
  { loading: () => <SectionSkeleton /> }
);
const FAQ = dynamic(
  () => import("@/components/sections/faq").then((m) => m.FAQ),
  { loading: () => <SectionSkeleton /> }
);
const Contact = dynamic(
  () => import("@/components/sections/contact").then((m) => m.Contact),
  { loading: () => <SectionSkeleton /> }
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Products />
        <Projects />
        <Statistics />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
