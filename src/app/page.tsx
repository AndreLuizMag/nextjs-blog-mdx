import { Container } from '@/components/Container';
import { ListPost } from '@/components/ListPost';
import type { Posts } from '@/types/posts';
import { posts } from '@/utils/posts';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
	return (
		<main>
			<Container>
				<h1>NextJS Blog with MDX</h1>
				<ListPost.List>
					{posts.map((post: Posts) => (
						<ListPost.Post key={post.slug} {...post} />
					))}
				</ListPost.List>

				<Link
					href="https://github.com/AndreLuizMag/nextjs-blog-mdx"
					target="_blank"
					rel="noopener noreferrer"
					className="btn"
				>
					<Image src="./github.svg" alt="github" width={16} height={16} />
					Github
				</Link>
			</Container>
		</main>
	);
};

export default Home;
