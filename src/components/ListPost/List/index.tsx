import React, { type ReactNode } from 'react';
import './styles.css';

type ListProps = {
	children: ReactNode;
};

export const List = ({ children }: ListProps) => {
	return <div className="list">{children}</div>;
};
