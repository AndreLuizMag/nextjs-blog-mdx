import type { ReactNode } from 'react';
import { Container } from '@/components/Container';
import { Navbar } from '@/components/Navbar';
import { Recommendation } from '@/components/Recommendation';

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
