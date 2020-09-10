import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

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
			<div className="att">
				<h2>Attributes</h2>
				<div className="att-values">
					<div className="att-group">
						<p>Strength: {a.strength}</p>
						<p>Dexterity: {a.strength}</p>
					</div>
					<div className="att-group">
						<p>Constitution: {a.constitution}</p>
						<p>Intelligence: {a.intelligence}</p>
					</div>
					<div className="att-group">
						<p>Wisdom: {a.wisdom}</p>
						<p>Charisma: {a.charisma}</p>
					</div>
					<div className="att-group">
						<p>Speed: {a.speed}</p>
						<p>Armor Class: {totalArmor()}</p>
					</div>
				</div>
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
				<h1>{char.name}</h1>
				<div className="char-info">
					<p />
					<p>Class: {char.character_class}</p>
					<p>Level: {char.level}</p>
					<p>Race: {char.race}</p>
					<p />
					<p />
					<p> Alignment: {char.alignment}</p>
					<p />
					<p>Experience Points: {char.xp}</p>
				</div>
			</div>
		);
	}
	function renderArmor() {
		return armors.map((a) => (
			<div className="armor">
				<p className="armor-name">{a.name}</p>
				<p>Armor Class: {a.armor_class}</p>
				<p>Description: {a.description}</p>
			</div>
		));
	}

	function renderWeapons() {
		return weapons.map((a) => (
			<div className="weapons">
				<p className="weapon-name">{a.name}</p>
				<p>Description: {a.description}</p>
				<p>Damage: {a.damage}</p>
				<p>Range: {a.range}</p>
			</div>
		));
	}

	function renderInventory() {
		return inventory.map((a) => (
			<div className="inventory">
				<p className="inventory-name">{a.name}</p>
				<p>Description: {a.description}</p>
			</div>
		));
	}

	return (
		<div className="char-page">
			<Button variant="warning" onClick={props.history.goBack}>
				Go Back
			</Button>
			<div>{renderCharInfo()}</div>
			<hr className="hr1" />
			{getAttributes()}
			<hr className="hr1" />
			<h2>Armor</h2>
			<div className="armor-section">{renderArmor()}</div>
			<hr className="hr1" />
			<h2>Weapons</h2>
			<div className="weapon-section">{renderWeapons()}</div>
			<hr className="hr1" />
			<h2>Inventory</h2>
			<div className="inventory-section">{renderInventory()}</div>
		</div>
	);
}
