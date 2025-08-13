import {
  Hero,
  BestSellers,
  Innovation,
  Testimonials,
  WhyItWorks,
} from "@components";

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSellers isHomePage={true} />
      <Innovation />
      <Testimonials />
      <WhyItWorks />
    </main>
  );
}
