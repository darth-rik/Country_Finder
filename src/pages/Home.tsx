import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import SearchCountry from "../features/searchCountry/SearchCountry";
import FilterRegion from "../features/filterRegion/FilterRegion";
import CountryCard from "../components/CountryCard";
import { getAllCountries } from "../features/countryCard/countryCardSlice";
import Loader from "../components/Loader";
import { device } from "../styles/breakpoints";
import LazyLoad from "react-lazyload";
import { RootState } from "../store";
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCountries());
	}, []);

	const { countriesData, loading, error } = useSelector(
		(state: RootState) => state.countriesData
	);

	return (
		<>
			<Container>
				<SearchCountry />
				<FilterRegion />
			</Container>
			{!countriesData || loading ? (
				<Loader />
			) : error ? (
				<ErrorMessage error={error} />
			) : (
				<CountriesContainer>
					{countriesData &&
						countriesData.map((country: any, index: number) => (
							<LazyLoad key={index} offset={-100}>
								<CountryCard country={country} />
							</LazyLoad>
						))}
				</CountriesContainer>
			)}
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
	gap: 3rem;
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
