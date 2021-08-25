import { Fragment } from "react";
import { GlobalStyles } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/Themes";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { RootStateOrAny, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
	const { isDarkModeOn } = useSelector(
		(state: RootStateOrAny) => state.darkMode
	);

	return (
		<Router>
			<ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
				<GlobalStyles />
				<Fragment>
					<Header />
					<Route exact path='/' component={Home} />
					<Route exact path='/:name' component={Details} />
				</Fragment>
			</ThemeProvider>
		</Router>
	);
};

export default App;
