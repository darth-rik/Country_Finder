import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SearchCountry from "../features/searchCountry/SearchCountry";
import FilterRegion from "../features/filterRegion/FilterRegion";
import CountryCard from "../features/countryCard/CountryCard";
import { device } from "../styles/breakpoints";

const Home = () => {
	return (
		<>
			<Header />
			<Container>
				<SearchCountry />
				<FilterRegion />
			</Container>
			<CountriesContainer>
				<CountryCard />
				<CountryCard />
				<CountryCard />
				<CountryCard />
			</CountriesContainer>
		</>
	);
};

const Container = styled.div`
	margin: 2rem;

	@media ${device.laptopL} {
		display: flex;
		justify-content: space-between;
		font-size: 1.6rem;
		margin: 4rem 6rem;
	}
`;
const CountriesContainer = styled.div`
	margin: 3rem 2rem;
	display: grid;
	gap: 2rem;
	@media ${device.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${device.laptop} {
		grid-template-columns: repeat(3, 1fr);
	}
	@media ${device.laptopL} {
		grid-template-columns: repeat(4, 1fr);
		margin: 0rem 6rem;
		gap: 6rem;
	}
`;

export default Home;
