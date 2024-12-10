export type Posts = {
	title: string;
	slug: string;
	description: string;
	tags: string[];
	recommendation: Posts[];
};
