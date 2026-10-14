import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import '@/styles/main.css';
import { Analytics } from '@vercel/analytics/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import Script from 'next/script';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
	title: 'NextJS Blog MDX',
	description: 'A simple blog with NextJS and MDX',
};

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<ViewTransitions>
			<html lang="en">
				<head>
					<Script
						defer
						src="https://cloud.umami.is/script.js"
						data-website-id="5d1ac0cb-7a38-4058-bf8b-da370c7c4a7e"
					/>
				</head>
				<body className={`${GeistSans.variable} ${GeistMono.variable}`}>
					{children}
					<Analytics />
				</body>
			</html>
		</ViewTransitions>
	);
};

export default RootLayout;
