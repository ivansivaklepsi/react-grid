import React from "react";
import styled from "styled-components";
import gradient from "../utils/gradient";
import { colors } from "../Constants";

const borderRadius = 5;

const Checkbox = styled.button`
	background: ${props =>
		props.active
			? "transparent"
			: gradient(
					colors.gradientItem[0],
					colors.gradientItem[1],
					"to right"
			  )};
	border-radius: ${borderRadius}px;
	border: 0;
	padding: 1px;
	width: 20px;
	height: 20px;
	cursor: pointer;
	transition: background 300ms ease-out;
	margin-right: 20px;
`;

const BorderContent = styled.div`
	background: ${colors.backgroundColor};
	border-radius: ${borderRadius - 2}px;
	outline: 1px dashed ${colors.backgroundColor};
	width: 100%;
	height: 100%;
	display: flex;
	transition: all 300ms ease-out;
	${props =>
		props.active &&
		`background: #fff; outline: 0; box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.4)`}
`;

export default ({ onToggle, checked, value }) => {
	const handleOnClick = () => {
		onToggle(value);
	};

	return (
		<Checkbox onClick={handleOnClick} active={checked}>
			<BorderContent active={checked} />
		</Checkbox>
	);
};
