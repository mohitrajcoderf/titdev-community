import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-muted/30 py-12">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold mb-4 gradient-heading">TIT Developer Community</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                            Empowering students with real-world knowledge, industry insights, and hands-on learning.
                        </p>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            {[
                                { icon: Facebook, label: "Facebook" },
                                { icon: Instagram, label: "Instagram" },
                                { icon: Twitter, label: "Twitter" },
                                { icon: Linkedin, label: "LinkedIn" },
                                { icon: Github, label: "GitHub" }
                            ].map(({ icon: Icon, label }) => (
                                <Link 
                                    key={label}
                                    href="#" 
                                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                >
                                    <Icon className="h-5 w-5" />
                                    <span className="sr-only">{label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                ["About Us", "#about"],
                                ["Events", "#events"],
                                ["How to Join", "#join"],
                                ["Contact Us", "#contact"],
                                ["FAQs", "#faqs"]
                            ].map(([label, href]) => (
                                <li key={label}>
                                    <Link 
                                        href={href} 
                                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <address className="not-italic text-muted-foreground space-y-2">
                            <p>TIT Campus</p>
                            <p>Email: info@titdevelopers.com</p>
                            <p>Phone: +91 1234567890</p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-border/40 mt-8 pt-6 text-center text-muted-foreground text-sm">
                    <p>&copy; {new Date().getFullYear()} TIT Developer Community. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
