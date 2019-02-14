import React from "react";
import styled from "styled-components";
import ActionButton from "./ActionButton";

const activate = require("./assets/triangle.svg"),
	preview = require("./assets/eye.svg"),
	edit = require("./assets/edit.svg"),
	stats = require("./assets/stats.svg"),
	deleteIcon = require("./assets/delete.svg");

const StyledActions = styled.div`
	background: rgba(0, 0, 0, 0.5);
	border-radius: 0 0 5px 5px;
	margin: 0 70px;
	padding: 15px;
	display: flex;
	justify-content: center;
	overflow: hidden;
`;

export default () => (
	<StyledActions>
		<div>
			<ActionButton icon={activate} label="Activate" />
			<ActionButton icon={preview} label="Preview" />
			<ActionButton icon={edit} label="Edit" />
			<ActionButton icon={stats} label="Stats" />
			<ActionButton icon={deleteIcon} label="Delete" />
		</div>
	</StyledActions>
);
