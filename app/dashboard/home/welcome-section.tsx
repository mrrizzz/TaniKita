import WelcomeCarousel from "@/components/dashboard/carousel";
import Welcome from "@/components/dashboard/welcome";

export default function WelcomeContainer() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-5 lg:col-span-4 xl:col-span-3 md:col-start-1 lg:col-start-2">
          <Welcome />
        </div>
        <div className="md:col-span-7 lg:col-span-8 xl:col-span-8 h-[50vh] md:h-[calc(100vh-4rem)]">
          <WelcomeCarousel />
        </div>
      </div>
    </div>
  );
}
