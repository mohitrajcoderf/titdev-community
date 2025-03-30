"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const [formState, setFormState] = useState({ 
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormState((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log("Form submitted:", formState)
        // Reset form
        setFormState({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
        alert("Thank you for your message! We will get back to you soon.")
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
            if (sectionRef.current) {
                observer.disconnect()
            }
        }
    }, [])

    return (
        <section id="contact" ref={sectionRef} className="bg-muted/30 py-20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-6 gradient-heading">Contact Us</h2>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                        Have questions or want to learn more about our community? Get in touch with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card
                        className={`transition-all duration-500 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                            } border border-border/50 shadow-sm`}
                    >
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-6 gradient-heading">Get In Touch</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                                        Your Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                                        Email Address
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        placeholder="How can we help?"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        placeholder="Your message here..."
                                        rows={4}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                                    <Send className="h-4 w-4 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div
                        className={`transition-all duration-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                            }`}
                        style={{ transitionDelay: "200ms" }}
                    >
                        <Card className="mb-6 border border-border/50 shadow-sm">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-6 gradient-heading">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="bg-primary/10 p-2 rounded-full mr-4">
                                            <Mail className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">Email</h4>
                                            <p className="text-muted-foreground">info@titdevelopers.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-primary/10 p-2 rounded-full mr-4">
                                            <Phone className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">Phone</h4>
                                            <p className="text-muted-foreground">+91 1234567890</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-primary/10 p-2 rounded-full mr-4">
                                            <MapPin className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">Address</h4>
                                            <p className="text-muted-foreground">
                                                TIT Campus, Computer Science Department,
                                                <br />
                                                Techno City, India
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

