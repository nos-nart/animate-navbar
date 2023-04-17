import { motion } from 'framer-motion'
import { useState } from 'react'
import { navs } from '../App'

function cn(...args: string[]) {
	return args.join(' ');
}

export function AnotherFramerNavBar() {
	const [activeTab, setActiveTab] = useState(navs[0]);

	return (
		<>
			<h2 className="text-xl font-bold">Using framer-motion 🎉</h2>
			<div className="flex space-x-1">
				{navs.map((tab, index) => (
					<button
						key={index}
						onClick={() => setActiveTab(tab)}
						className={cn(
							// activeTab === tab ? "" : "hover:text-white/60",
							`relative px-3 py-1.5 font-medium outline-sky-400 transition focus-visible:outline-2`
						)}
						style={{
							WebkitTapHighlightColor: "transparent",
						}}
					>
						{activeTab === tab && (
							<motion.span
								layoutId="bubble"
								className="absolute inset-0 -z-[1] bg-slate-200 mix-blend-difference rounded"
								transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
							/>
						)}
						{tab}
					</button>
				))}
			</div>
		</>
	);
}