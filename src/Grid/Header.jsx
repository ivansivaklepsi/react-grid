import React from "react";
import styled from "styled-components";

const StyledHeader = styled.a`
	color: #fff;
	flex: ${props => (props.col ? props.col : 1)} 0 0;
	text-decoration: none;
	font-size: 12px;
	padding-right: 10px;
	opacity: ${props => (props.active ? 1 : 0.4)};
	:last-child {
		text-align: center;
	}
`;

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.setOrder = this.setOrder.bind(this);
	}

	setOrder(e) {
		e.preventDefault();
		this.props.setOrder(this.props.orderKey);
	}

	render() {
		return (
			<StyledHeader
				col={this.props.col}
				active={this.props.active}
				href="#"
				onClick={this.setOrder}
			>
				{this.props.title}
			</StyledHeader>
		);
	}
}
