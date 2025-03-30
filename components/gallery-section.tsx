"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

const galleryImages = [
    {
        id: 1,
        src: "/images/event1.JPG?height=600&width=800",
        alt: "Workshop session",
        category: "Workshops",
    },
    {
        id: 2,
        src: "/images/event2.JPG?height=600&width=800",
        alt: "Hackathon participants",
        category: "Hackathons",
    },
    {
        id: 3,
        src: "/images/event3.JPG?height=600&width=800",
        alt: "Award ceremony",
        category: "Winning Moments",
    },
    {
        id: 4,
        src: "/images/event4.JPG?height=600&width=800",
        alt: "Coding session",
        category: "Coding Sessions",
    },
    {
        id: 5,
        src: "/images/event5.JPG?height=600&width=800",
        alt: "Team collaboration",
        category: "Workshops",
    },
    {
        id: 6,
        src: "/images/event6.JPG?height=600&width=800",
        alt: "Presentation",
        category: "Presentations",
    },
    {
        id: 7,
        src: "/images/event7.JPG?height=600&width=800",
        alt: "Group photo",
        category: "Community",
    },
    {
        id: 8,
        src: "/images/event8.JPG?height=600&width=800",
        alt: "Mentorship session",
        category: "Mentorship",
    },
]

const categories = ["All", "Workshops", "Hackathons", "Winning Moments", "Coding Sessions"]

export default function GallerySection() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    const filteredImages =
        selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

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
        <section id="gallery" ref={sectionRef} className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 gradient-heading">Photo Gallery</h2>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                        Explore moments from our workshops, hackathons, and community events.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3 py-1 rounded-md text-sm transition-colors ${selectedCategory === category ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredImages.map((image, index) => (
                        <Dialog key={image.id}>
                            <DialogTrigger asChild>
                                <div
                                    className={`relative h-48 rounded-md overflow-hidden cursor-pointer transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                        }`}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                                        <div className="p-3 w-full text-white">
                                            <p className="font-medium text-sm">{image.alt}</p>
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl p-0 bg-transparent border-none">
                                <div className="relative">
                                    <button className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors">
                                        <X className="h-4 w-4" />
                                    </button>
                                    <div className="relative h-[80vh] max-h-[80vh]">
                                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    )
}

