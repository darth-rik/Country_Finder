import React from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchCountry = () => {
	return (
		<Wrapper>
			<SearchIcon>
				<BiSearchAlt2 />
			</SearchIcon>

			<input placeholder='Search for a country...' type='text' />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin-top: 3rem;
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
		width: 60%;
		background-color: inherit;

		&::placeholder {
			color: hsl(0, 0%, 52%);
		}
	}
`;
const SearchIcon = styled.div`
	font-size: 2rem;
	color: hsl(0, 0%, 52%);
	display: flex;
	align-items: center;
	margin-right: 2rem;
`;

export default SearchCountry;
