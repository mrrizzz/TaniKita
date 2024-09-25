import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="sticky top-0 z-50 shadow-md">
          <Navbar />
        </div>
        <div className="flex-grow mb-20">{children}</div>
      </div>
      <div className="bg-primary text-background">
        <Footer />
      </div>
    </>
  );
}
