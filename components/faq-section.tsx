"use client"

import { useRef, useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
    {
        id: "faq-1",
        question: "How can I join the TIT Developer Community?",
        answer: 
            'You can join our community by participating in our annual Coding Quest competition or through our hackathons. Check the "How to Join" section for more details on the registration process and eligibility criteria.',
    },
    {
        id: "faq-2",
        question: "Do I need to have prior coding experience?",
        answer:
            "While basic programming knowledge is helpful, we welcome students of all skill levels. Our mentorship program is designed to help you grow regardless of your starting point.",
    },
    {
        id: "faq-3",
        question: "What tech domains does the community focus on?",
        answer:
            "We cover a wide range of domains including Web Development, Android Development, Machine Learning, and Cybersecurity. Our mentors specialize in these areas and provide guidance based on your interests.",
    },
    {
        id: "faq-4",
        question: "How often are the mentorship sessions conducted?",
        answer:
            "Regular mentorship sessions are held every Saturday from 5:00 PM to 7:00 PM via Google Meet or Google Classroom. Additional sessions may be scheduled based on specific project requirements.",
    },
    {
        id: "faq-5",
        question: "Is there any fee to join the community?",
        answer:
            "No, joining the TIT Developer Community is completely free. We believe in providing equal opportunities to all students without any financial barriers.",
    },
]

export default function FaqSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect()
            }
        }
    }, [])

    return (
        <section id="faqs" ref={sectionRef} className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-6 gradient-heading">Frequently Asked Questions</h2>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                        Find answers to common questions about joining and participating in our community.
                    </p>
                </div>

                <div
                    className={`max-w-2xl mx-auto transition-all duration-500 ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-4">
                                <AccordionTrigger className="text-left py-4 font-medium">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}