import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";

const Header = () => {
	return (
		<Wrapper>
			<Title>Where in the world?</Title>
			<ToggleMode>
				<Icon>
					<IoMoonOutline />
				</Icon>

				<p>Dark Mode</p>
			</ToggleMode>
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
`;

const Title = styled.h1`
	font-size: 1.6rem;
`;

const ToggleMode = styled.div`
	display: flex;
	align-items: center;
`;

const Icon = styled.div`
	margin-right: 1rem;
	display: flex;
	align-items: center;
`;

export default Header;
