import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { device } from "../styles/breakpoints";

const BackButton = () => {
	return (
		<Wrapper>
			<BsArrowLeft />
			<p>Back</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.elements};
	margin: 2rem;
	width: 13rem;
	padding: 0.5rem 3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	cursor: pointer;

	@media ${device.laptop} {
		margin: 4rem 6rem;
	}

	& > :first-child {
		font-size: 3rem;
	}
`;

export default BackButton;
