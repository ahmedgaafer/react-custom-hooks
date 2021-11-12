import { withBox } from '../HOC/withBox';
import { useConnect } from '../Hooks/useConnection';
import GitHubIcon from '@mui/icons-material/GitHub';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import IconButton from '@mui/material/IconButton';

import { iconSizes, iconButtonOptions } from '../constants';

function Connect(props) {
	const isOnline = useConnect();
	const customStyle = {
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		color: isOnline ? 'green' : 'crimson',
	};
	const openGitHubCode = () => {
		window.open(props.link);
	};

	return (
		<div>
			<h3>useConnect</h3>
			{isOnline ? (
				<div style={customStyle}>
					<span> Connected </span>
					<CheckCircleIcon
						sx={{ fontSize: iconSizes.normal, color: 'green' }}
					/>
				</div>
			) : (
				<div style={customStyle}>
					<span> Disconnected </span>
					<ErrorIcon sx={{ fontSize: iconSizes.normal }} />
				</div>
			)}

			<div>
				<IconButton sx={iconButtonOptions} onClick={openGitHubCode}>
					<GitHubIcon sx={{ fontSize: iconSizes.GitHub }} />
				</IconButton>
			</div>
		</div>
	);
}

export default withBox(Connect);
