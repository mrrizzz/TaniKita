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
            <Card className='shadow-md'>
                <Accordion type="single" collapsible className='p-5'>
                    <AccordionItem value={this.question}>
                        <AccordionTrigger>{this.question}</AccordionTrigger>
                        <AccordionContent>{this.answer}</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Card>
        );
    }
}

export default FAQItem;
