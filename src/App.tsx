import { Fragment, useEffect } from "react";
import { GlobalStyles } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/Themes";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useDispatch, useSelector } from "react-redux";

import { toggleMode } from "./features/darkModeButton/darkModeButtonSlice";

function App() {
	const { isDarkModeOn } = useSelector((state: any) => state.darkMode);

	return (
		<ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Fragment>
				<Home />
				{/* <Details /> */}
			</Fragment>
		</ThemeProvider>
	);
}

export default App;
