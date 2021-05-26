import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SearchCountry from "../features/searchCountry/SearchCountry";

const Home = () => {
	return (
		<>
			<Header />
			<Container>
				<SearchCountry />
			</Container>
		</>
	);
};

const Container = styled.div`
	margin: 0 2rem;
`;

export default Home;
