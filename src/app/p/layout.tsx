import { Container } from '@/components/Container';
import { Navbar } from '@/components/Navbar';
import { Recommendation } from '@/components/Recommendation';
import React, { type ReactNode } from 'react';

const MDXLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<Container>
			<Navbar />
			<main className="main-mdx">
				{children}

				<Recommendation />
			</main>
		</Container>
	);
};

export default MDXLayout;
