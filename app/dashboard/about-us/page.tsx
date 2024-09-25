"use client";
import { useRouter } from "next/navigation";
import FeatureItem , { features } from "@/components/feature-item";
import { featureCards } from "@/components/feature-item";

export default function AboutUs() {
    const router = useRouter();

    return (
        <div className="grid grid-cols-12 min-h-1 gap-x-5 text-black w-10/12 mx-auto mt-20">
            <div className="bg-primary min-h-96 col-span-6"></div>
            <div className="col-span-6 flex flex-col justify-center">
                <h2 className="font-bold text-4xl">Our Mission</h2>
                <p className="mt-5 text-justify">At TaniKita, we're on a mission to revolutionize agriculture through innovative technology and sustainable practices. We empower farmers with cutting-edge tools and knowledge, enabling them to maximize yields while preserving our precious environment.</p>
                <p className="mt-5 text-justify">Founded by a team of agronomists, data scientists, and tech enthusiasts, TaniKita combines deep agricultural expertise with the latest in AI and data analytics. We're committed to supporting farmers in their journey towards more efficient, profitable, and eco-friendly farming.</p>
            </div>
            <div className="mt-20 col-span-12 grid grid-cols-12 gap-12">
                <h3 className="font-bold text-2xl col-span-12 text-center">Our Core Features</h3>
                {featureCards.map((card, index) => card.renderCard())}
            </div>
            <div className="mt-20 col-span-12 flex flex-col gap-12">
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