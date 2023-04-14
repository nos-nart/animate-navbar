import { useState } from 'react'
import { FramerMotionNavBar } from './components/FramerMotionNavBar'
import { VanillaCssNavBar } from './components/VanillaCssNavBar';

export const navs = ['Overview', 'Intergrations', 'Activity', 'Domains', 'Usage', 'Monitoring', 'Edge Config', 'Settings'];

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="font-inter text-[14px] p-12">
			<FramerMotionNavBar />
			<hr className="my-8" />
			<VanillaCssNavBar />
		</div>
	)
}

export default App
