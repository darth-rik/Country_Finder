import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

type Props = {
	country: {
		population: number;
		flags: {
			png: string,
			svg: string
		};
		name: {
			common: string
		};
		capital: string[];
		region: string;
		cca2: string;
	};
};

const CountryCard = ({
	country: { flags, name, population, capital, region, cca2 },
}: Props) => {
	const history = useHistory();
	return (
		<CardContainer onClick={() => history.push(`/${cca2}`)}>
			<CountryFlag>
				<img src={flags.svg} alt={`flag of ${name}`} />
			</CountryFlag>
			<InfoContainer>
				<CountryName>{name.common}</CountryName>
				<CountryDetails>
					<h2>Population:</h2>
					<p>{population.toLocaleString("en-US")}</p>{" "}
				</CountryDetails>
				<CountryDetails>
					<h2>Region:</h2>
					<p>{region}</p>{" "}
				</CountryDetails>
				<CountryDetails>
					<h2>Capital:</h2>
					{capital?.map((cap, ind)=> (<p key={ind} >{cap}</p>) )}{" "}
				</CountryDetails>
			</InfoContainer>
		</CardContainer>
	);
};

const CardContainer = styled.div`
	background-color: ${({ theme }) => theme.elements};
	border-radius: 10px;
	box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		transform: scale(1.05);
		box-shadow: 2px 8px 12px rgba(0, 0, 0, 0.2);
	}
`;

const CountryFlag = styled.div`
	img {
		height: 20rem;
		width: 100%;
		object-fit: cover;
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
