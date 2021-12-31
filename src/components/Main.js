import { useEffect, useState } from "react";
import styled from "styled-components";
import Hello from "./Hello";
import Notes from "./Notes";
const Main = () => {
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		window.localStorage.setItem("_onBoardingDone_", "true");
	}, [isClicked]);

	const setOnboarding = () => {
		setIsClicked(!isClicked);
	};

	const onboarding = window.localStorage.getItem("_onBoardingDone_");

	return (
		<Container as="main" className="main-container">
			{onboarding === "true" ? <Notes /> : <Hello setOnboarding={setOnboarding} />}
		</Container>
	);
};

const Container = styled.div`
	margin: 2rem 0;
	/* border: 1px solid; */
	/* background: hsl(240, 50%, 100%, 0.02); */
	max-width: 920px;
	width: 100%;
	padding: 1rem;
`;

export default Main;
