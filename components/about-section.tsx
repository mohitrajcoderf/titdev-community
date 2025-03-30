"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Award, Briefcase } from "lucide-react"

const benefits = [
    {
        id: 1,
        icon: <Lightbulb className="h-5 w-5 text-primary" />,
        title: "Hands-on Learning",
        description: "Work on real-world projects that build practical skills",
    },
    {
        id: 2,
        icon: <Users className="h-5 w-5 text-primary" />,
        title: "Exclusive Workshops",
        description: "Access specialized workshops and hackathons",
    },
    {
        id: 3,
        icon: <Award className="h-5 w-5 text-primary" />,
        title: "Personalized Mentorship",
        description: "Get guidance from industry-ready seniors",
    },
    {
        id: 4,
        icon: <Briefcase className="h-5 w-5 text-primary" />,
        title: "Technical Portfolio",
        description: "Build a robust portfolio for placements",
    },
]

export default function AboutSection() {
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

        const currentRef = sectionRef.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.disconnect()
            }
        }
    }, [])

    return (
        <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 gradient-heading">About TIT Developer Community</h2>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                        A student-led initiative bridging the gap between juniors and seniors through free mentorship.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div
                        className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                            }`}
                    >
                        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
                            <Image
                                src="/images/event6.JPG?height=900&width=1200"
                                alt="TIT Developer Community"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div
                        className={`transition-all duration-700 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                            }`}
                    >
                        <h3 className="text-2xl font-bold mb-4 gradient-heading">Our Mission</h3>
                        <p className="mb-6 text-muted-foreground">
                            TIT Developer Community is dedicated to empowering students with real-world knowledge, industry insights,
                            and hands-on learning. We bridge the gap between academic education and industry requirements through
                            mentorship programs, hackathons, and workshops.
                        </p>

                        <h3 className="text-2xl font-bold mb-4 gradient-heading">Why Join Us?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit) => (
                                <Card key={benefit.id} className="border border-border/50 shadow-sm">
                                    <CardContent className="p-4 flex items-start">
                                        <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">{benefit.icon}</div>
                                        <div>
                                            <h4 className="font-bold mb-1">{benefit.title}</h4>
                                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

