import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import '@/styles/main.css';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
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
				<body className={`${GeistSans.variable} ${GeistMono.variable}`}>
					{children}
				</body>
			</html>
		</ViewTransitions>
	);
};

export default RootLayout;
