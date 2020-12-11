import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
	media: {
		height: 250,
	},
	border: {
		border: 'solid',
	},
	fullHeightCard: {
		height: "100%",
	},
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		borderBottom: "10px solid white",
	},
	activeCard: {
		borderBottom: "10px solid #22289a",
	},
	grid: {
		display: "flex",
	},
	details: {
		display: "flex",
		justifyContent: "space-between",
		margin: '20px',
	},
	title: {
		padding: '0 16px',
	},
	cardActions: {
		padding: '16px',
		display: 'flex',
		justifyContent: 'space-between',
	},
	button: {
		margin: "0 10px 0 10px",
		background: "rgb(36, 175, 240)",
		borderRadius: "5%",
		color: "white",
	}
});