import { useMemo } from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { ShineBorder } from "@/components/ui/shine-border";

const colorData = [
	{ name: "White", color: "bg-white", date: "2025-09-22", gradient: "bg-gradient-to-br from-white via-gray-100 to-gray-300" },
	{ name: "Red", color: "bg-red-500", date: "2025-09-23", gradient: "bg-gradient-to-br from-red-400 via-red-500 to-pink-400" },
	{ name: "Royal Blue", color: "bg-blue-700", date: "2025-09-24", gradient: "bg-gradient-to-br from-blue-700 via-blue-500 to-indigo-400" },
	{ name: "Yellow", color: "bg-yellow-400", date: "2025-09-25", gradient: "bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500" },
	{ name: "Green", color: "bg-green-500", date: "2026-09-26", gradient: "bg-gradient-to-br from-green-400 via-green-500 to-emerald-400" },
	{ name: "Grey", color: "bg-gray-400", date: "2025-09-27", gradient: "bg-gradient-to-br from-gray-400 via-gray-500 to-gray-300" },
	{ name: "Orange", color: "bg-orange-500", date: "2025-09-28", gradient: "bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-400" },
	{ name: "Peacock Green", color: "bg-teal-700", date: "2025-09-29", gradient: "bg-gradient-to-br from-teal-700 via-green-400 to-cyan-300" },
	{ name: "Pink", color: "bg-pink-400", date: "2025-09-30", gradient: "bg-gradient-to-br from-pink-400 via-pink-300 to-rose-300" },
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
				{colorData.map(({ name, color, date, gradient }) => {
					const unlockDate = new Date(date);
					const unlocked = today >= unlockDate;
					const link = `/colour/${name.toLowerCase().replace(/\s+/g, "-")}`;

					const baseClasses =
						"flex flex-col items-center justify-end rounded-2xl h-48 sm:h-64 shadow-xl relative transition-all duration-300 group overflow-hidden";
					const unlockedClasses =
						"hover:scale-105 hover:shadow-2xl cursor-pointer";
					const lockedClasses =
						"opacity-60 pointer-events-none cursor-not-allowed grayscale";

					const gradientBg = gradient || "";

					return unlocked ? (
						<a
							key={name}
							href={link}
							className={`${baseClasses} ${gradientBg} ${unlockedClasses} group`}
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
							className={`${baseClasses} ${gradientBg} ${lockedClasses}`}
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