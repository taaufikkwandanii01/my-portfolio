import AboutView from "@/components/views/about-me";
import HeroView from "@/components/views/hero";
import { constructMetadata } from "@/lib/seo";
import Image from "next/image";

export const metadata = constructMetadata({
  title: "Taufik Wandani Portofolio",
  description: "Website Portofolio Taufik Wandani",
});

export default function Home() {
  return (
    <>
      <HeroView />
      <AboutView />
    </>
  );
}
