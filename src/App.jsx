import React from "react";
import styled from "styled-components";
import gradient from "./utils/gradient";
import nextRow from './utils/nextRow';
import PurpleButton from "./Components/PurpleButton";
import RoundImage from "./Components/RoundImage";
import { surveyConstants, colors } from "./Constants";
import { Grid, Column } from "./Grid";

const StyledApp = styled.div`
	width: 1136px;
	max-width: 100%;
	margin: 100px auto;
	color: #fff;
`;

const Header = styled.header`
	display: flex;
	padding-bottom: 15px;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h2`
	margin: 0;
	font-size: 26px;
	font-weight: 400;
`;

const GradientSeparator = styled.hr`
	background: ${gradient(colors.gradientItem[0], colors.gradientItem[1])};
	height: 1px;
	border: 0;
	margin: 30px 0;
`;

export default class App extends React.Component {
	state = {
		data: Array.apply(null, Array(4)).map(nextRow)
	};

	formatDate(timestamp) {
		const date = new Date(timestamp);
		return (
			date.getDate() +
			". " +
			surveyConstants.months[date.getMonth()] +
			" " +
			date.getFullYear()
		);
	}

	formatAuthor(id) {
		return <RoundImage title={surveyConstants.authors[id]} src={`/assets/${id}.jpg`} />
	}

	addRecord() {
		this.setState({
			data: [...this.state.data, nextRow()]
		});
	}

	constructor() {
		super();
		this.addRecord = this.addRecord.bind(this);
	}

	render() {
		return (
			<StyledApp>
				<Header>
					<Title>Surveys</Title>
					<PurpleButton onClick={this.addRecord}>New survey</PurpleButton>
				</Header>
				<GradientSeparator />
				<Grid
					data={this.state.data}
					defaultOrder={{ key: null, dir: 0 }}
				>
					<Column primary label="Title" dataKey="title" col="5" />
					<Column label="State" dataKey="state" col="3" />
					<Column bold label="Viewed" dataKey="viewed" col="2" />
					<Column bold label="Answered" dataKey="answered" col="2" />
					<Column label="Folder" dataKey="folder" col="3" />
					<Column
						label="Created"
						dataKey="created"
						dataFormatter={this.formatDate}
						col="3"
					/>
					<Column
						label="Valid until"
						dataKey="valid_until"
						dataFormatter={this.formatDate}
						col="3"
					/>
					<Column
						primary
						label="Created by"
						dataKey="created_by"
						dataFormatter={this.formatAuthor}
						col="2"
					/>
				</Grid>
			</StyledApp>
		);
	}
}
