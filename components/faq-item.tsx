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
