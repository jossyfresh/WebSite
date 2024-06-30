import Image from "next/image";
import Hero from "../../components/Hero";
import Stats from "../../components/Stats";
import WhyChooseUs from "../../components/WhyChooseUs";
import OurBestWork from "../../components/OurBestWork";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <Stats />
      <WhyChooseUs />
      <OurBestWork />
    </main>
  );
}
