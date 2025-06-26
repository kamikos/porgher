'use client';
import { useState } from 'react';
import Image from 'next/image';

const images = [
	{ id: 1, src: 'https://picsum.photos/id/101/800/1200' },
	{ id: 2, src: 'https://picsum.photos/id/102/800/1200' },
	{ id: 3, src: 'https://picsum.photos/id/103/800/1200' },
	{ id: 4, src: 'https://picsum.photos/id/104/800/1200' },
	{ id: 5, src: 'https://picsum.photos/id/106/800/1200' },
];

export default function Gallery() {
	const [selected, setSelected] = useState(3);

	const getTransform = (id: number) => {
		const distance = id - selected;
		let translateX = 0;
		let scale = 0.7;
		let zIndex = 0;
		let opacity = 0.4;

		if (distance === 0) {
			scale = 1;
			zIndex = 2;
			opacity = 1;
		} else if (distance === 1 || distance === -1) {
			translateX = distance * 180; // smaller translation for mobile
			zIndex = 1;
			scale = 0.85;
			opacity = 0.7;
		} else {
			translateX = distance * 250; // for the outer ones
			opacity = 0.4;
		}

		return {
			transform: `translateX(${translateX}px) scale(${scale})`,
			zIndex,
			opacity,
			transition: 'all 0.5s ease-out',
		};
	};

	const getTransformDesktop = (id: number) => {
		const distance = id - selected;
		let translateX = 0;
		let scale = 0.7;
		let zIndex = 0;
		let opacity = 0.4;

		if (distance === 0) {
			scale = 1;
			zIndex = 2;
			opacity = 1;
		} else if (distance === 1 || distance === -1) {
			translateX = distance * 250; // larger translation for desktop
			zIndex = 1;
			scale = 0.85;
			opacity = 0.7;
		} else {
			translateX = distance * 350;
			opacity = 0.4;
		}

		return {
			transform: `translateX(${translateX}px) scale(${scale})`,
			zIndex,
			opacity,
			transition: 'all 0.5s ease-out',
		};
	};

	return (
		<div className="w-full h-auto py-12 sm:py-16 lg:py-20 flex flex-col items-center justify-center bg-background font-albert-sans max-w-screen overflow-hidden">
			<div className="text-center mb-12 sm:mb-16 px-4">
				<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium uppercase text-[#1a1919] max-w-[900px] leading-tight">
					A Visual Journey Through My Best Work.
				</h2>
			</div>
			
			{/* Mobile Gallery */}
			<div className="md:hidden w-full px-4">
				<div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center">
					{images.map((image) => (
						<div
							key={image.id}
							className="absolute"
							style={getTransform(image.id)}
							onClick={() => setSelected(image.id)}
						>
							<div className="relative w-[200px] h-[300px] sm:w-[240px] sm:h-[360px]">
								<Image
									src={image.src}
									alt={`Gallery image ${image.id}`}
									layout="fill"
									objectFit="cover"
									className="rounded-lg shadow-2xl cursor-pointer"
								/>
							</div>
						</div>
					))}
				</div>
				
				{/* Mobile Navigation */}
				<div className="flex justify-center items-center gap-4 mt-8">
					<button
						onClick={() => setSelected(selected > 1 ? selected - 1 : images.length)}
						className="p-3 bg-[#1a1919] text-white rounded-full hover:bg-opacity-80 transition-colors"
						aria-label="Previous image"
					>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>
					
					<div className="flex gap-2">
						{images.map((_, index) => (
							<button
								key={index}
								onClick={() => setSelected(index + 1)}
								className={`w-2 h-2 rounded-full transition-colors ${
									selected === index + 1 ? 'bg-[#1a1919]' : 'bg-gray-300'
								}`}
								aria-label={`Go to image ${index + 1}`}
							/>
						))}
					</div>
					
					<button
						onClick={() => setSelected(selected < images.length ? selected + 1 : 1)}
						className="p-3 bg-[#1a1919] text-white rounded-full hover:bg-opacity-80 transition-colors"
						aria-label="Next image"
					>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>
				</div>
			</div>

			{/* Desktop Gallery */}
			<div className="hidden md:block relative w-full h-[600px] lg:h-[700px]">
				<div className="relative w-full h-full flex items-center justify-center">
					{images.map((image) => (
						<div
							key={image.id}
							className="absolute"
							style={getTransformDesktop(image.id)}
							onClick={() => setSelected(image.id)}
						>
							<div className="relative w-[320px] h-[480px] lg:w-[400px] lg:h-[600px]">
								<Image
									src={image.src}
									alt={`Gallery image ${image.id}`}
									layout="fill"
									objectFit="cover"
									className="rounded-lg shadow-2xl cursor-pointer"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
