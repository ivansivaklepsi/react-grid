import React from "react";
import styled from "styled-components";

const StyledColumn = styled.div`
	flex: ${props => (props.col ? props.col : 1)} 0 0;
	${props => !props.primary && `opacity: 0.5; font-size: 0.9em`}
	${props => props.bold && `font-weight: bold`}
	padding-right: 10px;
	box-sizing: border-box;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export default props => {
	let data = props.children;
	if (props.dataFormatter) {
		data = props.dataFormatter(data);
	}

	return (
		<StyledColumn col={props.col} primary={props.primary} bold={props.bold}>
			{data}
		</StyledColumn>
	);
};
