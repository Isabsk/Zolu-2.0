export default function Navaratri() {
	return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-10">
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                        {/* Left: Heading and Paragraphs */}
                        <div className="flex-1 flex flex-col items-start justify-center">
                            <h3 className="text-base font-semibold text-indigo-600 mb-2">
                                ZOLU 2.0 - 2025
                            </h3>
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
                                Celebrate the Colors of Navaratri
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                                Navaratri is a vibrant festival that celebrates art, music, dance, and the joy of coming together as a community. From energetic Garba and Dandiya nights to the colorful Golu displays, it’s a season of creativity, culture, and connection. Zolu 2.0 captures this spirit, bringing nine days of festive fun, learning, and celebration to Zoho.
                            </p>
                            <p className="text-lg text-gray-700">
                                Brought to you by Zoho Schools of Business, Zolu 2.0 is more than just a festival — it’s an experience. Expect exciting activities, thought-provoking quizzes, team games, inspiring workshops, and moments of pure entertainment. Together, let’s make these nine days a journey of joy, discovery, and unforgettable memories.
                            </p>
                        </div>
                        {/* Right: Navaratri Image */}
                        <div className="flex-1 flex items-center justify-center">
                            <img
                                src="/navaratri.png"
                                alt="Navaratri"
                                className="w-full max-w-md rounded-2xl shadow-lg border border-indigo-100 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}