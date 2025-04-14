import type { Route } from "./+types/home";
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import Schedule from "../components/schedule";
import News from "../components/news";
import Footer from "../components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Schedule />
      <News />
      <Footer />
    </>
  )

}
