'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import './styles.css';
import Link from 'next/link';

export const Navbar = () => {
	const router = useRouter();
	return (
		<div className="navbar">
			<button
				type="button"
				onClick={() => router.back()}
				className="btn outline"
			>
				<svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
					<title>Arrow back icon</title>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6.46966 13.7803L6.99999 14.3107L8.06065 13.25L7.53032 12.7197L3.56065 8.75001H14.25H15V7.25001H14.25H3.56065L7.53032 3.28034L8.06065 2.75001L6.99999 1.68935L6.46966 2.21968L1.39644 7.2929C1.00592 7.68342 1.00592 8.31659 1.39644 8.70711L6.46966 13.7803Z"
						fill="currentColor"
					/>
				</svg>
				Back
			</button>
			<Link className="btn outline" href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 256 256"
				>
					<title>Home icon</title>
					<path
						d="M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z"
						fill="currentColor"
					/>
				</svg>
			</Link>
		</div>
	);
};
