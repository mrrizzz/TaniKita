"use client";
import { useRouter } from "next/navigation";
import FeatureItem from "@/components/feature-item";

export default function Services() {
    const router = useRouter();

    const features = [
        {
            title: "Smart Crop Planner",
            description:
                "Input your desired crop, and our AI-powered system will provide you with comprehensive recommendations:",
            features: [
                "Optimal soil types for your crop",
                "Recommended fertilizers and nutrients",
                "Ideal vegetation conditions",
                "Best planting dates based on your location and climate",
            ],
            buttonText: "Try Smart Crop Planner",
        },
        {
            title: "Crop Maintenance Reminders",
            description:
                "Never miss a crucial farming task with our personalized reminder system:",
            features: [
                "Timely alerts for watering, fertilizing, and pest control",
                "Customizable notifications based on your crop's growth stage",
                "Weather-based reminders to protect your crops",
            ],
            buttonText: "Get Started Today",
        },
        {
            title: "Crop Monitoring and Management",
            description:
                "Keep track of your crops' health and progress throughout the growing season:",
            features: [
                "Regular crop health assessments",
                "Growth stage tracking and projections",
                "Early detection of potential issues (pests, diseases, nutrient deficiencies)",
                "Yield estimation and harvest planning",
            ],
            buttonText: "Get Started Today",
        },
        {
            title: "Join the TaniKita Community",
            description:
                "Whether you're a small-scale farmer or managing large agricultural operations, TaniKita is here to support your success. Join thousands of farmers who are already benefiting from our innovative solutions.",
            buttonText: "Get Started Today",
        },
    ];

    return (
        <div className="grid grid-cols-12 gap-x-5 text-black">
            <div className="bg-primary h-80 col-span-5"></div>
            <div className="col-span-7">
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