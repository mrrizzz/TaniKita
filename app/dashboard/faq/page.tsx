// "use client";
// import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import FAQItem from '@/components/faq-item';

export default function Faq() {
    const faqItems = [
        new FAQItem("Is it accessible?", "Yes. It adheres to the WAI-ARIA design pattern."),
        new FAQItem("Is it mobile-friendly?", "Yes. It's optimized for all screen sizes."),
        new FAQItem("Is it accessible?", "Yes. It adheres to the WAI-ARIA design pattern."),
        new FAQItem("Is it mobile-friendly?", "Yes. It's optimized for all screen sizes."),
        new FAQItem("Is it accessible?", "Yes. It adheres to the WAI-ARIA design pattern."),
        new FAQItem("Is it mobile-friendly?", "Yes. It's optimized for all screen sizes."),
    ];

    return (
        <div className="grid grid-cols-12 gap-x-5">
            <h1 className="text-black font-bold text-center text-4xl col-start-5 col-span-4 ">HOW CAN WE HELP?</h1>
            <div className="col-start-4 col-span-6 mt-12 group flex bg-slate-200 rounded-lg h-12 items-center border outline focus-within:outline-primary focus-within:outline-2">
                <FontAwesomeIcon icon={faSearch} className="w-9 text-black ps-3"/>
                <input 
                    placeholder="Type Your Question" 
                    className="w-full text-black border-none bg-transparent p-3 focus:outline-none" 
                />
            </div>
            <div className="col-span-12 mt-12">
                <p className="text-black text-center mb-5">Commonly askes questions</p>
                <hr />
                <div  className="mt-12 text-black grid grid-cols-2 gap-5">
                    {faqItems.map((faqItem, index) => faqItem.render())}
                </div>
            </div>
        </div>
    );
}
