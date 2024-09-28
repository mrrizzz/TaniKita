"use client";

import Welcome from "@/components/dashboard/welcome";
import WelcomeCarousel from "@/components/dashboard/carousel";
import ArticleContainer from "./article-section";

interface SmartSolutionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SmartSolution: React.FC<SmartSolutionProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
    {icon}
    <h3 className="text-[28px] font-semibold mb-2 text-center">{title}</h3>
    <p className="text-[16px] text-gray-600">{description}</p>
  </div>
);

interface ChooseReasonProps {
  text: React.ReactNode;
}

const ChooseReason: React.FC<ChooseReasonProps> = ({ text }) => (
  <li className="flex items-start">
    <svg
      className="w-6 h-6 text-[#1E5631] mr-2 mt-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
    <p className="text-[16px]">{text}</p>
  </li>
);

export default function Home() {
  const smartSolutions = [
    {
      icon: (
        <svg
          className="w-16 h-16 mb-4 mx-auto text-[#1E5631]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      title: "Yield Management",
      description:
        "Optimize your crop yields with our advanced management tools and data-driven insights.",
    },
    {
      icon: (
        <svg
          className="w-16 h-16 mb-4 mx-auto text-[#1E5631]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Smart Crop Recommendations",
      description:
        "Get personalized crop suggestions based on your soil, climate, and market conditions.",
    },
    {
      icon: (
        <svg
          className="w-16 h-16 mb-4 mx-auto text-[#1E5631]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "24/7 Farming Assistant",
      description:
        "Access round-the-clock support and guidance for all your farming needs.",
    },
  ];

  const chooseReasons = [
    {
      text: (
        <>
          <span className="font-semibold">Increase Productivity:</span> Our
          tools help you make data-driven decisions to maximize your farm's
          output.
        </>
      ),
    },
    {
      text: (
        <>
          <span className="font-semibold">Reduce Costs:</span> Optimize resource
          allocation and minimize waste with our smart recommendations.
        </>
      ),
    },
    {
      text: (
        <>
          <span className="font-semibold">Sustainable Farming:</span> Implement
          eco-friendly practices that benefit both your farm and the
          environment.
        </>
      ),
    },
    {
      text: (
        <>
          <span className="font-semibold">Easy to Use:</span> Our intuitive
          interface makes advanced agricultural technology accessible to all.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-12 gap-5">
        <div className="col-span-3 col-start-2 mx-3">
          <Welcome />
        </div>
        <div className="col-span-8 h-80 md:h-[calc(100vh-4rem)]">
          <WelcomeCarousel />
        </div>
        <div className="col-span-10 col-start-2 mt-20">
          <ArticleContainer />
        </div>
      </div>

      <section className="mt-20 py-16 bg-[#F0F4F1]">
        <div className="container mx-auto px-4">
          <h2 className="text-[51px] font-semibold mb-12 text-center text-[#1E1E1E]">
            Our Smart Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {smartSolutions.map((solution, index) => (
              <SmartSolution key={index} {...solution} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 mt-10">
        <div className="container mx-auto px-4">
          <h2 className="text-[51px] font-semibold mb-12 text-center text-[#1E1E1E]">
            Why Choose TaniKita?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                width="600"
                height="400"
                src="/slide1.jpg"
                alt="Farmer using TaniKita app"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <ul className="space-y-4">
                {chooseReasons.map((reason, index) => (
                  <ChooseReason key={index} {...reason} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#F0F4F1] p-8 rounded-lg shadow-lg w-10/12 mx-auto mt-10">
        <h2 className="text-[28px] font-semibold mb-4 text-[#1E1E1E]">
          Join the TaniKita Community
        </h2>
        <p className="text-[16px] mb-6 leading-relaxed">
          Whether you're a small-scale farmer or managing large agricultural
          operations, TaniKita is here to support your success. Join thousands
          of farmers who are already benefiting from our innovative solutions.
        </p>
        <button className="bg-[#1E5631] text-white px-6 py-3 rounded-lg text-[16px] hover:bg-[#164023] transition duration-300">
          Get Started Today
        </button>
      </div>
    </>
  );
}
