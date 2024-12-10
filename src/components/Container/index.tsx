import React, { type ReactNode } from 'react';
import styles from './styles.module.css';

type ContainerProps = {
	children: ReactNode;
};

export const Container = ({ children, ...props }: ContainerProps) => {
	return (
		<div className={styles.container} {...props}>
			{children}
		</div>
	);
};
