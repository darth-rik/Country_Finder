import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { getBorderCountries } from "../countryCard/countryDetailsSlice";

type Props = {
	borders: string[];
};

const BorderCountries = ({ borders }: Props) => {
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		borders.forEach((countryCode: string) => {
			dispatch(getBorderCountries(countryCode));
		});
	}, []);

	const { borderCountries } = useSelector(
		(state: RootStateOrAny) => state.countryDetails
	);

	return (
		<Container>
			<Heading>Border Countries:</Heading>
			<CountriesContainer>
				{borderCountries &&
					borderCountries.map(
						(country: { name: string; code: string }, index: number) => (
							<Buttons
								onClick={() => history.push(`/${country.code}`)}
								key={index}
							>
								{country.name}
							</Buttons>
						)
					)}
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

	padding: 1rem 3rem;

	border: none;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	margin: 1rem;
	cursor: pointer;
`;
export default BorderCountries;
