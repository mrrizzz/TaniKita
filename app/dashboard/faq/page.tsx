"use client";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import FAQItem from '@/components/faq-item';

export default function Faq() {
    const router = useRouter();
    const faqItems = [
        new FAQItem("What services does TaniKita offer?", "TaniKita offers a range of tools for farming optimization, including Smart Crop Planner, Crop Maintenance Reminders, Crop Monitoring and Management, and Community and Support platform."),
        new FAQItem("How does the Smart Crop Planner work?", "Yes. It's optimized for all screen sizes."),
        new FAQItem("How does the Crop Maintenance Reminders feature work?", "Yes. It adheres to the WAI-ARIA design pattern."),
        new FAQItem("How does the Crop Monitoring and Management feature work?", "Yes. It's optimized for all screen sizes."),
        new FAQItem("Can you explain the benefits of the Community and Support platform?", "Yes. It adheres to the WAI-ARIA design pattern."),
        new FAQItem("How does TaniKita ensure data security for farmers?", "Yes. It's optimized for all screen sizes."),
    ];

    return (
        <div className="grid grid-cols-12 gap-x-5">
            <h2 className="text-black font-bold text-center text-4xl col-start-5 col-span-4 ">HOW CAN WE HELP?</h2>
            <div className="col-start-4 col-span-6 mt-12 group flex bg-slate-100 rounded-lg h-12 items-center border outline focus-within:outline-primary focus-within:outline-2">
                <FontAwesomeIcon icon={faSearch} className="w-9 text-black ps-3"/>
                <input 
                    placeholder="Type Your Question" 
                    className="w-full text-black border-none bg-transparent p-3 focus:outline-none" 
                />
            </div>
            <div className="col-span-12 mt-12">
                <p className="text-black text-center mb-5">Commonly askes questions</p>
                <hr />
                <div  className="mt-12 text-black grid grid-cols-3 gap-5">
                    {faqItems.map((faqItem, index) => faqItem.render())}
                </div>
            </div>
        </div>
    );
}
