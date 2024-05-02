import { React } from 'react';
import './App.scss';
import Shape from './components/Shape';

const App = (context) =>
	<div className="App">
		<Shape { ...context }/>
	</div>;

export default App;
