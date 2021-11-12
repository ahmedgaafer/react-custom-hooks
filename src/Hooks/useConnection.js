import { useState } from 'react';

export function useConnect() {
	const [value, setState] = useState(window.navigator.onLine);

	return value;
}
