import WelcomeCarousel from "@/components/dashboard/carousel";
import Welcome from "@/components/dashboard/welcome";

export default function welcomeContainer() {
  return (
    <section className="grid grid-cols-12">
      <div className="col-span-3 col-start-2">
        <Welcome />
      </div>
      <div className="col-span-8 h-screen"></div>
    </section>
  );
}
