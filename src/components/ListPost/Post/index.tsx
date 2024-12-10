import { Link } from 'next-view-transitions';
import React from 'react';
import './styles.css';

type PostProps = {
	title: string;
	description: string;
	slug: string;
};

export const Post = ({ title, description, slug }: PostProps) => {
	return (
		<Link href={`/p/${slug}`} className="post btn outline">
			<h3>{title}</h3>
			<p>{description}</p>
		</Link>
	);
};
