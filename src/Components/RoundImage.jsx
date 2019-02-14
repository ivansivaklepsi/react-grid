import React from "react";
import styled from "styled-components";
import gradient from "../utils/gradient";
import { colors } from "../Constants";

const StyledImage = styled.div`
	background-size: cover;
	background-image: url(${props => props.src});
	background-position: 50% 50%;
	border-radius: 50%;
	border: 5px solid ${colors.activeRow};
	width: 40px;
	height: 40px;
	box-sizing: border-box;
`;

const BorderImg = styled.div`
	background: ${gradient(colors.gradientPerson[0], colors.gradientPerson[1])};
	padding: 2px;
	box-sizing: border-box;
	border-radius: 50%;
	width: 44px;
	width: 44px;
	margin: 0 auto;
`;

export default ({ title, src }) => (
	<BorderImg title={title}>
		<StyledImage src={src} />
	</BorderImg>
);
