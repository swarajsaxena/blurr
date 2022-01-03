import { useState } from "react";
import styled from "styled-components";

const Hello = ({ setOnboarding }) => {
	const firstElement = (
		<div className="blurr_container">
			<div className="fade_in">Welcome To Blurr.</div>
		</div>
	);
	const secondElement = (
		<div className="blurr_container">
			<div className="fade_in">Dump Your Thoughts and Clear Your Mind.</div>
		</div>
	);
	const thirdElement = (
		<div className="blurr_container">
			<div className="fade_in">
				Your Thoughts Will Fade Into The Background After A Some Time.
			</div>
		</div>
	);
	const fourthElement = (
		<div className="blurr_container">
			<div className="fade_in">
				You Can Edit Your Thoughts For A Limited Time Of 5 Minutes.
			</div>
		</div>
	);
	const fifthElement = (
		<div className="blurr_container">
			<div className="fade_in">
				Don't Worry Your Thoughts Will Always be There For You To Come Back And
				Take A Look At Them.
			</div>
		</div>
	);
	const sixthElement = (
		<div onClick={setOnboarding} className="forward fade_in">
			Attain Nirvana
			<svg
				width="50"
				height="50"
				viewBox="0 0 50 50"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_432_122)">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M34.398 9.34303L49.3135 24.3343C50.2288 25.2543 50.2288 26.7458 49.3135 27.6657L34.398 42.657C33.4827 43.5769 31.9987 43.5769 31.0834 42.657C30.1681 41.7371 30.1681 40.2455 31.0834 39.3256L41.9979 28.3557L2.34375 28.3557C1.04933 28.3557 -1.63025e-06 27.301 -1.51652e-06 26C-1.40278e-06 24.699 1.04933 23.6444 2.34375 23.6444L41.9979 23.6444L31.0834 12.6744C30.1681 11.7545 30.1681 10.263 31.0834 9.34303C31.9987 8.42309 33.4827 8.42309 34.398 9.34303Z"
						fill="white"
					/>
				</g>
				<defs>
					<clipPath id="clip0_432_122">
						<rect width="50" height="50" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);

	const [firstElementStete, setfirstElementStete] = useState(false);
	const [secondElementStete, setsecondElementStete] = useState(false);
	const [thirdElementStete, setthirdElementStete] = useState(false);
	const [fourthElementStete, setfourthElementStete] = useState(false);
	const [fifthElementStete, setfifthElementStete] = useState(false);
	const [sixthElementStete, setsixthElementStete] = useState(false);

	setTimeout(() => setfirstElementStete(true), 0);
	setTimeout(() => setsecondElementStete(true), 2500);
	setTimeout(() => setthirdElementStete(true), 5000);
	setTimeout(() => setfourthElementStete(true), 7500);
	setTimeout(() => setfifthElementStete(true), 7500);
	setTimeout(() => setsixthElementStete(true), 10000);

	return (
		<Container>
			<h1 className="shrink">Hello</h1>
			<div className="hr shrink"></div>
			<div className="content">
				{firstElementStete ? firstElement : <></>}
				{secondElementStete ? secondElement : <></>}
				{thirdElementStete ? thirdElement : <></>}
				{fourthElementStete ? fourthElement : <></>}
				{fifthElementStete ? fifthElement : <></>}
				{sixthElementStete ? sixthElement : <></>}
			</div>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	svg {
		padding: 1rem;
	}
`;

export default Hello;
