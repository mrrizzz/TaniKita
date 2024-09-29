import {
  FeatureItem,
  features,
  featureCards,
  FeatureCard,
} from "@/components/feature-item";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 mt-8 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
        <div className="bg-primary min-h-[24rem] w-full"></div>
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-3xl md:text-4xl">Our Mission</h2>
          <p className="mt-4 text-justify">
            At TaniKita, we're on a mission to revolutionize agriculture through
            innovative technology and sustainable practices. We empower farmers
            with cutting-edge tools and knowledge, enabling them to maximize
            yields while preserving our precious environment.
          </p>
          <p className="mt-4 text-justify">
            Founded by a team of agronomists, data scientists, and tech
            enthusiasts, TaniKita combines deep agricultural expertise with the
            latest in AI and data analytics. We're committed to supporting
            farmers in their journey towards more efficient, profitable, and
            eco-friendly farming.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Our Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featureCards.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </div>
        <div className="mt-12 md:mt-16 space-y-8 md:space-y-12">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
              features={feature.features}
              buttonText={feature.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

