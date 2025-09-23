import { LockClosedIcon } from "@heroicons/react/24/outline";

const colorData = [
	{
		name: "White",
		color: "bg-white border",
		date: "2025-09-22",
		description: `“Amma, why are you wearing white?” little Pranavi asked, tugging at her mother’s saree. She was doing a special assignment for her class at Zoho School of Business, where she had to learn about the significance of colors.

        “Because it’s the first day of Navaratri,” her mother replied, brushing her hair back. “White stands for purity, peace, and new beginnings. It’s the color that clears the mind and fills the heart with calm. And you know, Pranavi, white is special because it contains all the colors—so it reminds us of endless possibilities.”

        Pranavi’s eyes lit up. “Like a fresh notebook?”

“Exactly! And even in business, white symbolizes trust, simplicity, and clarity—just like brands such as Dove and Nike show through their designs.”
“So wearing white makes me calm and powerful?” Pranavi grinned.

“Exactly, my dear. White reminds us that every beginning can be pure, peaceful —it’s also the beginning of Zolu in Zoho.”
That day, Pranavi picked her whitest dress, ready to celebrate the first day of Navaratri at Zoho, embracing both tradition and her own fresh beginnings.
        
        
        Day 1 of Navratri honors Shailaputri, symbol of beginnings. It starts with white uncluttered and pure. The same way, when you open an Apple box or hold Dove’s white bar, you feel the calm assurance of a clean start. White is not empty. It is powerful, because it signals peace, trust, and the promise of something new.

Imagine walking into a store where everything is pure white — the shelves, the walls, even the packaging. There's no noise, no clutter. Instantly, you feel calm, safe, and curious. That is the psychology of white in marketing.

We can see white in places like Health care, Tech, Spiritual wellbeing, Luxury.
Why did Dove pick a plain white bar? Because white tells the story of purity without saying a word. Dove markets themselves as “1/4 moisturising cream” and customers believe it without batting an eye. Their advertisements are also filmed with white background and the models also wear white which subtly reinforces trust.`,
		symbolism: `🎉 Celebrate White Day, Zoho!

        Wear white, spot white objects, and capture the aesthetic around you! 
        
        Post your photos on Connect under #ZoluDiaries—the most creative post will get a special shout out on our website. Let’s make this Navaratri full of clarity, peace, and style!`,
		related: ["Silver", "Ivory"],
		funFact: "White reflects all wavelengths of light, making it the color of sunlight.",
		images: [
			"https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/ae966d185497393.65650f316dfff.jpg",
			"http://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/3f0a87195466033.660e104c7c38b.png",
		],
		quizUrl: "https://form.typeform.com/to/bMSSVSP0",
	},
	{
		name: "Red",
		color: "bg-red-500",
		date: "2025-09-23",
		description: `Red is the color of energy and passion. It grabs attention and stirs emotions. In marketing, red is used to create urgency and excitement, often seen in clearance sales and fast food branding. Red is also the color of love and celebration in many cultures.`,
		symbolism: "Love, power, courage, and fertility.",
		occasions: "Popular for weddings, festivals, and celebrations.",
		culture: "In China, red is the color of luck and prosperity. In India, brides traditionally wear red saris.",
		related: ["Maroon", "Crimson"],
		funFact: "Red is the first color babies see after black and white.",
		images: ["/images/red-1.jpg", "/images/red-2.jpg"],
		quizUrl: "https://www.typeform.com/to/red-quiz-url",
	},
	{
		name: "Royal Blue",
		color: "bg-blue-700",
		date: "2025-09-24",
		description: "Royal Blue stands for tranquility and depth.",
		symbolism: "Trust, loyalty, wisdom, and confidence.",
		occasions: "Used in formal wear, uniforms, and festive attire.",
		culture: "Royal blue is associated with royalty and authority in many cultures.",
		related: ["Navy Blue", "Sky Blue"],
		funFact: "Royal blue was created for Queen Charlotte of England in the 18th century.",
	},
	{
		name: "Yellow",
		color: "bg-yellow-400",
		date: "2025-09-25",
		description: "Yellow is the color of happiness and optimism.",
		symbolism: "Joy, intellect, energy, and freshness.",
		occasions: "Worn during spring festivals and celebrations.",
		culture: "In Hinduism, yellow is sacred and worn during religious rituals.",
		related: ["Gold", "Lemon"],
		funFact: "Yellow is the most visible color from a distance.",
	},
	{
		name: "Green",
		color: "bg-green-500",
		date: "2025-09-26",
		description: "Green signifies growth and harmony.",
		symbolism: "Nature, fertility, renewal, and safety.",
		occasions: "Used in harvest festivals and eco-friendly events.",
		culture: "Green is considered auspicious in Islam and is the color of paradise.",
		related: ["Olive", "Mint"],
		funFact: "Green is the color most commonly found in nature.",
	},
	{
		name: "Grey",
		color: "bg-gray-400",
		date: "2025-09-27",
		description: "Grey is for balance and neutrality.",
		symbolism: "Sophistication, practicality, timelessness.",
		occasions: "Popular in business attire and modern design.",
		culture: "Grey is often used to represent wisdom and maturity.",
		related: ["Silver", "Charcoal"],
		funFact: "Grey is the only color that is both a shade and a tone.",
	},
	{
		name: "Orange",
		color: "bg-orange-500",
		date: "2025-09-28",
		description: "Orange is vibrant and enthusiastic.",
		symbolism: "Creativity, enthusiasm, success, and encouragement.",
		occasions: "Worn during harvest festivals and celebrations.",
		culture: "In Hinduism, orange (saffron) is sacred and worn by monks.",
		related: ["Peach", "Amber"],
		funFact: "Orange is named after the fruit, not the other way around.",
	},
	{
		name: "Peacock Green",
		color: "bg-teal-700",
		date: "2025-09-29",
		description: "Peacock Green is unique and refreshing.",
		symbolism: "Beauty, pride, uniqueness, and renewal.",
		occasions: "Used in festive wear and artistic designs.",
		culture: "Inspired by the Indian peacock, a national bird symbolizing grace.",
		related: ["Turquoise", "Emerald"],
		funFact: "Peacock feathers appear green due to microscopic structures that reflect light.",
	},
	{
		name: "Pink",
		color: "bg-pink-400",
		date: "2025-09-30",
		description: "Pink is playful and loving.",
		symbolism: "Affection, compassion, sweetness, and romance.",
		occasions: "Popular for birthdays, baby showers, and romantic events.",
		culture: "Pink is associated with femininity in Western cultures.",
		related: ["Rose", "Magenta"],
		funFact: "Pink was once considered a masculine color in Europe.",
	},
];

