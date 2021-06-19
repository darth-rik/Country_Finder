import React from "react";

import { IoMoon } from "react-icons/io5";
import styled from "styled-components";

const DarkModeButton = () => {
	return (
		<DarkModeToggle>
			<Icon>
				<IoMoon />
			</Icon>

			<p>Dark Mode</p>
		</DarkModeToggle>
	);
};
const DarkModeToggle = styled.div`
	display: flex;
	align-items: center;
`;

const Icon = styled.div`
	margin-right: 1rem;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export default DarkModeButton;
