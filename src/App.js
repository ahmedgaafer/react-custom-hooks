import { withGrid } from './HOC/withGrid';
import './App.css';
import { Container } from '@mui/material';
import Counter from './Components/Counter';
import { links } from './constanst/constants';

const Grid = withGrid([Counter]);

function App() {
	return (
		<div className="App">
			<h1>Useful Custom React Hooks</h1>
			<Container>
				<Grid link={links} />
			</Container>
		</div>
	);
}

export default App;
