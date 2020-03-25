import React, { Suspense } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import {
	GlobalStyle,
	SideBarWrapper,
	Container,
	ContentWrap,
	LoadingChunks,
} from 'Styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'Styles/theme';
import useLocalStorage from 'Cmpts/hooks';

const TitleBar = React.lazy(() => import('Cmpts/titlebar'));
const ActivityBar = React.lazy(() => import('Cmpts/activitybar'));
const SideBar = React.lazy(() => import('Cmpts/sidebar'));
const TabList = React.lazy(() => import('Cmpts/tabs'));
const Editor = React.lazy(() => import('Cmpts/editor'));
const NotFound = React.lazy(() => import('Cmpts/notfound'));

const App = (props) => {
	const [theme, setTheme] = useLocalStorage('mode');
	const mode = theme === 'dark' ? Theme.dark : Theme.light;

	const Data = props.data;
	const keys = Object.keys(Data);
	const routePaths = keys.map((path) => (
		<Route path={`/${path}`} key={path}>
			<Editor data={Data} path={path} />
		</Route>
	));

	console.log(process.env);
	return (
		<ThemeProvider theme={mode}>
			<Router basename={`${process.env.PUBLIC_URL}/code-resume`}>
				<Suspense
					fallback={
						<LoadingChunks className="loading-chunks">Loading...</LoadingChunks>
					}>
					<GlobalStyle />
					<TitleBar title={props.title} />
					<Container>
						<SideBarWrapper>
							<ActivityBar
								socialLinks={props.socialLinks}
								theme={theme}
								setTheme={setTheme}
							/>
							<SideBar data={Data} />
						</SideBarWrapper>
						<ContentWrap>
							<TabList data={Data} />
							<Switch>
								{routePaths}
								<Redirect exact from="/" to={keys[0]} />
								<Route>
									<NotFound />
								</Route>
							</Switch>
						</ContentWrap>
					</Container>
				</Suspense>
			</Router>
		</ThemeProvider>
	);
};

export default App;
