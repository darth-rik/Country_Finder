import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => {
	return <LoaderWrapper></LoaderWrapper>;
};

const rotate = keyframes`
 from{ transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
	margin: 30vh auto;
	border: 16px solid #f3f3f3;
	border-top: 16px solid #3498db;
	border-radius: 50%;
	width: 120px;
	height: 120px;
	animation: ${rotate} 2s linear infinite;
`;
export default Loader;
