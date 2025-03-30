"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "Rahul Sharma",
        image: "/images/rahul.jpeg?height=400&width=400",
        role: "Software Engineer at Google",
        quote:
            "The mentorship I received at TIT Developer Community was instrumental in landing my dream job. The hands-on projects and guidance from seniors gave me a competitive edge.",
    },
    {
        id: 2,
        name: "Priya Patel",
        image: "/images/priyaa.jpeg?height=400&width=400",
        role: "Frontend Developer at Microsoft",
        quote:
            "Being part of this community transformed my coding skills and gave me the confidence to tackle complex projects. The mentors were always available to help and guide.",
    },
    {
        id: 3,
        name: "Vikram Singh",
        image: "/images/vikram.jpeg?height=400&width=400",
        role: "Data Scientist at Amazon",
        quote:
            "The machine learning workshops and projects at TIT Developer Community provided me with practical experience that was crucial for my career in data science.",
    },
]

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    }

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
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (sectionRef.current) {
                observer.disconnect()
            }
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="testimonials" ref={sectionRef} className="bg-muted/30 py-20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 gradient-heading">Testimonials of Alumni</h2>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                        Hear from our alumni about how TIT Developer Community helped shape their careers.
                    </p>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    <div
                        className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <Card className="border border-border/50 shadow-sm overflow-hidden">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                                        <Image
                                            src={testimonials[currentIndex].image || "/placeholder.svg"}
                                            alt={testimonials[currentIndex].name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <Quote className="h-8 w-8 text-primary/20 mb-3" />
                                        <p className="text-base mb-4 italic">&quot;{testimonials[currentIndex].quote}&quot;</p>
                                        <div>
                                            <h3 className="text-lg font-bold text-primary">{testimonials[currentIndex].name}</h3>
                                            <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex justify-center mt-6 gap-4">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <div className="flex items-center space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-primary/30"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}