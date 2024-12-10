import type { Posts } from '@/types/posts';

export const posts: Posts[] = [
	{
		title: 'Hello World!',
		slug: 'hello-world',
		description: 'This is a test post',
		tags: ['test', 'hello', 'world'],
		recommendation: [],
	},
	{
		title: 'Testing components',
		slug: 'test-components',
		description: 'Just testing some components',
		tags: ['test', 'components'],
		recommendation: [],
	},
	{
		title: 'How i made this blog',
		slug: 'how-i-made-this-blog',
		description: "Let's see how this blog was made",
		tags: ['how-to', 'blog', 'made'],
		recommendation: [],
	},
];

posts[0].recommendation = [posts[1], posts[2]];
posts[1].recommendation = [posts[2]];
posts[2].recommendation = [posts[1]];
