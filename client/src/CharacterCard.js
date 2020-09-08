import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
	return (
		<div className="char-card">
			<Link
				to={{
					pathname: '/character',
					state: { character: character }
				}}
			>
				<h2>{character.name}</h2>
				<div className="char-level-class">
					<p>Level {character.level}</p>
					<p>{character.character_class}</p>
				</div>
			</Link>
		</div>
	);
};

export default CharacterCard;
