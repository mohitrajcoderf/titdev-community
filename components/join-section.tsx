"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Calendar, CheckCircle2, ArrowRight } from "lucide-react"

export default function JoinSection() {
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
        <section id="join" ref={sectionRef} className="bg-muted/30 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 gradient-heading">How to Join?</h2>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                        Join our community through our annual Coding Quest competition or hackathons.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card
                        className={`transition-all duration-500 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                            } border border-border/50 shadow-sm overflow-hidden`}
                    >
                        <div className="relative h-48">
                            <Image src="/images/cqq.png?height=600&width=800" alt="Coding Quest" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-white">Coding Quest</h3>
                                    <p className="text-white/80 text-sm">Annual competition fostering technical skills</p>
                                </div>
                            </div>
                        </div>
                        <CardContent className="p-4">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-base font-bold mb-2 flex items-center text-primary">
                                        <Trophy className="h-4 w-4 mr-2" />
                                        Competition Format
                                    </h4>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        Our annual competition consists of two challenging rounds:
                                    </p>
                                    <ul className="space-y-1 pl-6 text-sm">
                                        <li className="flex items-start">
                                            <span className="font-medium mr-2">Round 1:</span>
                                            <span className="text-muted-foreground">MCQ-based (via TIT-developed app)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="font-medium mr-2">Round 2:</span>
                                            <span className="text-muted-foreground">Coding challenge (Unstop platform)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-base font-bold mb-2 flex items-center text-primary">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        Important Dates
                                    </h4>
                                    <ul className="space-y-1 pl-6 text-sm">
                                        <li className="flex items-start">
                                            <span className="font-medium mr-2">Registration:</span>
                                            <span className="text-muted-foreground">August 1-15, 2024</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="font-medium mr-2">Round 1:</span>
                                            <span className="text-muted-foreground">August 20, 2024</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="font-medium mr-2">Round 2:</span>
                                            <span className="text-muted-foreground">August 27, 2024</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        className={`transition-all duration-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                            } border border-border/50 shadow-sm overflow-hidden`}
                        style={{ transitionDelay: "200ms" }}
                    >
                        <div className="relative h-48">
                            <Image
                                src="/images/cq.png?height=600&width=800"
                                alt="Hackathon & Recruitment"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-white">Hackathon & Recruitment</h3>
                                    <p className="text-white/80 text-sm">Join through our annual hackathon events</p>
                                </div>
                            </div>
                        </div>
                        <CardContent className="p-4">
                            <div className="space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    Our annual hackathon is where exceptional performers get the opportunity to join the TIT Developer
                                    Community. This is an intensive event that tests your problem-solving abilities, teamwork, and
                                    technical skills.
                                </p>

                                <div>
                                    <h4 className="text-base font-bold mb-2 text-primary">Eligibility</h4>
                                    <ul className="space-y-1 pl-6 text-sm">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2" />
                                            <span className="text-muted-foreground">Open to 1st to 4th-year students</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2" />
                                            <span className="text-muted-foreground">Basic programming knowledge required</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 mr-2" />
                                            <span className="text-muted-foreground">Passion for technology and learning</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pt-2">
                                    <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                                        <a href="#" className="flex items-center justify-center">
                                            Register Now
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

