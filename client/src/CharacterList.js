import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';

const CharacterList = (props) => {
	const [ chars, setChars ] = useState([]);
	const [ charClass, setCharClass ] = useState('');

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

	function filterClass(klass) {
		Axios.get(`/api/filter_by_class/${klass}`).then((res) => {
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
			<h1 align="center">All Characters</h1>
			<hr />
			<DropdownButton variant="secondary" title="Filter By Class">
				<Dropdown.Item onClick={() => filterClass('Barbarian')}>Barbarian</Dropdown.Item>
				<Dropdown.Item onClick={() => filterClass('Bard')}>Bard</Dropdown.Item>
				<Dropdown.Item onClick={() => filterClass('Druid')}>Druid</Dropdown.Item>
				<Dropdown.Item onClick={() => filterClass('Monk')}>Monk</Dropdown.Item>
				<Dropdown.Item onClick={() => filterClass('Paladin')}>Paladin</Dropdown.Item>
				<Dropdown.Item onClick={() => filterClass('Ranger')}>Ranger</Dropdown.Item>
				<Dropdown.Item onClick={() => filterClass('Rogue')}>Rogue</Dropdown.Item>
				<Dropdown.Item onClick={() => filterClass('Warlock')}>Warlock</Dropdown.Item>
				<Dropdown.Item onClick={() => filterClass('Wizard')}>Wizard</Dropdown.Item>
			</DropdownButton>
			<Button variant="warning" onClick={() => getChars()}>
				Reset
			</Button>
			<div className="char-list">{renderChars()}</div>
		</div>
	);
};

export default CharacterList;
