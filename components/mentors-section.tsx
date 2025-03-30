"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

const mentors = [
    {
        id: 1,
        name: "Ankit Kumar",
        image: "/images/ankit kumar.jpg?height=400&width=400",
        linkedIn: "https://linkedin.com/in/ankitkumar0905/",
    },
    {
        id: 2,
        name: "Anand Soni",
        image: "/images/Anand Soni.png?height=400&width=400",
        linkedIn: "https://linkedin.com/in/anandsoni992/",
    },
    {
        id: 3,
        name: "Ankit Patel",
        image: "/images/ankit patel.JPG?height=400&width=400",
        linkedIn: "https://linkedin.com/in/ankit-patel-563b9927b/",
    },
]

export default function MentorsSection() {
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
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (sectionRef.current) {
                observer.disconnect()
            }
        }
    }, [])

    return (
        <section id="mentors" ref={sectionRef} className="bg-muted/30 py-20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 gradient-heading">Meet the Mentors</h2>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                        Our experienced mentors are dedicated to helping you succeed in your tech journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {mentors.map((mentor, index) => (
                        <Card
                            key={mentor.id}
                            className={`transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                } border border-border/50 shadow-sm overflow-hidden`}
                            style={{
                                transitionDelay: `${index * 200}ms`,
                            }}
                        >
                            <div className="relative h-72 overflow-hidden">
                                <Image src={mentor.image || "/placeholder.svg"} alt={mentor.name} fill className="object-cover" />
                            </div>
                            <CardContent className="p-6 text-center">
                                <h3 className="text-xl font-bold mb-4">{mentor.name}</h3>
                                <Button variant="outline" size="sm" asChild>
                                    <a href={mentor.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                        <Linkedin className="h-4 w-4 mr-2" />
                                        LinkedIn Profile
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

