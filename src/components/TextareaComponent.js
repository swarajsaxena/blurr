import { useState } from "react";
import styled from "styled-components";

const TextareaComponent = ({ data }) => {
	const [time, setTime] = useState(0);

	const doThis = event => {
		event.target.style.height = "34px";
		event.target.style.height = `${event.target.scrollHeight}px`;
		event.target.style.marginBottom = "1rem";

		if (event.target.value == "") {
			event.target.style.height = "34px";
			event.target.style.marginBottom = "0rem";
		}
	};

	let timeDifference =
		(new Date().getTime() - new Date(data.timestamp).getTime()) / 1000;

	const calculateTimeDiff = () => {
		timeDifference =
			(new Date().getTime() - new Date(data.timestamp).getTime()) / 1000;

		const x = (timeDifference / 60).toFixed(1);

		// setTime(x);

		setTimeout(calculateTimeDiff, 100);
	};

	console.log("timeDifffference: ", (timeDifference / 60).toFixed(1));

	calculateTimeDiff();

	return (
		<Container className="blurr_container">
			<div className="timestamp">{(timeDifference / 60).toFixed(1)} Min</div>
			<textarea
				style={{
					height: data.height,
					pointerEvents: timeDifference ? "none" : "all",
				}}
				// onKeyPress={onKeyPress}
				onChange={doThis}
				placeholder="What's on your mind today?"
				id={data.id}
				defaultValue={data.text}
				// onClick={}
				className="fade_in"
				contentEditable="false"
			></textarea>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: flex-end;
	width: 100%;
	padding: 1rem;
	padding-bottom: 0rem;
	border-radius: 0.5rem;
	transition: background 0.2s ease-in;
	background: hsl(240, 50%, 100%, 0);
	pointer-events: all;
	height: max-content;
	position: relative;

	.timestamp {
		position: absolute;
		top: 1rem;
		left: -4.5rem;
		opacity: 0;
		font-size: 0.8rem;
		transition: opacity 500ms ease-in;
	}

	textarea {
		::-webkit-scrollbar {
			width: 0;
			display: none;
		}

		width: 100%;
		background: hsl(240, 50%, 100%, 0);
		border: none;
		outline: none;
		transition: height 0.2s ease-in;
		margin-bottom: 0.5rem;

		display: flex;
		align-items: center;

		overflow: hidden;
		resize: none;
		line-height: 1.5;
		height: 34px;

		font-family: inherit;
		font-size: 1rem;
		letter-spacing: 1px;
		color: white;
		overflow-x: hidden;
		overflow-y: auto;
	}

	&:hover {
		background: hsl(240, 50%, 100%, 0.1);

		.timestamp {
			opacity: 0.5;
		}
	}
`;

export default TextareaComponent;
