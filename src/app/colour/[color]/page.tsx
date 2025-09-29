import Link from "next/link";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import Slider from "@/app/components/Slider";
import PeacockGreenMatchGame from "@/app/games/PeacockGreenMatchGame"

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
		funFact: "About 75% of fruits that ripen turn yellow as a signal to eat.",
		quizUrl: "https://forms.fillout.com/t/qFK16PQxZPus",
		slides: ["/slider/1.png", "/slider/2.png", "/slider/3.png", "/slider/4.png", "/slider/5.png", "/slider/6.png", "/slider/7.png", "/slider/8.png", "/slider/9.png", "/slider/10.png", "/slider/11.png", "/slider/12.png", "/slider/13.png", "/slider/14.png", "/slider/15.png", "/slider/16.png", "/slider/17.png", "/slider/18.png", "/slider/19.png", "/slider/20.png"]
	},
	{
		name: "Green",
		color: "bg-green-500",
		date: "2025-09-26",
		funFact: "Green is the most restful color for the human eye and symbolizes growth, harmony, and freshness.",
		quizUrl: "https://forms.fillout.com/t/6JqzYexnngus",
		game: "https://im-a-puzzle.com/share/32b14c5521e5e22"
	},
	{
		name: "Grey",
		color: "bg-gray-400",
		date: "2025-09-27",
		funFact: "Apple’s “Space Grey” became so iconic that other tech brands rushed to release their own grey editions.",
		quizUrl: "https://forms.fillout.com/t/3WpQPhw8Gpus",
	},
	{
		name: "Orange",
		color: "bg-orange-500",
		date: "2025-09-28",
		funFact: "Orange is known to stimulate creativity, enthusiasm, and adventure — it’s the color of warmth and fun.",
		quizUrl: "https://forms.fillout.com/t/55HTEwSqLdus",
	},
	{
		name: "Peacock Green",
		color: "bg-teal-700",
		date: "2025-09-29",
		funFact: "Peacock Green represents elegance and uniqueness, inspired by the majestic feathers of a peacock.",
		quizUrl: "https://forms.fillout.com/t/6zKW4w8dKmus",
	},
	{
		name: "Pink",
		color: "bg-pink-400",
		date: "2025-09-30",
		funFact: "Pink symbolizes compassion, love, and kindness — often associated with positivity and warmth.",
		quizUrl: "https://forms.fillout.com/t/yellow-quiz",
	}
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
						Let&apos;s make this Navaratri full of clarity, peace, and style!
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
						Wearing red is more than tradition; it&apos;s stepping into your own power. 
						It&apos;s for those who lead, stand out, and get remembered.
					</p>

					<p>
						Red has a magnetic pull. That&apos;s why malls shout 
						<span className="font-semibold text-red-600"> “SALE” </span> 
						in red and online shops flash red 
						<span className="font-semibold text-red-600"> “BUY NOW” </span> 
						buttons. It&apos;s not a coincidence—it&apos;s strategy. 
						Red makes moments feel urgent, impossible to ignore.
					</p>

					<p>
						The biggest brands know this. 
						<span className="font-semibold"> Coca-Cola </span> owns its vibrant red can. 
						<span className="font-semibold"> Netflix </span> dares you to binge with its bold red logo. 
						<span className="font-semibold"> YouTubes&apos; </span> red button screams “hit play now.” 
						Red is never passive—it demands action, choice, and feeling.
					</p>

					<p>
						Even everyday products use it. 
						Eveready&apos;s <span className="italic">“Laal Eveready”</span> and 
						<span className="italic"> “Give Me Red” </span> built decades of trust and power. 
						And on a global scale, Bono&apos;s (RED) campaign turned colour into cause—partnering with 
						Apple, Nike, and Starbucks to fight HIV/AIDS. Each red product symbolized urgency, 
						action, and hope.
					</p>

					<p>
						Zoho taps into the same psychology. From red 
						<span className="font-semibold text-red-600"> “Get Started” </span> CTAs 
						to product logos like <span className="font-semibold">SalesIQ</span>, 
						<span className="font-semibold"> Recruit</span>, and 
						<span className="font-semibold"> Show</span>, red isn&apos;t just design—it&apos;s strategy. 
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
					<p className="mb-3">Day 2 &ndash; Red: Energy &amp; Courage</p>

					<p className="mb-3">
					We all long for a burst of motivation, and here&apos;s our chance to let our energy out!
					</p>

					<p className="mb-3">
					Share your favorite motivational quote and post it on <strong>Connect</strong> under <strong>#ZoluDiaries</strong> — 
					don&apos;t forget to tag a colleague who motivates you when you&apos;re feeling down.
					</p>

					<p className="font-semibold">
					Let&apos;s spread courage, positivity, and unstoppable energy across the Zoho community!
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
						It&apos;s not just because it&apos;s pretty. Blue works because it makes you trust.
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
						water and sky, symbols of freshness and purity. That&apos;s why{" "}
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
						is often ranked as the most liked color. Even if it&apos;s not your favorite,
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
						<span className="font-semibold">IBM&apos;s</span> striped blue logo was inspired
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
						competitors like Colgate&apos;s red.
					</p>

					<p>
						Blue isn&apos;t just pretty—it&apos;s strategic. Whether you want your brand to feel
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
					<Slider slides={colorInfo.slides ?? []} />
				</div>
				<div className="mb-2 mt-10 text-xl font-medium">
					<p className="mb-3">
						Radiate Energy with Your <strong>Yellow Attire</strong>
					</p>

					<p className="mb-3">
						As we celebrate colours, let us celebrate <strong>you</strong> for emitting brightness and joy with your
						<strong> Yellow</strong> outfits. Showcase your vibrancy by posting your pictures in the
						<strong> Connect Post comments</strong> with <strong>#ZohoKolam</strong> and <strong>#Yellove</strong>.
					</p>

					<p className="mb-3">
						As you continue to sparkle and dazzle, keep encouraging us. Stay joyful during this commemoration of
						<strong> Yellow</strong>!
					</p>
				</div>
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
	  case "green":
        return (
			<><section className="max-w-2xl mx-auto py-10 px-4">
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
				<div className="flex mt-6 gap-4">
					<img
						src="/green.gif"
						alt="White Activity"
						className="rounded-lg shadow-lg w-full object-cover"
					/>
					</div>
				<div className="whitespace-pre-line text-lg my-12">
					<p className="mb-3">
						&quot;Green isn&apos;t just a colour we see, it&apos;s a feeling we experience.&quot; It soothes, restores, 
						and connects us with nature.
					</p>

					<p className="mb-3">
						On day five of Navaratri, Maa Skandamata embodies nurturing love and harmony, with green symbolising peace, growth, 
						and prosperous new beginnings.
					</p>

					<p className="mb-3">
						Brands know the deep connection we have with green and its promise of freshness and growth. Here are some iconic 
						brands and their campaigns where they turned this instinctive response into powerful storytelling.
					</p>

					<ul className="list-disc list-inside space-y-2 mb-4">
						<li>
						<strong>Tropicana</strong> &mdash; Tropicana replaced the dot on the &quot;i&quot; with a green leaf, reinforcing 
						its natural image and adding freshness to the logo.
						</li>
						<li>
						<strong>Spotify</strong> &mdash; Spotify&apos;s vibrant green reflects its youthful energy, spirit of innovation, 
						and dynamic approach to music streaming.
						</li>
						<li>
						<strong>Animal Planet</strong> &mdash; Animal Planet uses green to evoke nature, harmony, and life, reinforcing 
						its focus on wildlife, conservation, and adventure.
						</li>
						<li>
						<strong>Starbucks</strong> &mdash; Starbucks&apos;s green turns every café into a &quot;third place,&quot; a cozy, 
						welcoming spot between home and work where community and calm meet.
						</li>
						<li>
						<strong>Lacoste</strong> &mdash; Lacoste is producing 1,775 limited-edition polos, each representing the remaining 
						population of one of 10 endangered species, in partnership with the IUCN to support wildlife conservation.
						</li>
						<li>
						<strong>Lacoste &quot;SAVE OUR SPECIES&quot; campaign</strong>
						</li>
					</ul>

					<p className="mb-3">
						See the pattern? Each of these brands taps into the subconscious feelings green awakens in us — a feeling of trust, 
						freshness, progress, and connection.
					</p>

					<h3 className="text-xl font-semibold mt-6 mb-2">Here&apos;s how Zoho uses green</h3>
					<p>
						Green in Zoho is used to signify growth, productivity, and freshness. In a suite of tools focused on business 
						efficiency, project management, and creativity, green highlights features or icons that represent action, progress, 
						and positive outcomes.
					</p>
				</div>
				{/* Collage Section */}
					<div className="flex gap-4">
					<img
						src="/green-1.png"
						alt="White Activity"
						className="rounded-lg shadow-lg w-full object-cover"
					/>
					</div>
					
				<div className="mb-2 mt-10 text-xl font-medium">
					<p className="mb-3">Feel the Nature Vibes By Wearing Green</p>

					<p className="mb-3">
						As we connect to the earth, wear green and celebrate the spirit of Navaratri!
					</p>

					<p className="mb-3">
						Post your selfies and <strong className="text-green-600">Golu showcases</strong> on 
						<strong className="text-green-600"> Connect</strong> in the comments, filling our feed with refreshing 
						shades of green and festive joy.
					</p>

					<p className="font-semibold text-green-600 mb-4">
						Bring in peace, growth, and harmony this Navaratri!
					</p>
				</div>
				{/* Connect Post Button */}
				<div className="mt-6 w-full text-center">
					<a
						href="https://connect.zoho.in/portal/intranet/forum/post/celebrate-navaratri-with-zolu-2-0-%E2%80%93-a-zoho-school-of-business-initiative0"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-8 py-3 rounded-lg font-semibold text-white shadow-lg bg-gradient-to-r from-pink-500 via-indigo-500 to-yellow-400 bg-[length:200%_200%] animate-gradient-x transition hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
					>
						<button id="dropPics">Drop Your Pics Here</button>
					</a>
				</div>
				<h2 className="text-2xl font-bold mb-4 mt-20">Sprite Shuffle</h2>
				<div className="rounded-lg border border-green-600 overflow-hidden shadow-lg mt-6" style={{ height: "550px" }}>
					<iframe
						src={colorInfo.game}
						width="100%"
						height="100%"
						allowFullScreen
						title={`${colorInfo.name} Quiz`}
						className="w-full h-full border-0"
					/>
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
          </section></>
		);	
      case "grey":
        return (
			<><section className="max-w-2xl mx-auto py-10 px-4">
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
				<div className="flex mt-6 gap-4">
					<img
						src="/grey-1.png"
						alt="White Activity"
						className="rounded-lg shadow-lg w-full object-cover"
					/>
					</div>
				<div className="whitespace-pre-line text-lg my-12">
					<h2 className="text-2xl font-bold mb-6">From Dull to Dynamic: Grey&apos;s Journey</h2>
					<div className="whitespace-pre-line text-lg mb-12">

						<p className="mb-6">
							Grey was never the “flashy” colour of festivals, quietly standing on Day 6 to symbolize 
							balance, calm, and grounded nature while other colours stole the spotlight. 
							To give grey its moment, let&apos;s explore how it has silently influenced our lives.
						</p>

						<h3 className="text-xl font-semibold mt-6 mb-2">
							1980s : Luxury Emerges
						</h3>
						<p className="mb-4">
							Mercedes-Benz popularized silver grey as a symbol of class, refinement, and cutting edge engineering. 
							The brand&apos;s Automobile campaign in 1981 &#40;by GREY Brazil&#41; emphasized luxury and precision, 
							reinforcing why grey was the colour of sophistication and setting a benchmark that other premium brands soon followed.
						</p>

						{/* Collage Section */}
						<div className="flex gap-4">
						<img
							src="/grey-3.png"
							alt="White Activity"
							className="rounded-lg shadow-lg w-full object-cover"
						/>
						</div>

						<h3 className="text-xl font-semibold mt-10 mb-2">
							2000s : The Grey Renaissance
						</h3>
						<p className="mb-4">
							Apple dominated the tech world with its Grey Revolution, showcasing iMacs, iPods, and 
							MacBooks in sleek silver grey aluminium. This campaign highlighted minimalism, durability, 
							and premium design, setting a trend that influenced phones, laptops, and gaming consoles 
							for years to come.
						</p>
						{/* Collage Section */}
						<div className="flex gap-4">
						<img
							src="/grey-2.png"
							alt="White Activity"
							className="rounded-lg shadow-lg w-full object-cover"
						/>
						</div>

						<h3 className="text-xl font-semibold mt-10 mb-2">
							2020s : Grey Days
						</h3>
						<p className="mb-4">
							New Balance, the iconic footwear brand known for blending performance with lifestyle, 
							launched the Grey Days campaign to celebrate heritage, timeless style, and the understated 
							power of grey, proving that subtlety can be iconic.
						</p>

						<h3 className="text-xl font-semibold mt-6 mb-2">
							Recent Years
						</h3>
						<p>
							Grey has emerged as a trend in fashion, branding, and tech, proving that balance never 
							goes out of style.
						</p>
						
					</div>
				</div>
				
					
				<div className="mb-2 mt-10 text-xl font-medium">
					<p className="mb-4">
					Life isn&apos;t always black and white, there is always a Grey area,  
					get into that zone by wearing Grey today!!
					</p>

					<h3 className="text-xl font-semibold mt-6 mb-2">
					Join the Zone
					</h3>

					<p>
					Don&apos;t forget to take us to that zone along with you by dropping your 
					snapshots on our Connect Post comments!
					</p>
				</div>
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
          </section></>
		);
	  case "orange":
        return (
			<><section className="max-w-2xl mx-auto py-10 px-4">
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
					
					<p className="mb-4">
					Ever noticed how some colors just make you feel alive? That&apos;s orange for you. 
					A hue that grabs attention without shouting, sparks curiosity, and somehow makes 
					everything feel a little more fun. On Day 7 of Navaratri, orange isn&apos;t just a 
					color, it&apos;s courage, positivity, and a burst of energy ready to push you forward.
					</p>

					<p className="mb-4">
					Globally, its meaning shifts. In the West, it signals approachability and fun. 
					In India, it&apos;s saffron, symbolizing spirituality, courage, and vitality. 
					In East Asia, it represents happiness and bravery. That&apos;s why orange works so 
					well in campaigns across cultures, instantly creating emotional connections 
					with audiences.
					</p>

					<h2 className="text-2xl font-semibold mt-6 mb-2">
					Why Brands Love Orange
					</h2>

					<h3 className="text-xl font-semibold mt-6 mb-2">
					Fanta
					</h3>

					<div className="flex my-6 gap-4">
					<img
						src="/orange-1.png"
						alt="White Activity"
						className="rounded-lg shadow-lg w-full object-cover"
					/>
					</div>

					<p className="mb-4">
					Their bright orange bottles and &quot;Add Some Fanta Fun&quot; campaigns are hard to ignore. 
					Orange is playful, energetic, and attention-grabbing, making people feel refreshment before they 
					even take a sip. Research shows that warm colors like orange can increase appetite and engagement 
					by up to 30%.
					</p>

					<h3 className="text-xl font-semibold mt-6 mb-2">
					Swiggy
					</h3>

					<div className="flex my-6 gap-4">
					<img
						src="/orange-2.png"
						alt="White Activity"
						className="rounded-lg shadow-lg w-full object-cover"
					/>
					</div>

					<p className="mb-4">
					Orange is at the heart of Swiggy&apos;s brand identity, from its logo to app interface and campaigns. 
					The vibrant hue evokes energy, warmth, and appetite, making users feel excited to order food. 
					Swiggy&apos;s campaigns, like festive Holi billboards in Delhi NCR and playful 10th anniversary visuals, leverage 
					orange to connect emotionally with customers, signal speed and convenience, and reinforce the brand&apos;s friendly, 
					approachable personality.
					</p>

					<h3 className="text-xl font-semibold mt-6 mb-2">
					HubSpot
					</h3>

					<div className="flex my-6 gap-4">
					<img
						src="/orange-3.png"
						alt="White Activity"
						className="rounded-lg shadow-lg w-full object-cover"
					/>
					</div>

					<p className="mb-4">
					Coral-orange CTAs guide users on webinars, landing pages, and courses. Orange communicates 
					approachability and innovation, nudging users to explore without feeling pressured. Marketing research shows that 
					orange can increase click-through rates by 10 to 15 percent when used strategically.
					</p>

					<p className="mb-4 mt-10">
					Orange works because it&apos;s human. It taps into curiosity, warmth, and creativity. It makes brands approachable yet bold, fun yet fearless. So next time you see a logo, ad, or CTA glowing in orange, ask yourself: Why do I feel excited, energized, or inspired? That is the superpower of a color that doesn&apos;t just get noticed. It moves people, sparks action, and leaves an unforgettable impression.
					</p>

					<p className="mb-4">
					For its 10th anniversary in 2024, Swiggy embraced its signature orange across festive visuals like balloons, confetti, and cakes. This vibrant approach not only celebrated the milestone but also reinforced brand identity, evoked joy, and strengthened trust and appetite among users.
					</p>

					<p className="mb-4">
					HubSpot&apos;s <strong>&quot;Orange You Growing?&quot;</strong> campaign turned its signature orange into a bold symbol of growth and 
					energy. Featuring vibrant visuals of orange arrows, flourishing trees, and glowing dashboards, the campaign brought 
					business success to life in a fresh, dynamic way. By tying progress directly to its iconic brand color, HubSpot made 
					its message of &quot;growth made simple&quot; both visually striking and deeply memorable.
					</p>
					
				</div>
					
				<div className="mb-2 mt-10 text-xl font-medium">
					<p className="mb-3">Feel the Energy Burst By Wearing Orange</p>

					<p className="mb-3">
						As we channel courage and positivity, wear orange and celebrate the spirit of Navaratri!
					</p>

					<p className="mb-3">
						Post your selfies and <strong>golu showcases</strong> on <strong>Connect</strong> in the comments — 
						let&apos;s fill our feed with vibrant shades of orange and festive excitement.
					</p>

					<p className="font-semibold">
						Bring in courage, energy, and joy this Navaratri!
					</p>
				</div>
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
				<h2 className="text-2xl font-bold mb-4 mt-20">Peel and pair</h2>
				<div className="rounded-lg border border-orange-600 overflow-hidden shadow-lg mt-6" style={{ height: "550px" }}>
					<iframe
						src="https://p.interacty.me/5f7a4f35bab4597a/iframe.html"
						width="100%"
						height="100%"
						allowFullScreen
						title={`${colorInfo.name} Quiz`}
						className="w-full h-full border-0"
					/>
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
          </section></>
		);
	  case "peacock green":
        return (
			<><section className="max-w-2xl mx-auto py-10 px-4">
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
					<h2 className="text-2xl font-bold mb-4">
						Peacock Green Effect:
					</h2>

					<p className="mb-4">
						Peacock green symbolises grace, elegance, and self-expression. It represents confidence without apology, like the 
						peacock spreading its feathers. Green embodies balance, renewal, luxury, and royalty. Its jewel-tone quality makes 
						it feel rich, exotic, and regal.
					</p>

					<p className="mb-4">
						From a marketing perspective, green is easy on the eyes, and with blue tones added, it often feels deeper and 
						soothing. So, for visual identity, it helps a brand seem approachable yet sophisticated. It also adds uniqueness 
						and individuality.
					</p>

					<h3 className="text-xl font-semibold mt-6 mb-2">Kohler Campaign</h3>
					<p className="mb-4">
						Kohler, the global lifestyle brand, is introducing a new range of colours that encapsulate the vibrancy and 
						grandeur of India&apos;s diversity. This creative offering from Kohler is driven by the philosophy of innovation 
						and excellence. The company aims to make bathrooms the centrepiece of the home. The campaign brings alive the 
						story behind the three colours — Peacock, Truffle, and Thunder Grey. The version of Peacock is rendered as a shade 
						of teal, evoking an ethnic feel to give a vibrant look of the Indian iconic bird.
					</p>

					<div className="flex gap-4">
						<img
							src="/pg-1.jpeg"
							alt="White Activity"
							className="rounded-lg shadow-lg w-full object-cover"
						/>
					</div>

					<h3 className="text-xl font-semibold mt-6 mb-2">
						Gucci Spring/Summer 2016 Campaign
					</h3>
					<p className="mb-4">
						Peacock green has great importance in the fashion industry because it&apos;s more than just a pretty shade. 
						It combines luxury, cultural symbolism, and marketing power — helping designers create garments that are both 
						timeless and headline-grabbing. One of the best examples of this was the Gucci Spring/Summer 2016 campaign. 
						Gucci&apos;s Spring/Summer 2016 campaign embraced the concept of &quot;peacocking,&quot; using bold and vibrant 
						colours, including peacock green, to make a statement.
					</p>

					<div className="flex gap-4">
						<img
							src="/pg-2.jpg"
							alt="White Activity"
							className="rounded-lg shadow-lg w-full object-cover"
						/>
					</div>

					<h3 className="text-xl font-semibold mt-6 mb-2">
						JioCinema&apos;s Peacock Hub Campaign
					</h3>
					<p className="mb-4">
						JioCinema&apos;s Peacock Hub campaign blended Indian culture and modern visuals in public spaces to create 
						high-impact outdoor advertising. The campaign achieved strong emotional appeal, visual consistency, and digital 
						engagement, proving creativity drives memorable brand experiences.
					</p>

					<div className="flex gap-4">
						<img
							src="/pg-3.jpg"
							alt="White Activity"
							className="rounded-lg shadow-lg w-full object-cover"
						/>
					</div>

					<h3 className="text-xl font-semibold mt-6 mb-2">
						Your Take
					</h3>
					<p className="mb-4">
						Which of the brands you know do you think stand out with a touch of peacock green? Why do you think this bold, 
						unique colour isn&apos;t more widely used as a brand signature? And in your own project, how does peacock green 
						showcase individuality and creativity? We&apos;d love to hear your take.
					</p>
				</div>
				<div className="text-xl font-medium space-y-3 pt-10">
					<p>Feel the Regal Vibe with Peacock Green</p>

					<p>
						Channel elegance, confidence, and individuality by wearing peacock green and celebrating the spirit of Navaratri!
					</p>

					<p>
						Post your selfies and <strong>golu showcases</strong> on <strong>Connect</strong> in the comments — 
						let&apos;s fill our feed with rich shades of peacock green and festive pride.
					</p>

					<p className="font-semibold">
						Bring in grace, balance, and a royal charm this Navaratri!
					</p>
				</div>
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
				<h2 className="text-2xl font-bold mb-4 mt-20">Drag and match</h2>
				<div className="rounded-lg border border-emerald-600 overflow-hidden shadow-lg mt-6">
					<PeacockGreenMatchGame />
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
          </section></>
		);
	  case "pink":
        return (
			<></>
		);			
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