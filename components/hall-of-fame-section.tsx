"use client"

import { useRef, useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Brain, Globe, Shield, Award, FileCheck } from "lucide-react"

const domains = [
    {
        id: "android",
        label: "Android",
        icon: <Smartphone className="h-4 w-4" />,
        students: [
            {
                id: 1,
                name: "Dipu Kumar",
                year: "2nd Year",
                achievements: ["5+ projects", "4+ certifications"],
            },
            {
                id: 2,
                name: "Aryan Sharma",
                year: "3rd Year",
                achievements: ["10+ projects", "5+ hackathons", "Play Store deployments"],
            },
        ],
    },
    {
        id: "ml",
        label: "ML/AI",
        icon: <Brain className="h-4 w-4" />,
        students: [
            {
                id: 1,
                name: "Aman Mishra",
                year: "2nd Year",
                achievements: ["5+ major projects", "SIH 2024 Finalist"],
            },
            {
                id: 2,
                name: "Deepika Deshmukh",
                year: "3rd Year",
                achievements: ["10+ projects", "5+ hackathons"],
            },
        ],
    },
    {
        id: "web",
        label: "Web Dev",
        icon: <Globe className="h-4 w-4" />,
        students: [
            {
                id: 1,
                name: "Prakhar",
                year: "2nd Year",
                achievements: ["10+ projects", "SIH 2024 Finalist"],
            },
            {
                id: 2,
                name: "Naman Kumar",
                year: "3rd Year",
                achievements: ["5+ projects", "Secured internship"],
            },
        ],
    },
    {
        id: "cyber",
        label: "Security",
        icon: <Shield className="h-4 w-4" />,
        students: [
            {
                id: 1,
                name: "Akash Kumar",
                year: "2nd Year",
                achievements: ["3+ projects", "ATS-optimized resume"],
            },
            {
                id: 2,
                name: "Mohd Meraaz",
                year: "3rd Year",
                achievements: ["Successfully completed cybersecurity training"],
            },
        ],
    },
]

export default function HallOfFameSection() {
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
        <section id="hall-of-fame" ref={sectionRef} className="bg-muted/30 py-20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 gradient-heading">Hall of Fame</h2>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                        Recognizing our top-performing students across various tech domains.
                    </p>
                </div>

                <Tabs defaultValue="android" className="w-full">
                    <TabsList className="grid grid-cols-4 mb-8 p-1 bg-muted/50 rounded-md">
                        {domains.map((domain) => (
                            <TabsTrigger
                                key={domain.id}
                                value={domain.id}
                                className="flex items-center data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                <span className="mr-2">{domain.icon}</span>
                                <span>{domain.label}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {domains.map((domain) => (
                        <TabsContent
                            key={domain.id}
                            value={domain.id}
                            className={`transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {domain.students.map((student) => (
                                    <Card key={student.id} className="border border-border/50 shadow-sm">
                                        <CardContent className="p-4">
                                            <div className="flex items-start">
                                                <div className="bg-primary/10 p-2 rounded-full mr-4">
                                                    <Award className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold mb-1">{student.name}</h3>
                                                    <p className="text-sm text-muted-foreground mb-3">{student.year}</p>
                                                    <ul className="space-y-1">
                                                        {student.achievements.map((achievement, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <FileCheck className="h-4 w-4 text-primary mr-2" />
                                                                <span className="text-sm">{achievement}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}

