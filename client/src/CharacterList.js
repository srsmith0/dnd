import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
	const [ chars, setChars ] = useState([]);
	const [ filter, setFilter ] = useState(false);

	useEffect(() => {
		getChars();
	}, []);

	function getChars() {
		Axios.get(`/api/characters`).then((res) => {
			setChars(res.data);
		});
	}
	function renderChars() {
		return chars.map((c) => <CharacterCard character={c} />);
	}

	function filterClass() {
		Axios.get(`/api/filter_by_class/Rogue`).then((res) => {
			setChars(res.data);
		});
	}
	// const deleteChar = (char) => {
	//   axios.delete(`/api/users/users_id/character/${char.id}`)
	//     .then(res => {
	//       setChar(char.filter(c => c.id !== char.id))
	//     })
	// }

	return (
		<div>
			<br />
			<h1 align="center">Character's Home Page</h1>
			<hr />
			<h2>Character Select</h2>
			<br />
			<button onClick={() => filterClass()}>Filter by Class</button>
			<button onClick={() => getChars()}>Reset</button>
			<div className="char-list">{renderChars()}</div>
		</div>
	);
};

export default CharacterList;
