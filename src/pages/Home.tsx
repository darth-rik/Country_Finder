import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SearchCountry from "../features/searchCountry/SearchCountry";
import FilterRegion from "../features/filterRegion/FilterRegion";
import CountryCard from "../features/countryCard/CountryCard";

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
			</CountriesContainer>
		</>
	);
};

const Container = styled.div`
	margin: 0 2rem;
`;
const CountriesContainer = styled.div`
	margin: 2rem 4rem;
`;

export default Home;
