import { LineShadowText } from "@/components/ui/line-shadow-text";
import { ShineBorder } from "@/components/ui/shine-border";
import { SparklesText } from "@/components/ui/sparkles-text";
import { useEffect, useRef, useState } from "react";

// Color data with gradients and quotes (no dates)
const colorSlides = [
    {
        color: "White",
        gradient: "bg-gradient-to-br from-white via-gray-100 to-gray-300",
        quote: "Signals purity and simplicity, making brands feel clean and trustworthy.",
    },
    {
        color: "Red",
        gradient: "bg-gradient-to-br from-red-400 via-red-500 to-pink-400",
        quote: "Chosen to trigger urgency and strong emotion, perfect for sales and attention.",
    },
    {
        color: "Royal Blue",
        gradient: "bg-gradient-to-br from-blue-700 via-blue-500 to-indigo-400",
        quote: "Builds authority and trust, common in finance and tech.",
    },
    {
        color: "Yellow",
        gradient: "bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500",
        quote: "Radiates optimism and energy, helping brands feel youthful and friendly.",
    },
    {
        color: "Green",
        gradient: "bg-gradient-to-br from-green-400 via-green-500 to-emerald-400",
        quote: "Linked to nature and balance, ideal for wellness and eco-brands.",
    },
    {
        color: "Grey",
        gradient: "bg-gradient-to-br from-gray-400 via-gray-500 to-gray-300",
        quote: "Suggests neutrality and sophistication, often used for sleek minimalism.",
    },
    {
        color: "Orange",
        gradient: "bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-400",
        quote: "Bursts with enthusiasm and approachability, good for fun, social brands.",
    },
    {
        color: "Peacock Green",
        gradient: "bg-gradient-to-br from-teal-700 via-green-400 to-cyan-300",
        quote: "Adds a sense of elegance and exclusivity, standing out as premium.",
    },
    {
        color: "Pink",
        gradient: "bg-gradient-to-br from-pink-400 via-pink-300 to-rose-300",
        quote: "Evokes warmth and care, widely used in lifestyle, beauty, and compassion-driven branding.",
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);
    const progressRef = useRef<HTMLDivElement>(null);
    const SLIDE_DURATION = 5000;

    // Auto-slide effect with fade transition
    useEffect(() => {
        setFade(false);
        const fadeTimeout = setTimeout(() => setFade(true), 100); // Start fade-in after fade-out

        const interval = setInterval(() => {
            setFade(false); // Start fade-out
            setTimeout(() => {
                setCurrent((prev) => (prev === colorSlides.length - 1 ? 0 : prev + 1));
                setFade(true); // Start fade-in
            }, 300); // Fade duration
        }, SLIDE_DURATION);

        return () => {
            clearInterval(interval);
            clearTimeout(fadeTimeout);
        };
    }, [current]);

    // Progress bar animation
    useEffect(() => {
        if (progressRef.current) {
            progressRef.current.style.transition = "none";
            progressRef.current.style.width = "0%";
            // Force reflow to restart animation
            void progressRef.current.offsetWidth;
            progressRef.current.style.transition = `width ${SLIDE_DURATION}ms linear`;
            progressRef.current.style.width = "100%";
        }
    }, [current]);

    const slide = colorSlides[current];

    const handleGetStarted = () => {
        const section = document.getElementById("color-grid-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col items-center mx-auto max-w-7xl justify-center px-4 pt-16 sm:pt-20 pb-8 sm:pb-12 lg:px-8 rounded-br-3xl rounded-bl-3xl">
            <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between text-left px-0 sm:px-4 gap-8 sm:gap-10">
                {/* Left: Logo and Headings */}
                <div className="flex-1 flex flex-col items-start justify-center w-full">
                    <div className="relative overflow-hidden mb-8 rounded-xl p-3 bg-white/90 shadow-xl border border-indigo-100 w-fit">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="rounded-lg w-48 sm:w-64 md:w-80 max-w-full h-auto object-contain"
                        />
                        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight text-left">
                        <SparklesText className="text-5xl sm:text-7xl">
                            Zolu <LineShadowText>2.0</LineShadowText>
                        </SparklesText>
                    </h1>
                    <p className="mt-2 text-base sm:text-lg md:text-2xl font-medium text-gray-600 mb-8 sm:mb-10 max-w-2xl">
                        Bringing to you Zolu 2.0, a digital utsava of  learning, fun quizzes and friendly competition. 
                        <br /> <br />
                        We’ve blended tech and tradition to give you the perfect amalgamation of Navaratri and Zoho with a splash of Gen Z perspectives.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                        <button
                            onClick={handleGetStarted}
                            className="rounded-lg bg-indigo-600 px-6 sm:px-7 py-3 text-base sm:text-lg font-semibold text-white shadow-md hover:bg-indigo-500 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Unlock Colours
                        </button>
                        <a
                            href="https://connect.zoho.in/portal/intranet/forum/post/zolu-2-0-%E2%80%93-a-digital-celebration-of-colors-creativity"
                            className="text-base sm:text-lg font-semibold text-indigo-600 underline underline-offset-4 hover:text-indigo-800 transition"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                {/* Right: Slider Quote Section */}
                <div className="flex-1 flex items-center justify-center w-full mt-10 md:mt-0">
                    <div className={`relative w-full max-w-xs sm:max-w-sm md:max-w-md h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg border border-indigo-100 flex items-center justify-center transition-all duration-500 ${slide.gradient}`}>
                        {/* Quote with fade transition */}
                        <div className={`relative z-10 flex flex-col items-center justify-center w-full h-full transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
                            <span
                                className={`text-base text-center sm:text-2xl md:text-3xl drop-shadow-xl px-4 sm:px-8 tracking-wide ${
                                    slide.color === "White" ? "text-gray-900" : "text-white"
                                }`}
                            >
                                "{slide.quote}"
                                <br /><br />
                                <span className="italic font-light">{slide.color}</span>
                            </span>
                        </div>
                        {/* Progress bar */}
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-white/30 z-20">
                            <div
                                ref={progressRef}
                                className="h-full rounded-full bg-white"
                                style={{
                                    width: "0%",
                                    transition: `width ${SLIDE_DURATION}ms linear`,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}