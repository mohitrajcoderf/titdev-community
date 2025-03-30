"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
    {
        id: 1,
        image: "/images/slider1.jpg",
        alt: "TIT Developer Community student team in black shirts",
    },
    {
        id: 2,
        image: "/images/slider2.jpg",
        alt: "Female students from TIT Developer Community",
    },
    {
        id: 3,
        image: "/images/slider3.jpg",
        alt: "Faculty members at TIT Coding Quest event",
    },
]

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative h-screen">
            {/* Slider */}
            <div className="relative h-full overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image src={slide.image || "/placeholder.svg"} alt={slide.alt} fill priority className="object-cover" />
                        <div className="absolute inset-0 " />
                    </div>
                ))}

                {/* Slider Controls */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full transition-colors z-10"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full transition-colors z-10"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-primary" : "bg-white/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-gradient-text ">
                        Empowering Juniors, Led by Seniors
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
                        A student-led initiative bridging the gap between juniors and seniors through free mentorship.
                    </p>
                    <Button size="lg" className="rounded-md bg-primary hover:bg-primary/90 shadow-md" asChild>
                        <a href="#join">Join Us Now</a>
                    </Button>
                </div>
            </div>
        </section>
    )
}

