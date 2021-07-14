import { Fragment, useEffect } from "react";
import { GlobalStyles } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/Themes";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { RootStateOrAny, useSelector } from "react-redux";

const App = () => {
	const { isDarkModeOn } = useSelector(
		(state: RootStateOrAny) => state.darkMode
	);

	return (
		<ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Fragment>
				<Home />
				{/* <Details /> */}
			</Fragment>
		</ThemeProvider>
	);
};

export default App;
