import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { device } from "../../styles/breakpoints";
import {
	searchCountryByName,
	getCountriesByRegion,
} from "../countryCard/countryCardSlice";

const SearchCountry = () => {
	const [value, setValue] = useState("");

	const onChange = (e: any) => {
		if (e.target.value === "") {
			dispatch(getCountriesByRegion(countryRegion));
		}
		setValue(e.target.value);
	};

	const { countryRegion } = useSelector(
		(state: RootState) => state.countriesData
	);

	const dispatch = useDispatch();

	// useEffect(() => {
	// 	if (!value)
	// }, [value]);

	return (
		<Wrapper
			onSubmit={(e: any) => {
				e.preventDefault();
				if (value === " ") {
					return;
				} else {
					dispatch(searchCountryByName(value));
				}
			}}
		>
			<SearchIcon>
				{value ? (
					<GrClose
						onClick={() => {
							dispatch(getCountriesByRegion(countryRegion));
							setValue("");
						}}
					/>
				) : (
					<BiSearchAlt2 />
				)}
			</SearchIcon>

			<input
				onChange={onChange}
				value={value}
				placeholder='Search for a country...'
				type='text'
			/>
		</Wrapper>
	);
};

const Wrapper = styled.form<{ onSubmit: any }>`
	background-color: #fff;
	padding: 1.5rem 3rem;
	border-radius: 5px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
	background-color: ${({ theme }) => theme.elements};
	display: flex;
	align-items: center;

	& input {
		border: none;
		outline: none;
		font-size: 1.6rem;
		width: 100%;
		background-color: inherit;
		color: ${({ theme }) => theme.text};

		&::placeholder {
			color: ${({ theme }) => theme.text};
		}

		@media ${device.laptopL} {
			font-size: 1.8rem;
		}
	}

	@media ${device.laptopL} {
		width: 40%;
	}
`;
const SearchIcon = styled.div`
	font-size: 2rem;
	color: ${({ theme }) => theme.text};
	display: flex;
	align-items: center;
	margin-right: 2rem;
	cursor: pointer;
`;

export default SearchCountry;
