'use client';
import React, { useState } from 'react';

export const BtnCount = () => {
	const [count, setCount] = useState(0);
	return (
		<button
			type="button"
			onClick={() => setCount((count) => count + 1)}
			className="btn"
		>
			count is {count}
		</button>
	);
};
