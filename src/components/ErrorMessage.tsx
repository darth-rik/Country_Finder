import React from "react";
import styled from "styled-components";

type Props = {
	error: String;
};

const ErrorMessage = ({ error }: Props) => {
	return <Wrapper>{error}</Wrapper>;
};

const Wrapper = styled.div`
	margin: 15rem auto;
	text-align: center;
	font-size: 2rem;
	letter-spacing: 0.2rem;
`;

export default ErrorMessage;
