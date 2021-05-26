import { Fragment } from "react";
import { GlobalStyles } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/Themes";
import Home from "./pages/Home";

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyles />
			<Fragment>
				<Home />
			</Fragment>
		</ThemeProvider>
	);
}

export default App;
