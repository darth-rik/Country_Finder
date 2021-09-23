import React from "react";
import styled from "styled-components";
import BorderCountries from "../features/borderCountries/BorderCountries";
import { device } from "../styles/breakpoints";

type Props = {
	countryDetails: {
		name: string;
		region: string;
		subregion: string;
		nativeName: string;
		currencies: {}[];
		capital: string;
		languages: {}[];
		flags: string[];
		topLevelDomain: string;
		population: number;
		borders: string[];
	};
};

const CountryDetails = ({
	countryDetails: {
		name,
		region,
		subregion,
		nativeName,
		currencies,
		capital,
		languages,
		flags,
		topLevelDomain,
		population,
		borders,
	},
}: Props) => {
	return (
		<Container>
			<CountryFlag>
				<img src={flags[0]} alt='' />
			</CountryFlag>

			<CountryInfoContainer>
				<CountryName>{name}</CountryName>
				<DetailsContainer>
					<DetailsPrimary>
						<Details>
							<h2>Native Name:</h2>
							<p>{nativeName}</p>{" "}
						</Details>
						<Details>
							<h2>Population:</h2>
							<p>{population.toLocaleString("en-US")}</p>{" "}
						</Details>
						<Details>
							<h2>Region:</h2>
							<p>{region}</p>{" "}
						</Details>
						<Details>
							<h2>Sub-Region:</h2>
							<p>{subregion}</p>{" "}
						</Details>
						<Details>
							<h2>Capital:</h2>
							<p>{capital}</p>{" "}
						</Details>
					</DetailsPrimary>
					<DetailsSecondary>
						<Details>
							<h2>Top Level Domain:</h2>
							<p>{topLevelDomain}</p>{" "}
						</Details>
						<Details>
							<h2>Currencies:</h2>
							{currencies.map((curr: any, index: number) => (
								<p key={index}>
									{curr.name} {currencies.length - 1 !== index && ", "}{" "}
								</p>
							))}
						</Details>
						<Details>
							<h2>Languages:</h2>
							{languages.map((lang: any, index: number) => (
								<p key={index}>
									{lang.name}
									{languages.length - 1 !== index && ","}{" "}
								</p>
							))}
						</Details>
					</DetailsSecondary>
				</DetailsContainer>
				{borders?.length > 0 && <BorderCountries borders={borders} />}
			</CountryInfoContainer>
		</Container>
	);
};

const Container = styled.div`
	margin: 4rem 2rem;
	display: grid;
	gap: 3.5rem;

	@media ${device.laptop} {
		grid-template-columns: repeat(2, 1fr);
		margin: 4rem 6rem;
	}
`;

const CountryFlag = styled.div`
	img {
		height: 100%;
		width: 100%;
		@media ${device.laptop} {
			width: 80%;
			height: 50rem;
		}
	}
`;

const CountryInfoContainer = styled.div`
	display: grid;
	gap: 2rem;

	@media ${device.laptop} {
		padding: 3rem 0;
	}
`;

const CountryName = styled.h1`
	font-size: 2rem;
	font-weight: 700;
`;

const DetailsContainer = styled.div`
	display: grid;
	gap: 3rem;
	@media ${device.laptop} {
		grid-template-columns: repeat(2, 1fr);
		gap: 5rem;
	}
`;
const DetailsPrimary = styled.div``;
const DetailsSecondary = styled.div``;
const Details = styled.div`
	display: flex;
	margin-bottom: 1rem;
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
export default CountryDetails;
