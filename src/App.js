import "./App.css";

import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	return (
		<Container className="App">
			<Header />
			<Main />
		</Container>
	);
}
const Container = styled.div`
	min-height: 100vh;
`;

export default App;
