import Link from "next/link";
import { LockClosedIcon } from "@heroicons/react/24/outline";

const colorData = [
	{
		name: "White",
		color: "bg-white border",
		date: "2025-09-22",
		funFact: "Up to 90% of a consumer’s initial impression of a product is based on color alone, with white often conveying purity, simplicity, and trustworthiness.",
		quizUrl: "https://forms.fillout.com/t/eFVpHtnjFtus"
	},
	{
		name: "Red",
		color: "bg-red-500",
		date: "2025-09-23",
		funFact: "Psychologists say red can quicken the heartbeat, spark excitement, and create a sense of urgency.",
		quizUrl: "https://forms.fillout.com/t/c3RYsWfv9Fus"
	},
	{
		name: "Royal Blue",
		color: "bg-blue-700",
		date: "2025-09-24",
		funFact: "Global surveys consistently show blue as the world’s favorite color.",
		quizUrl: "https://forms.fillout.com/t/84Pinn4Bqrus"
	},
	{
		name: "Yellow",
		color: "bg-yellow-400",
		date: "2025-09-25",
		title: "Why Yellow?",
		description: "Yellow is the color of happiness and optimism.",
		symbolism: "Joy, intellect, energy, and freshness.",
		quizUrl: "https://forms.fillout.com/t/yellow-quiz",
		images: [],
	},
	{
		name: "Green",
		color: "bg-green-500",
		date: "2025-09-26",
		title: "Why Green?",
		description: "Green signifies growth and harmony.",
		symbolism: "Nature, fertility, renewal, and safety.",
		occasions: "Used in harvest festivals and eco-friendly events.",
		culture: "Green is considered auspicious in Islam and is the color of paradise.",
		related: ["Olive", "Mint"],
		funFact: "Green is the color most commonly found in nature.",
		images: [],
	},
	{
		name: "Grey",
		color: "bg-gray-400",
		date: "2025-09-27",
		title: "Why Grey?",
		description: "Grey is for balance and neutrality.",
		symbolism: "Sophistication, practicality, timelessness.",
		occasions: "Popular in business attire and modern design.",
		culture: "Grey is often used to represent wisdom and maturity.",
		related: ["Silver", "Charcoal"],
		funFact: "Grey is the only color that is both a shade and a tone.",
		images: [],
	},
	{
		name: "Orange",
		color: "bg-orange-500",
		date: "2025-09-28",
		title: "Why Orange?",
		description: "Orange is vibrant and enthusiastic.",
		symbolism: "Creativity, enthusiasm, success, and encouragement.",
		occasions: "Worn during harvest festivals and celebrations.",
		culture: "In Hinduism, orange (saffron) is sacred and worn by monks.",
		related: ["Peach", "Amber"],
		funFact: "Orange is named after the fruit, not the other way around.",
		images: [],
	},
	{
		name: "Peacock Green",
		color: "bg-teal-700",
		date: "2025-09-29",
		title: "Why Peacock Green?",
		description: "Peacock Green is unique and refreshing.",
		symbolism: "Beauty, pride, uniqueness, and renewal.",
		occasions: "Used in festive wear and artistic designs.",
		culture: "Inspired by the Indian peacock, a national bird symbolizing grace.",
		related: ["Turquoise", "Emerald"],
		funFact: "Peacock feathers appear green due to microscopic structures that reflect light.",
		images: [],
	},
	{
		name: "Pink",
		color: "bg-pink-400",
		date: "2025-09-30",
		title: "Why Pink?",
		description: "Pink is playful and loving.",
		symbolism: "Affection, compassion, sweetness, and romance.",
		occasions: "Popular for birthdays, baby showers, and romantic events.",
		culture: "Pink is associated with femininity in Western cultures.",
		related: ["Rose", "Magenta"],
		funFact: "Pink was once considered a masculine color in Europe.",
		images: [],
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

  const renderContent = () => {
    switch (colorInfo.name.toLowerCase()) {
      case "white":
        return (
          <section className="max-w-2xl mx-auto py-10 px-4">
			<section className="max-w-2xl mx-auto py-10 px-4">
				<h2 className="text-2xl font-bold mb-4">Take the Quiz!</h2>
				<div className="rounded-lg overflow-hidden shadow-lg" style={{ height: "550px" }}>
					<iframe
						src={colorInfo.quizUrl}
						width="100%"
						height="100%"
						allowFullScreen
						title={`${colorInfo.name} Quiz`}
						className="w-full h-full border-0"
					/>
				</div>
				<div className="whitespace-pre-line text-lg my-12">
					<p>
						<strong>“Amma, why are you wearing white?”</strong> little Pranavi asked, 
						tugging at her mother’s saree. She was working on an assignment about the psychology of colours.
					</p>

					<p className="mt-4">
						<em>
						White stands for purity, peace, and new beginnings. It clears the mind, calms the heart,
						and holds all colours within it reminding us of endless possibilities.
						</em>
					</p>

					<p className="mt-4">
						<strong>“Like a fresh notebook?”</strong> Pranavi beamed.
					</p>

					<p className="mt-4">
						<strong>“Exactly.</strong> And, wonderfully, today marks the first day of Navaratri,” her mother
						smiled. Day 1 of Navratri honors Shailaputri, goddess of beginnings. Even in business,
						white symbolizes trust and simplicity. Imagine Dove’s plain white bar. Dove chose white because it
						silently tells the story of purity, and its plain bar attracts customers who instantly feel it is safe,
						gentle, and honest. They do not need noise, white speaks without words.”
					</p>

					<p className="mt-4">
						White reflects that uncluttered start — the same feeling you get when holding Dove’s bar of soap.
						White isn’t empty; it’s powerful. It signals peace, trust, and the promise of something new.
					</p>

					<p className="mt-4">
						Imagine walking into a store where everything is white — the walls, shelves, and packaging. 
						No clutter, just calm. Instantly, you feel safe, curious, and open. That’s the psychology of white in marketing.
					</p>

					<p className="mt-4">
						That morning, Pranavi chose her whitest dress, ready to celebrate Navaratri, embracing tradition, 
						business lessons, and her own fresh beginnings.
					</p>
				</div>
				{/* Collage Section */}
					<div className="flex gap-4">
					<img
						src="/white-1.png"
						alt="White Activity"
						className="rounded-lg shadow-lg w-1/2 object-cover aspect-[4/3]"
					/>
					<img
						src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/ae966d185497393.65650f316dfff.jpg"
						alt="White Activity"
						className="rounded-lg shadow-lg w-1/2 object-cover aspect-[4/3]"
					/>
					</div>
				<p className="mb-2 mt-10 text-xl font-medium">
					<p className="mb-3">Celebrate White Day, Zoho!</p>

					<p className="mb-3">
						Wear white, spot white objects, and capture the aesthetic around you!
					</p>

					<p className="mb-3">
						Post your photos on <strong>Connect</strong> under <strong>#ZoluDiaries</strong> — 
						the most creative post will get a special shout out on our website.
					</p>

					<p className="font-semibold">
						Let’s make this Navaratri full of clarity, peace, and style!
					</p>
				</p>
				{/* Connect Post Button */}
				<div className="mt-6 w-full text-center">
					<a
						href="https://connect.zoho.in/portal/intranet/forum/post/celebrate-navaratri-with-zolu-2-0-%E2%80%93-a-zoho-school-of-business-initiative"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-8 py-3 rounded-lg font-semibold text-white shadow-lg bg-gradient-to-r from-pink-500 via-indigo-500 to-yellow-400 bg-[length:200%_200%] animate-gradient-x transition hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
					>
						<button id="dropPics">Drop Your Pics Here</button>
					</a>
				</div>
			</section>
            <section className="max-w-2xl mx-auto px-4">
				<div className="bg-white rounded-xl shadow-xl p-8">
					<div className="bg-gray-100 rounded-lg p-4">
						<h4 className="font-bold mb-2">Fun Fact</h4>
						<p>{colorInfo.funFact}</p>
					</div>
				</div>
			</section>
          </section>
        );
      case "red":
        return (
          <section className="max-w-2xl mx-auto py-10 px-4">
			<section className="max-w-2xl mx-auto py-10 px-4">
				<h2 className="text-2xl font-bold mb-4">Take the Quiz!</h2>
				<div className="rounded-lg overflow-hidden shadow-lg" style={{ height: "550px" }}>
					<iframe
						src={colorInfo.quizUrl}
						width="100%"
						height="100%"
						allowFullScreen
						title={`${colorInfo.name} Quiz`}
						className="w-full h-full border-0"
					/>
				</div>
				<div className="whitespace-pre-line text-lg my-12">
					<div className="max-w-3xl mx-auto p-6 space-y-6">
					<h1 className="text-3xl font-bold text-center text-red-600">
						Red tells a different story
					</h1>

					<p>
						The second day of Navaratri is draped in red—a colour that feels alive, 
						the spark in a flame, the pulse that makes a festival electric. 
						In Navaratri, it signifies power and devotion, but beyond that, 
						it drives how we shop, watch, and even dress. 
						Wearing red is more than tradition; it’s stepping into your own power. 
						It’s for those who lead, stand out, and get remembered.
					</p>

					<p>
						Red has a magnetic pull. That’s why malls shout 
						<span className="font-semibold text-red-600"> “SALE” </span> 
						in red and online shops flash red 
						<span className="font-semibold text-red-600"> “BUY NOW” </span> 
						buttons. It’s not a coincidence—it’s strategy. 
						Red makes moments feel urgent, impossible to ignore.
					</p>

					<p>
						The biggest brands know this. 
						<span className="font-semibold"> Coca-Cola </span> owns its vibrant red can. 
						<span className="font-semibold"> Netflix </span> dares you to binge with its bold red logo. 
						<span className="font-semibold"> YouTube’s </span> red button screams “hit play now.” 
						Red is never passive—it demands action, choice, and feeling.
					</p>

					<p>
						Even everyday products use it. 
						Eveready’s <span className="italic">“Laal Eveready”</span> and 
						<span className="italic"> “Give Me Red” </span> built decades of trust and power. 
						And on a global scale, Bono’s (RED) campaign turned colour into cause—partnering with 
						Apple, Nike, and Starbucks to fight HIV/AIDS. Each red product symbolized urgency, 
						action, and hope.
					</p>

					<p>
						Zoho taps into the same psychology. From red 
						<span className="font-semibold text-red-600"> “Get Started” </span> CTAs 
						to product logos like <span className="font-semibold">SalesIQ</span>, 
						<span className="font-semibold"> Recruit</span>, and 
						<span className="font-semibold"> Show</span>, red isn’t just design—it’s strategy. 
						Just like global giants, Zoho proves red drives decisions, even in business software.
					</p>

					<div className="bg-red-50 p-4 rounded-xl text-center">
						<h2 className="text-xl font-bold text-red-700">
						Today, Wear Red. Step Into Your Power.
						</h2>
						<p className="text-red-600">
						Lead. Stand out. Be remembered.
						</p>
					</div>
					</div>
				</div>
				{/* Collage Section */}
					<div className="flex gap-4">
					<img
						src="/red-1.png"
						alt="Red Activity"
						className="rounded-lg shadow-lg w-1/2 object-cover aspect-[4/3]"
					/>
					<img
						src="/red-2.png"
						alt="Red Activity"
						className="rounded-lg shadow-lg w-1/2 object-cover aspect-[4/3]"
					/>
					</div>
				<p className="mb-2 mt-10 text-xl font-medium">
					<p className="mb-3">Day 2 – Red: Energy &amp; Courage</p>

					<p className="mb-3">
					We all long for a burst of motivation, and here’s our chance to let our energy out!
					</p>

					<p className="mb-3">
					Share your favorite motivational quote and post it on <strong>Connect</strong> under <strong>#ZoluDiaries</strong> — 
					don’t forget to tag a colleague who motivates you when you’re feeling down.
					</p>

					<p className="font-semibold">
					Let’s spread courage, positivity, and unstoppable energy across the Zoho community!
					</p>
				</p>
				{/* Connect Post Button */}
				<div className="mt-6 w-full text-center">
					<a
						href="https://connect.zoho.in/portal/intranet/forum/post/celebrate-navaratri-with-zolu-2-0-%E2%80%93-a-zoho-school-of-business-initiative"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-8 py-3 rounded-lg font-semibold text-white shadow-lg bg-gradient-to-r from-pink-500 via-indigo-500 to-yellow-400 bg-[length:200%_200%] animate-gradient-x transition hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
					>
						<button id="dropPics">Drop Your Pics Here</button>
					</a>
				</div>
			</section>
            <section className="max-w-2xl mx-auto px-4">
				<div className="bg-white rounded-xl shadow-xl p-8">
					<div className="bg-gray-100 rounded-lg p-4">
						<h4 className="font-bold mb-2">Fun Fact</h4>
						<p>{colorInfo.funFact}</p>
					</div>
				</div>
			</section>
          </section>
        );
	  case "royal blue":
        return (
          <section className="max-w-2xl mx-auto py-10 px-4">
			<section className="max-w-2xl mx-auto py-10 px-4">
				<h2 className="text-2xl font-bold mb-4">Take the Quiz!</h2>
				<div className="rounded-lg overflow-hidden shadow-lg" style={{ height: "550px" }}>
					<iframe
						src={colorInfo.quizUrl}
						width="100%"
						height="100%"
						allowFullScreen
						title={`${colorInfo.name} Quiz`}
						className="w-full h-full border-0"
					/>
				</div>
				<div className="whitespace-pre-line text-lg my-12">
					<div className="max-w-3xl mx-auto p-6 space-y-6">
					<h1 className="text-3xl font-bold text-center text-blue-600">
						Why Brands Trust Blue?
					</h1>

					<p>
						It’s not just because it’s pretty. Blue works because it makes you trust.
						It calms you, connects with you, and yes… sometimes even makes you reach
						for your wallet without thinking.
					</p>

					<div className="flex gap-4">
					<img
						src="/images/blue-1.png"
						alt="Royal Blue Activity"
						className="rounded-lg shadow-lg w-1/2 object-cover aspect-[4/3]"
					/>
					<img
						src="/images/blue-2.png"
						alt="Royal Blue Activity"
						className="rounded-lg shadow-lg w-1/2 object-cover aspect-[4/3]"
					/>
					</div>

					<p>
						<span className="font-semibold">Blue is pure.</span> Blue is tied to nature:
						water and sky, symbols of freshness and purity. That’s why{" "}
						<span className="font-semibold">Nivea</span> chose blue. It communicates
						trust, care, cleanliness, and timelessness, all while building a globally
						consistent identity.
					</p>

					<div className="flex gap-4">
					<img
						src="/images/blue-3.png"
						alt="Royal Blue Activity"
						className="rounded-lg shadow-lg w-full object-cover"
					/>
					</div>

					<p>
						<span className="font-semibold">Blue = Likability.</span> In the U.S., blue
						is often ranked as the most liked color. Even if it’s not your favorite,
						very few people dislike it. That universal likability explains why{" "}
						<span className="font-semibold">Facebook</span> and{" "}
						<span className="font-semibold">LinkedIn</span> all use blue in their logos.
					</p>

					<div className="flex gap-4">
					<img
						src="/images/blue-4.png"
						alt="Royal Blue Activity"
						className="rounded-lg shadow-lg w-full object-cover"
					/>
					</div>

					<p>
						<span className="font-semibold">Blue means business.</span> Blue is a safe,
						predictable, and professional choice. It has long been associated with
						suits, ties, and corporate trustworthiness.{" "}
						<span className="font-semibold">IBM’s</span> striped blue logo was inspired
						by pinstripe suits, while brands like{" "}
						<span className="font-semibold">American Express</span>,{" "}
						<span className="font-semibold">GE</span>, and{" "}
						<span className="font-semibold">Chase</span> also leverage blue. Even modern
						B2B platforms such as <span className="font-semibold">Zoho</span> continue
						this tradition.
					</p>

					<div className="flex gap-4">
					<img
						src="/images/blue-9.png"
						alt="Royal Blue Activity"
						className="rounded-lg shadow-lg w-full object-cover"
					/>
					</div>

					<p>
						<span className="font-semibold">Blue = Clean and Professional.</span> Brands
						like <span className="font-semibold">Oral-B</span> use blue to represent
						cleanliness, freshness, and medical trust, while also standing apart from
						competitors like Colgate’s red.
					</p>

					<p>
						Blue isn’t just pretty—it’s strategic. Whether you want your brand to feel
						fresh, clean, approachable, or professional, the right shade of blue can do
						the heavy lifting for you.
					</p>

					<div className="bg-blue-50 p-4 rounded-xl text-center">
						<h2 className="text-xl font-bold text-blue-700">
						Today, Wear Blue. Build Trust.
						</h2>
						<p className="text-blue-600">
						Be calm. Be clear. Be confidently you.
						</p>
					</div>
					</div>
				</div>

				<section className="max-w-4xl mx-auto pb-10 px-4">
				  <div className="relative overflow-hidden rounded-lg shadow-lg">
					<video
					  src="/images/blue.mp4"
					  controls
					  className="w-full h-auto rounded-lg"
					>
					  Your browser does not support the video tag.
					</video>
				  </div>
				</section>
				
				<p className="mb-2 mt-10 text-xl font-medium">
					<p className="mb-3">Exhibit Your Confidence With Royalty - <strong>Wearing Blue</strong></p>

					<p className="mb-3">
					Let the <strong>ZohoFam</strong> know about your celebration of colours by posting your pictures 
					in the <strong>Connect Post comments</strong> with <strong>#ZohoKolam</strong>.
					</p>

					<p className="mb-3">
					Any form of support is always welcome and appreciated. Stay Confident, Trustworthy, and Secure 
					as we embrace the power of <strong>Blue</strong>!
					</p>
				</p>
				{/* Connect Post Button */}
				<div className="mt-6 w-full text-center">
					<a
						href="https://connect.zoho.in/portal/intranet/forum/post/celebrate-navaratri-with-zolu-2-0-%E2%80%93-a-zoho-school-of-business-initiative"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-8 py-3 rounded-lg font-semibold text-white shadow-lg bg-gradient-to-r from-pink-500 via-indigo-500 to-yellow-400 bg-[length:200%_200%] animate-gradient-x transition hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
					>
						<button id="dropPics">Drop Your Pics Here</button>
					</a>
				</div>
			</section>
            <section className="max-w-2xl mx-auto px-4">
				<div className="bg-white rounded-xl shadow-xl p-8">
					<div className="bg-gray-100 rounded-lg p-4">
						<h4 className="font-bold mb-2">Fun Fact</h4>
						<p>{colorInfo.funFact}</p>
					</div>
				</div>
			</section>
          </section>
        );	
      case "yellow":
        return (
          <section className="max-w-2xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold mb-4">Yellow Day Fun</h2>
            <p className="text-lg mb-6">
              Yellow is all about joy and optimism. Post a picture of something
              that made you smile today.
            </p>
            <div className="flex gap-4">
              <img
                src="/yellow-activity-1.jpg"
                alt="Yellow Activity"
                className="rounded-lg shadow-lg w-1/2"
              />
              <img
                src="/yellow-activity-2.jpg"
                alt="Yellow Activity"
                className="rounded-lg shadow-lg w-1/2"
              />
            </div>
          </section>
        );
      // Add cases for other colors...
      default:
        return (
          <section className="max-w-2xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-lg mb-6">
              Stay tuned for more exciting content about {colorInfo.name}!
            </p>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 relative">
      {/* Back to Home Button */}
      <div className="fixed top-4 left-4 z-30">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 shadow hover:bg-white transition text-dark-700 font-semibold text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-dark-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <span className="hidden xs:inline">Back to Home</span>
        </Link>
      </div>

      {/* Banner Section */}
      <div
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage: `url(/images/${colorInfo.name
            .toLowerCase()
            .replace(/\s+/g, "-")}.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="relative z-10 text-5xl font-extrabold text-white text-center drop-shadow-lg">
          {colorInfo.name}
        </h1>
      </div>

      {/* Dynamic Content Section */}
      {unlocked ? renderContent() : (
        <div className="flex flex-col items-center py-8">
          <LockClosedIcon className="w-16 h-16 text-gray-700 mb-6" />
          <p className="text-2xl font-semibold text-gray-700">
            This page is locked until {formatDate(colorInfo.date)}.
          </p>
        </div>
      )}
    </div>
  );
}