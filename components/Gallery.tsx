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
			translateX = distance * 250; // smaller translation for adjacent images
			zIndex = 1;
			scale = 0.85;
			opacity = 0.7;
		} else {
			translateX = distance * 350; // and for the outer ones
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
		<div className="w-full h-auto py-20 flex flex-col items-center justify-center bg-background font-albert-sans max-w-screen overflow-hidden">
			<div className="text-center mb-16 px-4">
				<h2 className="text-4xl md:text-6xl font-medium uppercase text-[#1a1919] max-w-[900px]">
					A Visual Journey {'\u00A0'} Through My Best Work.
				</h2>
			</div>
			<div className="relative w-full h-[700px] flex items-center justify-center">
				{images.map((image) => (
					<div
						key={image.id}
						className="absolute"
						style={getTransform(image.id)}
						onClick={() => setSelected(image.id)}
					>
						<div className="relative w-[320px] h-[480px] md:w-[400px] md:h-[600px]">
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
	);
}
