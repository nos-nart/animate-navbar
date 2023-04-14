import { useState } from 'react'
import { navs } from '../App'
import { motion } from 'framer-motion'

export const FramerMotionNavBar = () => {
	const [selectedItem, setSelectedItem] = useState(navs[0]);
	const [hoverItem, setHoverItem] = useState<string | undefined>(undefined);

	return (
		<>
			<h2 className="text-xl font-bold">Using framer-motion 🧙‍♂️</h2>
			<ul className="flex">
				{navs.map((i, index) => (
					<li
						key={index}
						className="cursor-pointer px-3 py-4 select-none relative list-none"
						onClick={() => setSelectedItem(i)}
						onMouseEnter={() => setHoverItem(i)}
						onMouseLeave={() => setHoverItem(undefined)}
					>
						<span className="z-20">{i}</span>
						{/* background */}
						{i === hoverItem ? <motion.div layoutId="hoverBackground" className="rounded bg-slate-200 w-full h-8 absolute inset-0 -z-[1] m-auto" /> : null}
						{/* underline */}
						{i === selectedItem ? <motion.div layoutId="underline" className="border-blue-500 border-b-2 absolute bottom-0 right-0 w-full" /> : null}
					</li>
				))}
			</ul>
		</>
	)
}