'use client'

import React from 'react'

// ROOT
interface BeforeAfterProps extends React.HTMLAttributes<HTMLDivElement> {}

const BeforeAfter = React.forwardRef<HTMLDivElement, BeforeAfterProps>(
	(props: BeforeAfterProps, forwardedRef) => {
		return (
			<div
				style={{
					position: 'relative',
				}}
				ref={forwardedRef}
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
					left: '50%',
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
					pointerEvents: 'none',
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
