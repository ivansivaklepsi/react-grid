import React from 'react';
import styled from "styled-components";

const StyledActionButton = styled.button`
	background: transparent;
	border: 0;
	padding: 4px 20px;
	color: #fff;
	font-family: inherit;
	cursor: pointer;
	img {
		width: 16px;
		vertical-align: -4px;
		margin-right: 7px;
	}
`;

export default ({ icon, label }) => (
	<StyledActionButton>
		<img src={icon} />
		<span>{label}</span>
	</StyledActionButton>
);
