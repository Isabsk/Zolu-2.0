import { LineShadowText } from "@/components/ui/line-shadow-text";
import { ShineBorder } from "@/components/ui/shine-border";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function Hero() {
    // No need for useRef here, just scroll to the section by id
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
                        Zolu brings us together to honor the festive spirit of Navaratri with music, dance, and moments of togetherness that light up our workplace.
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
                {/* Right: Video Quote Section */}
                <div className="flex-1 flex items-center justify-center w-full mt-10 md:mt-0">
                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg border border-indigo-100">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        >
                            <source src="/background.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 z-10" />
                        <div className="relative z-20 flex items-center justify-center w-full h-full">
                            <span className="text-base text-center sm:text-2xl md:text-5xl font-bold text-white drop-shadow-xl px-4 sm:px-8 tracking-wide">
                                “Navratri is a festival to celebrate the victory of good over evil.”<br /><br />
                                <span className="italic font-light"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}