import React from "react";
import styled from "styled-components";

const CountryCard = () => {
	return (
		<CardContainer>
			<CountryFlag>
				<img src='https://restcountries.eu/data/umi.svg' alt='' />
			</CountryFlag>
			<InfoContainer>
				<CountryName>United States Of America</CountryName>
				<CountryDetails>
					<h2>Population:</h2>
					<p>323,221,112</p>{" "}
				</CountryDetails>
				<CountryDetails>
					<h2>Region:</h2>
					<p>Americas</p>{" "}
				</CountryDetails>
				<CountryDetails>
					<h2>Capital:</h2>
					<p>Washington D.C</p>{" "}
				</CountryDetails>
			</InfoContainer>
		</CardContainer>
	);
};

const CardContainer = styled.div`
	background-color: ${({ theme }) => theme.elements};
	border-radius: 10px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
	overflow: hidden;
`;

const CountryFlag = styled.div`
	img {
		height: 100%;
		width: 100%;
	}
`;
const CountryName = styled.h1`
	font-size: 1.8rem;
	font-weight: 700;
`;
const InfoContainer = styled.div`
	padding: 2rem 3rem;

	& > * {
		margin-bottom: 1rem;
	}
`;

const CountryDetails = styled.div`
	display: flex;
	h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-right: 1rem;
	}

	p {
		font-size: 1.5rem;
		font-weight: 300;
	}
`;
export default CountryCard;
