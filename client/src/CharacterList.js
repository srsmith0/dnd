import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
import database from './dnddb.png';

const CharacterList = (props) => {
	const [ chars, setChars ] = useState([]);

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
			if (chars.length <= 0) {
			}
		});
	}

	return (
		<div className="char-list-page">
			<form className="db-button" method="get" action={database} target="_blank" rel="noopener noreferrer">
				<Button variant="secondary" type="submit">
					Database Structure
				</Button>
			</form>
			<h1 align="center">Choose a Character</h1>
			<hr />
			<div className="char-list-buttons">
				<DropdownButton variant="secondary" title="Filter By Class" style={{ marginRight: '1rem' }}>
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
			</div>
			<div className="char-list">{renderChars()}</div>
			<p>{chars.length <= 0 ? 'No Characters' : ''}</p>
		</div>
	);
};

export default CharacterList;
