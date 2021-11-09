import Box from '@mui/material/Box';

export function withGrid(WrappedComponents) {
	return (props) => {
		const flexOptions = {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			flexWrap: 'wrap',
		};

		const keys = Object.entries(props).map((a) => a[0]);
		const dynamicLength = props[keys[0]].length;
		const dividedProps = [];
		for (let i = 0; i < dynamicLength; i++) {
			let prop = {};
			keys.forEach((key) => {
				prop[key] = props[key][i];
			});
			dividedProps.push(prop);
		}

		return (
			<Box sx={flexOptions}>
				{WrappedComponents.map((SingleComponent, index) => {
					return (
						<div key={`${index}-gridItem`}>
							<SingleComponent {...dividedProps[index]} />
						</div>
					);
				})}
			</Box>
		);
	};
}
