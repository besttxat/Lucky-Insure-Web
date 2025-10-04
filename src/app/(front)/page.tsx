import Features01Page from "@/components/features-01/features-01";
import Footer05Page from "@/components/footer-05/footer-05";
import Hero02 from "@/components/hero-02/hero-02";
import Blog01Page from "../blog/page";

export default function Home() {
  return (
    <div>
      <Hero02 />

      <Blog01Page/>

      <Features01Page />

      <Footer05Page />
    </div>
  );
}
