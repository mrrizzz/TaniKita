import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeatureItemProps {
  title: string;
  description: string;
  features: string[];
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

export default function FeatureItem({
  title,
  description,
  features,
  buttonText,
}: FeatureItemProps) {

  return (
    <Card className="bg-secondary shadow-xl">
      <CardHeader className="font-bold text-2xl">{title}</CardHeader>
      <CardContent>
        <span>{description}</span>
        <ul className="list-disc ps-10">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="mt-5 flex justify-end">
          <Button className="bg-primary hover:bg-accent w-48">{buttonText}</Button>
        </div>
      </CardContent>
    </Card>
  );
}
