import { useMemo } from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { ShineBorder } from "@/components/ui/shine-border";

const colorData = [
	{ name: "White", color: "bg-white", date: "2025-09-22" },
	{ name: "Red", color: "bg-red-500", date: "2025-09-23", image: "/images/red.jpg" },
	{ name: "Royal Blue", color: "bg-blue-700", date: "2026-09-24", image: "/images/royal-blue.jpg" },
	{ name: "Yellow", color: "bg-yellow-400", date: "2025-09-25", image: "/images/yellow.jpg" },
	{ name: "Green", color: "bg-green-500", date: "2025-09-26", image: "/images/green.jpg" },
	{ name: "Grey", color: "bg-gray-400", date: "2025-09-27", image: "/images/grey.jpg" },
	{ name: "Orange", color: "bg-orange-500", date: "2025-09-28", image: "/images/orange.jpg" },
	{ name: "Peacock Green", color: "bg-teal-700", date: "2025-09-29", image: "/images/peacock-green.jpg" },
	{ name: "Pink", color: "bg-pink-400", date: "2025-09-30", image: "/images/pink.jpg" },
];

function formatDate(dateStr: string) {
	const date = new Date(dateStr);
	return date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
	});
}

export default function ColorGrid() {
	const today = useMemo(() => new Date(), []);
	return (
		<div id="color-grid-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 pt-14">
			<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
				Pick your colour
			</h2>
            
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 isolate">
				{colorData.map(({ name, color, date, image }) => {
					const unlockDate = new Date(date);
					const unlocked = today >= unlockDate;
					const link = `/color/${name.toLowerCase().replace(/\s+/g, "-")}`;

					const baseClasses =
						"flex flex-col items-center justify-end rounded-2xl h-48 sm:h-64 shadow-xl relative transition-all duration-300 group overflow-hidden";
					const unlockedClasses =
						"hover:scale-105 hover:shadow-2xl cursor-pointer";
					const lockedClasses =
						"opacity-60 pointer-events-none cursor-not-allowed grayscale";

					const style =
						name === "White"
							? { background: "#fff" }
							: {
									backgroundImage: `linear-gradient(rgba(30,41,59,0.25),rgba(30,41,59,0.25)), url(${image})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
							  };

					return unlocked ? (
						<a
							key={name}
							href={link}
							className={`${baseClasses} ${name === "White" ? color : ""} ${unlockedClasses} group`}
							style={style}
						>
							<div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-all duration-300 z-10" />
							<span className={`z-20 font-extrabold text-2xl sm:text-3xl ${name !== "White" ? "text-white drop-shadow-lg" : "text-gray-900"}`}>
								{name}
							</span>
							<span className={`z-20 text-lg sm:text-xl font-bold mt-1 mb-4 ${name !== "White" ? "text-white drop-shadow" : "text-gray-700"}`}>
								{formatDate(date)}
							</span>
							{/* ShineBorder appears on hover */}
							<span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
								<ShineBorder
									shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
									borderWidth={3}
                                    className="rounded-xl"
								/>
							</span>
						</a>
					) : (
						<div
							key={name}
							className={`${baseClasses} ${name === "White" ? color : ""} ${lockedClasses}`}
							style={style}
						>
							<div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 z-10" />
							<span className={`z-20 font-extrabold text-2xl sm:text-3xl ${name !== "White" ? "text-white drop-shadow-lg" : "text-gray-900"}`}>
								{name}
							</span>
							<span className={`z-20 text-lg sm:text-xl font-bold mt-1 mb-4 ${name !== "White" ? "text-white drop-shadow" : "text-gray-700"}`}>
								{formatDate(date)}
							</span>
							<LockClosedIcon className="w-8 h-8 text-white absolute top-3 right-3 z-20 opacity-80" />
						</div>
					);
				})}
			</div>
		</div>
	);
}