import { Card } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

class FAQItem {
    question: string;
    answer: string;

    constructor(question: string, answer: string) {
        this.question = question;
        this.answer = answer;
    }

    render() {
        return (
            <Card className='shadow-md flex items-center'>
                <Accordion type="single" collapsible className='p-5 w-full'>
                    <AccordionItem value={this.question} className="border-none">
                        <AccordionTrigger className="text-center w-full">{this.question}</AccordionTrigger>
                        <AccordionContent className="text-left">{this.answer}</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Card>
        );
    }
}

export default FAQItem;

export const faqItems = [
    new FAQItem("What services does TaniKita offer?", "TaniKita offers a range of tools for farming optimization, including Smart Crop Planner, Crop Maintenance Reminders, Crop Monitoring and Management, and Community and Support platform."),
    new FAQItem("How does the Smart Crop Planner work?", "Yes. It's optimized for all screen sizes."),
    new FAQItem("How does the Crop Maintenance Reminders feature work?", "Yes. It adheres to the WAI-ARIA design pattern."),
    new FAQItem("How does the Crop Monitoring and Management feature work?", "Yes. It's optimized for all screen sizes."),
    new FAQItem("Can you explain the benefits of the Community and Support platform?", "Yes. It adheres to the WAI-ARIA design pattern."),
    new FAQItem("How does TaniKita ensure data security for farmers?", "Yes. It's optimized for all screen sizes."),
    new FAQItem("How does the Crop Monitoring and Management feature work?", "Yes. It's optimized for all screen sizes."),
    new FAQItem("Can you explain the benefits of the Community and Support platform?", "Yes. It adheres to the WAI-ARIA design pattern."),
    new FAQItem("How does TaniKita ensure data security for farmers?", "Yes. It's optimized for all screen sizes."),
    new FAQItem("How does the Crop Monitoring and Management feature work?", "Yes. It's optimized for all screen sizes."),
    new FAQItem("Can you explain the benefits of the Community and Support platform?", "Yes. It adheres to the WAI-ARIA design pattern."),
    new FAQItem("How does TaniKita ensure data security for farmers?", "Yes. It's optimized for all screen sizes."),
];