import Image from "next/image";
import Hero from "../../components/Hero";
import Stats from "../../components/Stats";
import WhyChooseUs from "../../components/WhyChooseUs";
import OurBestWork from "../../components/OurBestWork";
import Hero2 from "../../components/Hero2";
import Stat from "../../components/Stats/index2";
import Solution from "../../components/Solution";
import Buildings from "../../components/OurBestWork/index2";
import Testimonial from "../../components/Testimonials";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <main
      style={{
        marginBottom: "50px",
      }}
    >
      <Hero />
      <Stat />
      <Solution />
      <Buildings />
      <Testimonial />
      <Banner />
    </main>
  );
}
