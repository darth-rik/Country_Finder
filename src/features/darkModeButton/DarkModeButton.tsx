import React from "react";

import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";
import { toggleMode } from "./darkModeButtonSlice";

const DarkModeButton = () => {
	const dispatch = useDispatch();

	const { isDarkModeOn } = useSelector((state: RootState) => state.darkMode);

	const toggler = () => {
		dispatch(toggleMode(!isDarkModeOn));
	};

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
