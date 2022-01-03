import styled from "styled-components";

const TextareaComponent = ({ data, editNote, removeNote }) => {
	const doThis = event => {
		event.target.style.height = "34px";
		event.target.style.height = `${event.target.scrollHeight}px`;
		event.target.style.marginBottom = "1rem";

		if (event.target.value === "") {
			event.target.style.height = "34px";
			event.target.style.marginBottom = "0rem";
		}
	};

	let timeDifference =
		(new Date().getTime() - new Date(data.timestamp).getTime()) / 1000;

	let t =
		(timeDifference / 60).toFixed(1) < 60
			? (timeDifference / 60).toFixed(1) + " min"
			: (timeDifference / 60).toFixed(1) / 60 < 24
			? ((timeDifference / 60).toFixed(1) / 60).toFixed(1) + " hr"
			: (timeDifference / 60).toFixed(1) / 60 / 24 < 7
			? ((timeDifference / 60).toFixed(1) / 60 / 24).toFixed(1) + " day"
			: ((timeDifference / 60).toFixed(1) / 60 / 24 / 7).toFixed(1) + " wk";

	const calculateTimeDiff = () => {
		timeDifference =
			(new Date().getTime() - new Date(data.timestamp).getTime()) / 1000;

		setTimeout(calculateTimeDiff, 100);
	};

	calculateTimeDiff();

	const onKeyPress = event => {
		editNote(data.id, event.target.value);
	};
	const remove = event => {
		removeNote(data.id);
	};

	return (
		<Container className="blurr_container">
			<div className="timestamp">{t}</div>
			<textarea
				style={{
					height: data.height,
					pointerEvents: (timeDifference / 60).toFixed(1) > 5 ? "none" : "all",
				}}
				onKeyPress={onKeyPress}
				onChange={doThis}
				placeholder="Press Ctrl + D To Delete"
				id={data.id}
				defaultValue={data.text}
				// onClick={}
				className="fade_in"
			></textarea>

			<svg
				onClick={remove}
				className="cross"
				width="50"
				height="50"
				viewBox="0 0 50 50"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M10.7678 38.7678C9.79146 37.7915 9.79146 36.2085 10.7678 35.2322L35.2322 10.7678C36.2085 9.79146 37.7915 9.79146 38.7678 10.7678C39.7441 11.7441 39.7441 13.327 38.7678 14.3033L14.3033 38.7678C13.327 39.7441 11.7441 39.7441 10.7678 38.7678Z"
					fill="white"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M11.2322 10.7678C12.2085 9.79146 13.7915 9.79146 14.7678 10.7678L39.2322 35.2322C40.2085 36.2085 40.2085 37.7915 39.2322 38.7678C38.2559 39.7441 36.673 39.7441 35.6967 38.7678L11.2322 14.3033C10.2559 13.327 10.2559 11.7441 11.2322 10.7678Z"
					fill="white"
				/>
			</svg>
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
	/* pointer-events: none; */
	height: max-content;
	position: relative;
	/* border: 1px solid; */

	.timestamp {
		position: absolute;
		top: 0rem;
		left: -4rem;
		opacity: 0;
		font-size: 0.8rem;
		transition: opacity 500ms ease-in;
	}

	.cross {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		height: 25px;
		width: 25px;
		padding: 0.2rem;
		cursor: pointer;
		opacity: 0;
		border-radius: 0.2rem;
	}

	@media only screen and (max-width: 1000px) {
		.timestamp {
			top: 0.8rem;
			left: unset;
			right: 2.5rem;
		}
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

		.cross {
			opacity: 1;
			transition: all 100ms ease-in-out;

			&:hover {
				background: hsl(240, 50%, 100%, 0.2);
			}
		}
	}
`;

export default TextareaComponent;
