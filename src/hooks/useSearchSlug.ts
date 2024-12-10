import type { Posts } from '@/types/posts';
import { posts } from '@/utils/posts';
import { useMemo } from 'react';

export const usePost = (slug?: string) => {
	const post = useMemo(() => {
		if (!slug) return null;
		return posts.find((p: Posts) => p.slug === slug);
	}, [slug]);

	return {
		post,
		recommendations: post?.recommendation || [],
	};
};
