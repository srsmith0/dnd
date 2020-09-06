import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterView from './CharacterView';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={CharacterList} />
				<Route exact path="/character" component={CharacterView} />
			</Switch>
		</div>
	);
}

export default App;
