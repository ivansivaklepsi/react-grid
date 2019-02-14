import styled from "styled-components";
import gradient from '../utils/gradient';
import { colors } from '../Constants';

export default styled.button`
	background: ${gradient(colors.gradientButtonNew[0], colors.gradientButtonNew[1])};
	width: 140px;
	height: 30px;
	font-family: inherit;
	font-size: 13px;
	letter-spacing: .05em;
	border-radius: 4px;
	color: #fff;
	cursor: pointer;
	font-weight: 600;
	border: 0;
	outline: 0;
	transition: background 300ms ease-out;

	:hover {
		background: ${gradient(colors.gradientButtonNewHover[0], colors.gradientButtonNewHover[1])};
	}
`;
