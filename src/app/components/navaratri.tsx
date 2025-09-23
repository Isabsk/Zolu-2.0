import { AuroraText } from "@/components/ui/aurora-text";

export default function Navaratri() {
	return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-10">
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                        {/* Left: Heading and Paragraphs */}
                        <div className="flex-1 flex flex-col items-start justify-center">
                            <h2 className="text-3xl font-semibold text-indigo-600 mb-2">
                                <AuroraText>Zolu 2.0</AuroraText>
                            </h2>
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
                                Celebrate the Colors of Navaratri
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Navaratri is a vibrant festival that celebrates art, music, dance, and the joy of coming together as a community. From energetic Garba and Dandiya nights to the colorful Golu displays, it's a season of creativity, culture, and connection.  
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Brought to you by Zoho Schools of Business, Zolu 2.0 is more than just a festival — it's an experience. We’ve brought together colours from different worlds, Marketing and Festivity connecting them into activities this week.
                            </p>
                            <p className="text-lg text-gray-700">
                                Expect exciting activities, thought-provoking quizzes, team games and moments of learning and entertainment. Together, let's make these nine days a journey of joy, discovery, and unforgettable.
                            </p>
                        </div>
                        {/* Right: Navaratri Image */}
                        <div className="flex-1 flex items-center justify-center">
                            <img
                                src="/navaratri.png"
                                alt="Navaratri"
                                className="w-full max-w-md object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}