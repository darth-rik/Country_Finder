import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { device } from "../../styles/breakpoints";
import { getCountriesByRegion } from "../countryCard/countryCardSlice";

const FilterRegion = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const dispatch = useDispatch();

	const toggleFilterMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<Filter onClick={toggleFilterMenu}>
			<p>Filter By Region</p>
			<IoIosArrowDown />
			<FilterOptions
				onClick={(e: React.ChangeEvent) => {
					if (e.currentTarget === e.target) {
						return;
					}
					const region = e.target.innerHTML;

					dispatch(getCountriesByRegion(region));
				}}
				menuOpen={isMenuOpen}
			>
				<li>Africa</li>
				<li>Americas</li>
				<li>Asia</li>
				<li>Europe</li>
				<li>Oceania</li>
			</FilterOptions>
		</Filter>
	);
};

const Filter = styled.div`
	margin-top: 3rem;
	border-radius: 5px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
	background-color: ${({ theme }) => theme.elements};
	padding: 1.5rem;
	max-width: 20rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	cursor: pointer;

	@media ${device.laptopL} {
		width: 20%;
		margin-top: 0rem;
	}
`;

const FilterOptions: any = styled.ul<{ menuOpen: boolean }>`
	width: 20rem;
	padding: 1.5rem 0;
	border-radius: 5px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
	background-color: ${({ theme }) => theme.elements};
	list-style: none;
	display: ${({ menuOpen }) => (menuOpen ? "block" : "none")};
	transition: all 0.5s;
	position: absolute;
	z-index: 100;
	top: 60px;
	left: 0px;
	& > * {
		padding: 0.5rem 2rem;
		cursor: pointer;
		transition: all 0.2s;

		&:hover {
			background-color: #dbdada;
		}
	}
`;

export default FilterRegion;
