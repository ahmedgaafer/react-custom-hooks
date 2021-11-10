import { withGrid } from './HOC/withGrid';
import './App.css';
import { Container } from '@mui/material';
import components from './Components';

const Grid = withGrid(components);

function App() {
	return (
		<div className="App">
			<h1>Useful React Custom Hooks</h1>
			<Container>
				<Grid />
			</Container>
		</div>
	);
}

export default App;
