import React, { useCallback, useRef, useState } from 'react';
import { navs } from '../App'

export type MarkerPosition = {
	x: number;
	width: number;
};

interface OnSelectProps {
	ref: React.RefObject<HTMLElement>;
}

const useNavigationMarker = () => {
	const [markerPos, setMarkerPos] = useState<MarkerPosition>({
		x: 0,
		width: 0
	});

	const onSelect = useCallback(({ ref }: OnSelectProps) => {
		if (!ref.current) return;
		const x = ref.current.offsetLeft;
		const { width } = ref.current.getBoundingClientRect();
		setMarkerPos({
			width,
			x
		});
	}, []);

	return {
		markerPos,
		onSelect,
	}
}

export const VanillaCssNavBar = () => {
	const [selectedItem, setSelectedItem] = useState(navs[0]);
	const [hoverItem, setHoverItem] = useState<string | undefined>(undefined);
	const { markerPos, onSelect } = useNavigationMarker();

	const handleClick = useCallback((label: string) => {
		setSelectedItem(label);
	}, [])

	return (
		<>
			<h2 className="text-xl font-bold">Using vanilla css 🤔</h2>
			<ul className="flex relative">
				{/* background */}
				{/* underline */}
				<NavMarker {...markerPos} />
				{navs.map((i, index) => (
					<NavItem
						key={`x-${index}`}
						isSelected={i === selectedItem}
						label={i}
						onClick={handleClick}
						onSelect={onSelect}
					>
						{i}
					</NavItem>
				))}
			</ul>
		</>
	)
}

// const NavBackground = ({ x, width }: MarkerPosition) => {
// 	return (
// 		<div
// 			className="rounded bg-slate-200 w-full h-8 absolute top-0 bottom-0 -z-[1] m-auto transition-all duration-200"
// 			style={{ left: `${x}px`, width: `${width}px` }}
// 		/>
// 	)
// }

const NavMarker = ({ x, width }: MarkerPosition) => {
	return (
		<div
			className="absolute border-green-500 border-b-2 bottom-0 transition-all duration-200"
			style={{ left: `${x}px`, width: `${width}px` }}
		/>
	)
}

const NavItem = ({
	onClick,
	onSelect,
	isSelected = false,
	label,
	children,
	...props
}: {
	onClick: (label: string) => void,
	onSelect: (props: OnSelectProps) => void,
	label: string,
	isSelected: boolean;
	children: React.ReactNode
}) => {
	const ref = useRef<HTMLLIElement>(null);

	const handleSelect = (label: string) => {
		onClick(label);
		onSelect({ ref });
	}

	return (
		<li
			onClick={() => handleSelect(label)}
			className="cursor-pointer px-3 py-4 select-none list-none"
			ref={ref}
			{...props}
		>
			{children}
		</li>
	)
}
