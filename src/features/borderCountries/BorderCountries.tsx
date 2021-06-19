import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const BorderCountries = () => {
	return (
		<Container>
			<Heading>Border Countries:</Heading>
			<CountriesContainer>
				<Buttons>France</Buttons>
				<Buttons>Germany</Buttons>
				<Buttons>Italy</Buttons>
			</CountriesContainer>
		</Container>
	);
};
const Container = styled.div`
	color: ${({ theme }) => theme.text};

	@media ${device.laptopL} {
		display: flex;
		align-items: center;
	}
`;

const Heading = styled.h2`
	font-size: 1.8rem;
	font-weight: 600;
	margin-bottom: 1.5rem;

	@media ${device.laptopL} {
		margin-bottom: 0;
		margin-right: 1rem;
	}
`;
const CountriesContainer = styled.div``;
const Buttons = styled.button`
	background-color: ${({ theme }) => theme.elements};
	color: inherit;
	width: 10rem;
	padding: 0.7rem 1rem;
	border: none;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	margin: 0.5rem;
	cursor: pointer;
`;
export default BorderCountries;
