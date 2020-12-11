import React from 'react';
import {Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard';

const infoCards = [
	{ color: '#00838f', title: 'Latest News', info: "Check the latest news", text: "Give me the latest news" },
	{ color: '#1565c0', title: 'News by Categories', info: "Bussiness, Entertaiment, Music, Health, Science, Sports, Technology", text: "Give me the latest Technology news" },
	{ color: '#4527a0', title: 'News by Terms', info: "Bitcoin, PlayStation 5, Humanism, Brexit, Italy, Covid-19...", text: "What's new about Bitcoin" },
	{ color: '#283593', title: 'News by Sources', info: "CNN, BBC News, Wired, Time, IGN, Buzzfeed, ABC News...", text: "Give me the news from CNN"},
	{ color: '#0067c7', title: 'Small talk', info: "Ask Alan something", text: "How are you?, How old are you?, Are you a chatbot?..."},
	{ color: '#6300c7', title: 'More info about the app', info: "Learn more about this application", text: "What does this app do?, How does this app works..."},
	{ color: '#15a4c0', title: 'Useful options', info: "Use the following instructions after searching the news", text: "'Open article number 5' (choose the article number) and 'Go back' "},
	{ color: '#15c0bd', title: 'Who did this', info: "Learn more about Monika", text: "'Who programmed this app?' and 'Tell me more about Monika' "},
]

const NewsCards = ({ articles, activeArticle }) => {
	const classes = useStyles();

	if(!articles.length) {
		return (
			<Grow in>
				<Grid className={classes.container} container alignItems="stretch" spacing={3}>
					{infoCards.map((infoCard) => (
						<Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
							<div className={classes.card} style={{backgroundColor: infoCard.color}}>
								<Typography variant="h5">{infoCard.title}</Typography>
									{
										infoCard.info 
											? (<Typography variant="h6">
													{/* <strong>
														{infoCard.title.split(' ')[2]}
													</strong> */}
													{/* <br /> */}
													{infoCard.info}
											</Typography>) : null}
								 <Typography variant="h6"><strong>Try saying:</strong><br/><i>{infoCard.text}</i></Typography>
							</div>
						</Grid>
					))}
				</Grid>
			</Grow>
		)
	}

	return (
		<Grow in>
			<Grid className={classes.container} container alignItems="stretch" spacing={3}>
				{articles.map((article, i) => (
					<Grid key = {i} item xs={12} sm={6} md={4} lg={3} style = {{display: "flex"}}>
						<NewsCard article = {article} activeArticle={activeArticle} i={i}/>
					</Grid>
					))}
			</Grid>
  	</Grow>
	);
}

export default NewsCards;