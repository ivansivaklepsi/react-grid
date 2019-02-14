import React from "react";
import styled from "styled-components";
import gradient from "../utils/gradient";
import { colors } from "../Constants";
import RowActions from "./RowActions";
import ShowActionsButton from "./ShowActionsButton";
import Checkbox from "./Checkbox";

const borderRadius = 5;

const RowContent = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

const RowDisplay = styled.div`
	background: ${props =>
		props.active
			? "transparent"
			: gradient(
					colors.gradientItem[0],
					colors.gradientItem[1],
					"to right"
			  )};
	flex: 1 0 0;
	border-radius: ${borderRadius}px;
	padding: 1px;
	transition: background 300ms ease-out;
	// margin-right: 20px;
`;

const BorderContent = styled.div`
	background: ${colors.backgroundColor};
	border-radius: ${borderRadius - 2}px;
	outline: 1px dashed ${colors.backgroundColor};
	padding: 5px 20px;
	min-height: 85px;
	display: flex;
	align-items: center;
	transition: all 300ms ease-out;
	${props =>
		props.active &&
		`background: ${
			colors.activeRow
		}; box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2)`}
`;

const StyledRow = styled.div`
	margin-top: 10px;
	:first-child {
		margin-top: 0;
	}
`;

export default class Row extends React.Component {
	state = {
		actionsOpen: false
	};

	constructor(props) {
		super(props);

		this.toggleActions = this.toggleActions.bind(this);
	}

	renderColumns() {
		return React.Children.toArray(this.props.children).map(col =>
			React.cloneElement(col, null, this.props.data[col.props.dataKey])
		);
	}

	toggleActions() {
		this.setState({
			actionsOpen: !this.state.actionsOpen
		});
	}

	render() {
		return (
			<StyledRow>
				<RowContent>
					<Checkbox {...this.props.checkboxProps} />
					<RowDisplay active={this.state.actionsOpen}>
						<BorderContent active={this.state.actionsOpen}>
							{this.renderColumns()}
						</BorderContent>
					</RowDisplay>
					<ShowActionsButton
						active={this.state.actionsOpen}
						onClick={this.toggleActions}
					/>
				</RowContent>
				{this.state.actionsOpen && <RowActions />}
			</StyledRow>
		);
	}
}
