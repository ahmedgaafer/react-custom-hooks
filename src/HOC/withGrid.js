import Box from '@mui/material/Box';

export function withGrid(WrappedComponents) {
	return (props) => {
		const flexOptions = {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			flexWrap: 'wrap',
		};

		return (
			<Box sx={flexOptions}>
				{WrappedComponents.map((SingleComponent, index) => {
					const Component = SingleComponent.component;
					const props = SingleComponent.props;

					return (
						<div key={`${index}-gridItem`}>
							<Component {...props} />
						</div>
					);
				})}
			</Box>
		);
	};
}
