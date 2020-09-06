import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CharacterList = (props) => {
	const [ char, setChar ] = useState([]);

	useEffect(() => {
		axios.get(`/api/characters`).then((res) => {
			setChar(res.data);
		});
	}, []);

	// const renderChar = (props) => {
	//   return char.map(char => (
	//     <ViewCharacter
	//       key={char.id}
	//       {...char}
	//       deleteCharacter={deleteCharacter}
	//     />
	//   ))
	// }
	// /api/users/:user_id/characters/:id

	// const deleteChar = (char) => {
	//   axios.delete(`/api/users/users_id/character/${char.id}`)
	//     .then(res => {
	//       setChar(char.filter(c => c.id !== char.id))
	//     })
	// }

	return (
		<div style={{ color: 'white' }}>
			<br />
			<h1 align="center">Character's Home Page</h1>
			<hr />
			<h2>Character Select</h2>
			<br />
			{char.map((c) => (
				<h3>
					<Link
						to={{
							pathname: '/character',
							state: { character: c }
						}}
					>
						{c.name}
					</Link>
				</h3>
			))}
		</div>
	);
};

export default CharacterList;
