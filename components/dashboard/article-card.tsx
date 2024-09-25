import { Card } from "../ui/card";
import Image from "next/image";

export function ArticleCard() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      <Image
        width={800}
        height={600}
        src="/slide1.jpg"
        alt="Rice farmers working in a field"
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <p className="text-sm font-semibold mb-2">02 September 2024</p>
        <h2 className="text-xl font-bold mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore
        </h2>
      </div>
    </div>
  );
}
