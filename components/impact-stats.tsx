"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { FileCheck, Code, Brain, Smartphone } from "lucide-react"

const stats = [
    {
        id: 1,
        icon: <FileCheck className="h-6 w-6 text-primary" />,
        value: "90%+",
        label: "ATS-Friendly Resumes",
        description: "Helping students stand out in job applications",
    },
    {
        id: 2,
        icon: <Code className="h-6 w-6 text-primary" />,
        value: "Versatile",
        label: "Tech Domains",
        description: "From AI to Cybersecurity, we've got it all!",
    },
    {
        id: 3,
        icon: <Brain className="h-6 w-6 text-primary" />,
        value: "15+",
        label: "Students in ML",
        description: "Building AI-powered solutions",
    },
    {
        id: 4,
        icon: <Smartphone className="h-6 w-6 text-primary" />,
        value: "20+",
        label: "App Developers",
        description: "Shaping the next-gen mobile innovators",
    },
]

export default function ImpactStats() {
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
        <section ref={sectionRef} className="bg-muted/30 py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4 gradient-heading">Wall of Impact</h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    Our community has made significant impacts across various tech domains, empowering students to excel.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <Card
                            key={stat.id}
                            className={`transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                } border border-border/50 shadow-sm`}
                            style={{
                                transitionDelay: `${index * 100}ms`,
                            }}
                        >
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="mb-4 bg-primary/10 p-3 rounded-full">{stat.icon}</div>
                                <h3 className="text-2xl font-bold mb-1 text-primary">{stat.value}</h3>
                                <p className="font-medium mb-2">{stat.label}</p>
                                <p className="text-sm text-muted-foreground">{stat.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

