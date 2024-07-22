import Hero from "../../components/Landing/Hero";
import Stat from "../../components/Landing/Stats/index2";
import Solution from "../../components/Landing/Solution";
import Buildings from "../../components/Landing/OurBestWork/index2";
import Testimonial from "../../components/Landing/Testimonials";
import Banner from "../../components/Landing/Banner";

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
