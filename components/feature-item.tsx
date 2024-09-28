import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faListCheck,
  faWheatAwn,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface FeatureItemProps {
  title: string;
  description: string;
  features?: string[];
  buttonText: string;
}

export const features = [
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

export function FeatureItem({ title, description, features = [], buttonText }: FeatureItemProps) {
  return (
    <Card className="bg-secondary shadow-xl">
      <CardHeader className="font-bold text-xl md:text-2xl">{title}</CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm md:text-base">{description}</p>
        <ul className="list-disc pl-5 md:pl-10 text-sm md:text-base">
          {features.map((feature, index) => (
            <li key={index} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex justify-end">
          <Button className="bg-primary hover:bg-accent w-full md:w-48 text-sm md:text-base">
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconDefinition;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className="shadow-lg flex flex-col items-center p-6 md:p-10 gap-y-4 md:gap-y-5">
      <FontAwesomeIcon icon={icon} className="h-8 md:h-10" />
      <h4 className="text-base md:text-lg font-bold text-center">{title}</h4>
      <p className="text-sm md:text-base text-center md:text-justify">
        {description}
      </p>
    </Card>
  );
}
export const featureCards = [
  {
    title: "AI-Powered Farming Assistant",
    description:
      "Our intelligent assistant provides personalized advice, answers questions, and offers real-time support to farmers, helping them make informed decisions throughout the growing season.",
    icon: faUserTie,
  },
  {
    title: "Comprehensive Management Tools",
    description:
      "From crop planning to harvest tracking, our suite of management tools helps farmers streamline operations, optimize resource allocation, and boost overall farm productivity.",
    icon: faListCheck,
  },
  {
    title: "Smart Crop Recommendation",
    description:
      "Our advanced algorithm analyzes soil conditions, climate data, and market trends to suggest the best crops for your specific environment, maximizing yield potential and profitability",
    icon: faWheatAwn,
  },
];