function formatDate(dateStr: string) {
	const date = new Date(dateStr);
	return date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
	});
}

export default function ColorPage({ params }: { params: { color: string } }) {
	const today = new Date();
	const colorInfo = colorData.find(
		(c) => c.name.toLowerCase().replace(/\s+/g, "-") === params.color
	);

	if (!colorInfo) {
		return <div className="p-8 text-center">Color not found.</div>;
	}

	const unlockDate = new Date(colorInfo.date);
	const unlocked = today >= unlockDate;

	return (
		<div className="min-h-screen w-full bg-gray-50">
			{/* Banner Section */}
			<div
				className="relative h-64 flex items-center justify-center"
				style={{
					backgroundImage: `url(/images/${colorInfo.name.toLowerCase().replace(/\s+/g, "-")}.jpg)`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0" />
				<h1 className="relative z-10 text-5xl font-extrabold text-white text-center drop-shadow-lg">
					{colorInfo.name}
				</h1>
			</div>

			{/* Info Section */}
			<section className="max-w-2xl mx-auto py-10 px-4">
				<h2 className="text-3xl font-bold mb-4">About {colorInfo.name}</h2>
				{unlocked ? (
					<>  
						<div className="whitespace-pre-line text-lg mb-6">
							{colorInfo.description}
						</div>
                        {/* Collage Section */}
						{colorInfo.images && colorInfo.images.length > 0 && (
							<div className="flex flex-col sm:flex-row gap-4 mt-8">
								{colorInfo.images.map((img, idx) => (
									<img
										key={img}
										src={img}
										alt={`${colorInfo.name} collage ${idx + 1}`}
										className="rounded-xl shadow-lg w-full sm:w-1/2 object-cover aspect-[4/3]"
									/>
								))}
							</div>
						)}
						<p className="mb-2 mt-10">
							{colorInfo.symbolism}
						</p>
					</>
				) : (
					<div className="flex flex-col items-center py-8">
						<LockClosedIcon className="w-16 h-16 text-gray-700 mb-6" />
						<p className="text-2xl font-semibold text-gray-700">
							This page is locked until {formatDate(colorInfo.date)}.
						</p>
					</div>
				)}
			</section>

			{/* Menti/Typeform Quiz Section */}
			{unlocked && colorInfo.quizUrl && (
				<section className="max-w-2xl mx-auto py-10 px-4">
					<h2 className="text-2xl font-bold mb-4">Take the Quiz!</h2>
					<div className="aspect-video rounded-lg overflow-hidden shadow-lg">
						<iframe
                            src={colorInfo.quizUrl}
                            width="100%"
                            height="100%"
                            allowFullScreen
                            title={`${colorInfo.name} Quiz`}
                            className="w-full h-full border-0"
                        />
					</div>
				</section>
			)}

			{/* Card Details Section */}
			{unlocked && (
				<section className="max-w-2xl mx-auto py-10 px-4">
					<div className="bg-white rounded-xl shadow-xl p-8">
						<h3 className="text-xl font-bold mb-2">Details</h3>
						<ul className="mb-4">
							<li>
								<strong>Unlock Date:</strong> {formatDate(colorInfo.date)}
							</li>
							<li>
								<strong>Related Colors:</strong> {colorInfo.related.join(", ")}
							</li>
						</ul>
						<div className="bg-gray-100 rounded-lg p-4">
							<h4 className="font-bold mb-2">Fun Fact</h4>
							<p>{colorInfo.funFact}</p>
						</div>
					</div>
				</section>
			)}
		</div>
	);
}