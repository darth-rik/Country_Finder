import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { device } from "../../styles/breakpoints";
import {
	searchCountryByName,
	getAllCountries,
} from "../countryCard/countryCardSlice";

const SearchCountry = () => {
	const [value, setValue] = useState("");

	const onChange = (e: any) => {
		setValue(e.target.value);
	};

	const dispatch = useDispatch();

	return (
		<Wrapper>
			<SearchIcon>
				<BiSearchAlt2 />
			</SearchIcon>

			<input
				onChange={onChange}
				value={value}
				onKeyUp={_.debounce((e: any) => {
					if (!e.target.value) {
						dispatch(getAllCountries());
					} else dispatch(searchCountryByName(e.target.value));
				}, 500)}
				placeholder='Search for a country...'
				type='text'
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
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
`;

export default SearchCountry;
