import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import DarkModeButton from "../features/darkModeButton/DarkModeButton";
import { device } from "../styles/breakpoints";

const Header = () => {
	return (
		<Wrapper>
			<Title>
				{" "}
				<Link to='/'> Where in the world? </Link>{" "}
			</Title>
			<DarkModeButton />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.elements};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem;
	font-size: 1.4rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

	@media ${device.laptopL} {
		font-size: 1.6rem;
		padding: 2.5rem 6rem;
	}
`;

const Title = styled.h1`
	font-size: 1.6rem;

	& > * {
		color: inherit;
		text-decoration: none;
	}

	@media ${device.laptopL} {
		font-size: 2rem;
	}
`;

export default Header;
