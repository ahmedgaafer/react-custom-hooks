import { withBox } from '../HOC/withBox';
import { useCounter } from '../Hooks/useCounter';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Counter(props) {
	const counter = useCounter();

	const iconButtonOptions = {
		color: 'antiquewhite',
	};
	const buttonOptions = {
		backgroundColor: 'antiquewhite',
		color: '#2E2E2E',
		'&:hover': {
			backgroundColor: 'antiquewhite',
			color: '#2E2E2E',
		},
	};

	const openGitHubCode = () => {
		window.open(props.link);
	};
	return (
		<div>
			<h3>useCounter</h3>
			<p>You Clicked {counter.value} Times.</p>
			<div>
				<Button sx={buttonOptions} variant="contained" onClick={counter.reset}>
					Reset
				</Button>
				<Tooltip title="Increase">
					<IconButton sx={iconButtonOptions} onClick={counter.increase}>
						<AddCircleIcon sx={{ fontSize: 30 }} />
					</IconButton>
				</Tooltip>
				<Tooltip title="decrease">
					<IconButton sx={iconButtonOptions} onClick={counter.decrease}>
						<RemoveCircleIcon sx={{ fontSize: 30 }} />
					</IconButton>
				</Tooltip>
			</div>
			<div>
				<Tooltip title="GitHub Hook Code">
					<IconButton sx={iconButtonOptions} onClick={openGitHubCode}>
						<GitHubIcon sx={{ fontSize: 40 }} />
					</IconButton>
				</Tooltip>
			</div>
		</div>
	);
}

export default withBox(Counter);
