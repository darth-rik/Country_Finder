import React from "react";

import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleMode } from "./darkModeButtonSlice";

const DarkModeButton = () => {
	const dispatch = useDispatch();

	const toggler = () => {
		dispatch(toggleMode(isDarkModeOn ? false : true));
	};

	const { isDarkModeOn } = useSelector(
		(state: RootStateOrAny) => state.darkMode
	);

	return (
		<DarkModeToggle onClick={toggler}>
			<Icon>{isDarkModeOn ? <IoMoon /> : <IoMoonOutline />}</Icon>

			<p>Dark Mode</p>
		</DarkModeToggle>
	);
};
const DarkModeToggle = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

const Icon = styled.div`
	margin-right: 1rem;
	display: flex;
	align-items: center;
`;

export default DarkModeButton;