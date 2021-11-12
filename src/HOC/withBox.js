import React from 'react';
import Box from '@mui/material/Box';

export function withBox(WrappedComponent) {
	return (props) => (
		<Box
			sx={{
				width: 300,
				minHeight: 250,
				maxHeight: 250,
				backgroundColor: '#2e2e2e',
				border: '1px solid antiquewhite',
				margin: '1vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<WrappedComponent {...props} />
		</Box>
	);
}
