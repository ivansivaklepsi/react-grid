import React from "react";
import styled from "styled-components";
import { colors } from "../Constants";
import Header from "./Header";
import Row from "./Row";
import Checkbox from "./Checkbox";

const StyledGrid = styled.div`
	padding-right: 30px;
`;

const StyledHeaders = styled.div`
	display: flex;
	align-items: center;
`;
const StyledHeadersContent = styled(StyledHeaders)`
	padding: 10px 20px;
	flex: 1 0 0;
`;

export default class Grid extends React.Component {
	state = {
		orderBy: this.props.defaultOrder ? this.props.defaultOrder.key : null,
		orderDir: this.props.defaultOrder ? this.props.defaultOrder.dir : 0,
		selectedRows: []
	};

	constructor(props) {
		super(props);
		this.setOrder = this.setOrder.bind(this);
		this.orderList = this.orderList.bind(this);
		this.toggleOneRow = this.toggleOneRow.bind(this);
		this.toggleAllRows = this.toggleAllRows.bind(this);
	}

	renderHeaders() {
		return React.Children.toArray(this.props.children).map(col => (
			<Header
				key={col.props.label}
				orderKey={col.props.dataKey}
				col={col.props.col}
				title={col.props.label}
				active={this.state.orderBy === col.props.dataKey}
				dir={this.state.orderDir}
				setOrder={this.setOrder}
			/>
		));
	}

	orderList(a, b) {
		const key = this.state.orderBy;
		const dir = this.state.orderDir;

		if (!(key in a && key in b)) return 1;

		/*
		this didn't work out so well
		return ~~(a[key] > b[key]) * (1 - dir * 2)*/
		const condition = !!dir ? a[key] > b[key] : a[key] < b[key];
		return ~~condition * 2 - 1;
	}

	renderRows() {
		const orderedList = [...this.props.data].sort(this.orderList);
		return orderedList.map(row => (
			<Row
				key={row.ID}
				checkboxProps={{
					value: row.ID,
					onToggle: this.toggleOneRow,
					checked: this.state.selectedRows.indexOf(row.ID) !== -1
				}}
				data={row}
			>
				{this.props.children}
			</Row>
		));
	}

	setOrder(key) {
		this.setState({
			...this.state,
			orderBy: key,
			orderDir: Math.abs(
				~~(this.state.orderBy === key) - this.state.orderDir
			)
		});
	}

	toggleAllRows() {
		const selectedRows =
			this.state.selectedRows.length === this.props.data.length
				? []
				: this.props.data.map(item => item.ID);
		this.setState({
			...this.state,
			selectedRows
		});
	}

	toggleOneRow(id) {
		const rowInState = this.state.selectedRows.indexOf(id);
		const selectedRows =
			rowInState === -1
				? [...this.state.selectedRows, id]
				: [...this.state.selectedRows].filter(rowId => rowId !== id);
		this.setState({
			...this.state,
			selectedRows
		});
	}

	render() {
		return (
			<StyledGrid>
				<StyledHeaders>
					<Checkbox
						onToggle={this.toggleAllRows}
						checked={
							this.state.selectedRows.length ===
							this.props.data.length
						}
					/>
					<StyledHeadersContent>
						{this.renderHeaders()}
					</StyledHeadersContent>
				</StyledHeaders>
				<div>{this.renderRows()}</div>
			</StyledGrid>
		);
	}
}
