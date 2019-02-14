import React from "react";
import styled from "styled-components";

const StyledDots = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -2px;
	margin-left: -2px;
	cursor: pointer;
	transition-delay: 100ms;
	&,
	&:before,
	&:after {
		background-color: rgba(120, 120, 150, 0.5);
		width: 4px;
		height: 4px;
		border-radius: 3px;
		transition-property: background-color;
		transition-duration: 200ms;
		transition-timing-function: ease-out;
	}
	&:before,
	&:after {
		position: absolute;
		top: 10px;
		display: block;
		content: "";
	}
	&:before {
		top: -10px;
		transition-delay: 0;
	}
	&:after {
		transition-delay: 200ms;
	}
`;

const ActiveState = `
	&,
	&:before,
	&:after {
		background-color: rgba(120, 120, 150, 0.8);
	}
`;
const StyledButton = styled.button`
	position: absolute;
	right: -30px;
	top: 50%;
	background-color: transparent;
	cursor: pointer;
	border: 0;
	width: 30px;
	height: 40px;
	margin-top: -20px;
	outline: 0;
	opacity: 0.7;
	transition: opacity 200ms ease-out;
	${StyledDots} {
		${props => props.active && ActiveState}
	}
	&:hover {
		opacity: 1;
	}
	${props => props.active && `opacity: 1`}
`;

export default props => (
	<StyledButton {...props}>
		<StyledDots />
	</StyledButton>
);
