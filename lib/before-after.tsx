'use client'

import React from 'react'

// ROOT
interface BeforeAfterProps extends React.HTMLAttributes<HTMLDivElement> {}

const BeforeAfter = React.forwardRef<HTMLDivElement, BeforeAfterProps>(
	(props: BeforeAfterProps, forwardedRef) => {
		const [sliderPos, setSliderPos] = React.useState(50)
		const ref = React.useRef<HTMLDivElement>(null)
		const finalRef = forwardedRef || ref

		const handleMouse = (e: MouseEvent) => {
			const rect = ref.current?.getBoundingClientRect()
			if (!rect) return

			const x = e.clientX - rect.left
			const pos = (x / rect.width) * 100

			if (pos < 1) {
				setSliderPos(0)
				return
			}

			if (pos > 99) {
				setSliderPos(99)
				return
			}

			setSliderPos(pos)
		}

		const handleMouseUp = () => {
			window.removeEventListener('mousemove', handleMouse)
			window.removeEventListener('mouseup', handleMouseUp)
		}

		const handleMouseDown = () => {
			window.addEventListener('mousemove', handleMouse)
			window.addEventListener('mouseup', handleMouseUp)
		}

		React.useEffect(() => {
			return () => {
				window.removeEventListener('mousemove', handleMouse)
				window.removeEventListener('mouseup', handleMouseUp)
			}
		}, [])

		return (
			<div
				style={
					{
						position: 'relative',
						'--slider-pos': `${sliderPos}%`,
						overflow: 'hidden',
					} as React.CSSProperties
				}
				ref={finalRef}
				onMouseDown={handleMouseDown}
				onClick={(e) => {
					e.stopPropagation()
					handleMouse(e as unknown as MouseEvent)
				}}
				{...props}
			/>
		)
	}
)

BeforeAfter.displayName = 'BeforeAfter'

// TRACK
interface TrackProps extends React.HTMLAttributes<HTMLDivElement> {}
const BeforeAfterTrack = React.forwardRef<HTMLDivElement, TrackProps>(
	(props: BeforeAfterProps, forwardedRef) => {
		return (
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 'var(--slider-pos)',
				}}
				ref={forwardedRef}
				{...props}
			/>
		)
	}
)

BeforeAfterTrack.displayName = 'Track'

// THUMB
interface ThumbProps extends React.HTMLAttributes<HTMLDivElement> {}
const BeforeAfterThumb = React.forwardRef<HTMLDivElement, ThumbProps>(
	(props: BeforeAfterProps, forwardedRef) => {
		return (
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
				ref={forwardedRef}
				{...props}
			/>
		)
	}
)

BeforeAfterThumb.displayName = 'Thumb'

const Root = BeforeAfter
const Track = BeforeAfterTrack
const Thumb = BeforeAfterThumb

export {
	BeforeAfter,
	BeforeAfterTrack,
	BeforeAfterThumb,
	//
	Root,
	Track,
	Thumb,
}

export type { BeforeAfterProps }
