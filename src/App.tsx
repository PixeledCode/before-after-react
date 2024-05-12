import { BeforeAfter, Track, Thumb } from '@lib/index'

function App() {
	return (
		<main className="flex justify-center items-center h-svh">
			<BeforeAfter className="w-[480px]  p-1 bg-gray-100 rounded-lg shadow-md">
				<img
					src="https://plus.unsplash.com/premium_photo-1699708592614-4b52c61e456f"
					className="object-cover h-full rounded-md select-none"
					alt=""
				/>
				<Track className="h-full w-1 bg-white cursor-move">
					<Thumb className="w-6 h-6 bg-white rounded-full shadow-md" />
				</Track>
			</BeforeAfter>
		</main>
	)
}

export default App
