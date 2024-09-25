"use client";
import { useRouter } from "next/navigation";
import FeatureItem , { features } from "@/components/feature-item";

export default function Services() {
    const router = useRouter();

    return (
        <div className="grid grid-cols-12 gap-x-5 text-black w-10/12 mx-auto mt-20">
            <div className="bg-primary h-80 col-span-5"></div>
            <div className="col-span-7 flex flex-col justify-center">
                <h2 className="font-bold text-4xl">Our Services</h2>
                <p className="mt-5 text-justify">TaniKita offers a comprehensive suite of tools designed to revolutionize farming practices and empower farmers to achieve optimal yields. Our Smart Crop Planner provides tailored recommendations for soil, fertilizers, and planting dates, while our Crop Maintenance Reminders ensure timely care throughout the growing season.</p>
                <p className="mt-5 text-justify">The Crop Monitoring and Management feature enables data-driven decision-making by tracking crop health, predicting yields, and identifying potential issues early on. Complementing these technical tools, our Community and Support platform fosters knowledge sharing among farmers and provides access to expert agricultural advice, creating a holistic ecosystem for agricultural success.</p>
            </div>
            <div className="mt-20 col-span-12 flex flex-col gap-12">
                <h3 className="col-start-5 col-span-4 text-center font-bold text-2xl">Our Core Features</h3>
                {features.slice(0, 3).map((feature, index) => (
                    <FeatureItem
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        features={feature.features || []}
                        buttonText={feature.buttonText}
                    />
                    ))}
                <h3 className="col-start-5 col-span-4 text-center font-bold text-2xl">Community and Support</h3>
                <FeatureItem 
                    title={features[3].title}
                    description={features[3].description}
                    features={[]}
                    buttonText={features[3].buttonText}
                />
            </div>
        </div>
    );
}