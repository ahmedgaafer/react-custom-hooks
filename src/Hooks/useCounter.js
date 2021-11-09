import { useState } from 'react';

export function useCounter(initialCount = 0) {
	const [value, setState] = useState(initialCount);
	return {
		value,
		increase: () => setState(value + 1),
		decrease: () => setState(value - 1),
		reset: () => setState(0),
	};
}
