import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewCharacter(props) {
	const [ char, setChar ] = useState([]);
	const [ armors, setArmor ] = useState([]);
	const [ weapons, setWeapons ] = useState([]);
	const [ skills, setSkills ] = useState([]);
	const [ inventory, setInventory ] = useState([]);
	const { character } = props.location.state;

	useEffect(() => {
		getChar();
		getArmor();
		getWeapon();
		getSkills();
		getInventory();
	}, []);

	function getChar() {
		axios
			.get(`/api/characters/${character.id}`)
			.then((res) => {
				setChar(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}

	function getArmor() {
		axios.get(`/api/armor/${character.id}`).then((res) => {
			setArmor(res.data);
		});
	}

	function getWeapon() {
		axios.get(`/api/weapons/${character.id}`).then((res) => {
			setWeapons(res.data);
		});
	}

	function getAttributes() {
		return skills.map((a) => (
			<div>
				<h2>Attributes</h2>
				<p>Strength: {a.strength}</p>
				<p>Dexterity: {a.strength}</p>
				<p>Constitution: {a.constitution}</p>
				<p>Intelligence: {a.intelligence}</p>
				<p>Wisdom: {a.wisdom}</p>
				<p>Charisma: {a.charisma}</p>
				<p>Speed: {a.speed}</p>
				<p>Armor Class: {totalArmor()}</p>
			</div>
		));
	}

	function totalArmor() {
		let armor = 0;
		armors.map((a) => (armor += a.armor_class));
		return armor;
	}
	function getSkills() {
		axios.get(`/api/skills/${character.id}`).then((res) => {
			setSkills(res.data);
		});
	}

	function getInventory() {
		axios.get(`api/inventory/${character.id}`).then((res) => {
			setInventory(res.data);
		});
	}

	function renderCharInfo() {
		return (
			<div>
				<h1>Name: {char.name}</h1>
				<p>Class: {char.character_class}</p>
				<p>Level: {char.level}</p>
				<p>Race: {char.race}</p>
				<p> Alignment: {char.alignment}</p>
				<p>Experience Points: {char.xp}</p>
			</div>
		);
	}
	function renderArmor() {
		return armors.map((a) => (
			<div>
				<h4>Armor Name: {a.name}</h4>
				<h6>Description: {a.description}</h6>
				<h6>Armor Class: {a.armor_class}</h6>
			</div>
		));
	}

	function renderWeapons() {
		return weapons.map((a) => (
			<div>
				<h4>Name: {a.name}</h4>
				<h6>Description: {a.description}</h6>
				<h6>Damage: {a.damage}</h6>
				<h6>Range: {a.range}</h6>
			</div>
		));
	}

	function renderInventory() {
		return inventory.map((a) => (
			<div>
				<h4>Name: {a.name}</h4>
				<h6>Description: {a.description}</h6>
			</div>
		));
	}

	return (
		<div>
			<button onClick={props.history.goBack}>Go Back</button>
			{renderCharInfo()}
			<br />
			{getAttributes()}
			<hr />
			<h2>Armor</h2>
			{renderArmor()}
			<hr />
			<h2>Weapons</h2>
			{renderWeapons()}
			<hr />
			<h2>Inventory</h2>
			{renderInventory()}
		</div>
	);
}
