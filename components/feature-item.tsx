import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeatureItemProps {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
}

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
