import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
	return (
		<Link
			to={{
				pathname: '/character',
				state: { character: character }
			}}
		>
			<div className="char-card" link>
				<h2>{character.name}</h2>
				<div className="char-level-class">
					<p>Level {character.level}</p>
					<p>{character.character_class}</p>
				</div>
			</div>
		</Link>
	);
};

export default CharacterCard;
