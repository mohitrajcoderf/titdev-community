"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
    {
        id: 1,
        title: "Android Development Workshop",
        image: "/images/android.png?height=600&width=800",
        date: "March 15, 2024",
        location: "TIT Campus, Lab 3",
        time: "10:00 AM - 4:00 PM",
        description:
            "Hands-on workshop covering Android app development fundamentals, UI design, and publishing to Play Store.",
    },
    {
        id: 2,
        title: "Web Development Hackathon",
        image: "/images/cq.png?height=600&width=800",
        date: "April 22, 2024",
        location: "TIT Campus, Seminar Hall",
        time: "9:00 AM - 6:00 PM",
        description: "A 24-hour hackathon focused on building responsive web applications with modern frameworks.",
    },
    {
        id: 3,
        title: "Coding Quest",
        image: "/images/cqq.png?height=600&width=800",
        date: "May 10, 2024",
        location: "TIT Campus, Computer Lab",
        time: "11:00 AM - 3:00 PM",
        description: "Annual coding competition with multiple rounds to test algorithmic and problem-solving skills.",
    },
    {
        id: 4,
        title: "Regular Classes",
        image: "/images/regular.png?height=600&width=800",
        date: "Every Saturday",
        location: "Google Meet / Google Classroom",
        time: "5:00 PM - 7:00 PM",
        description: "Weekly mentorship sessions covering various tech domains and career guidance.",
    },
]

export default function EventsSection() {
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
        <section id="events" ref={sectionRef} className="py-20 bg-muted/30">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 gradient-heading">Events</h2>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                        Explore our past and upcoming events, workshops, and hackathons.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map((event, index) => (
                        <Card
                            key={event.id}
                            className={`transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                } border border-border/50 shadow-sm overflow-hidden`}
                            style={{
                                transitionDelay: `${index * 100}ms`,
                            }}
                        >
                            <div className="relative h-48">
                                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h3 className="text-lg font-bold text-white">{event.title}</h3>
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Clock className="h-4 w-4 mr-2" />
                                        <span>{event.time}</span>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                                <Button variant="outline" size="sm" asChild>
                                    <a href="#" className="flex items-center">
                                        Learn more
                                        <ArrowRight className="h-4 w-4 ml-2" />
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