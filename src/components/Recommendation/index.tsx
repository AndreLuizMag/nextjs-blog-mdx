'use client';
import './styles.css';
import { usePathname } from 'next/navigation';
import { ListPost } from '@/components/ListPost';
import { usePost } from '@/hooks/useSearchSlug';

export const Recommendation = () => {
	const pathname = usePathname();
	const slug = pathname.split('/').pop();

	const { recommendations } = usePost(slug);

	return (
		<div className="recommendation">
			<h4>Also read</h4>
			<nav className="btns">
				{recommendations.map((recommendedPost) => (
					<ListPost.Post
						key={recommendedPost.slug}
						title={recommendedPost.title}
						description={recommendedPost.description}
						slug={recommendedPost.slug}
					/>
				))}
			</nav>
		</div>
	);
};
