// import { ArticleCard } from "@/components/dashboard/article-card";
//
// export default function ArticleContainer() {
//   return (
//     <section className="grid grid-cols-2">
//       <ArticleCard />
//       <ArticleCard />
//     </section>
//   );
// }
import { ArticleCard } from "@/components/dashboard/article-card";
import Image from "next/image";

export default function ArticleContainer() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">ARTICLE</h2>
        <a href="#" className="text-green-700 hover:underline">
          Open Article Page →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg overflow-hidden shadow-md ${index < 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <Image
              src="/slide1.jpg"
              alt="Article thumbnail"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">02 September 2024</p>
              <h3 className="text-lg font-semibold mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <p className="text-sm text-gray-600">
                Sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
