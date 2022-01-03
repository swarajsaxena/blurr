import { useEffect, useState } from "react";
import styled from "styled-components";
import TextareaComponent from "./TextareaComponent";
import { v4 as uuidv4 } from "uuid";

const Notes = () => {
	const initialNotes = JSON.parse(window.localStorage.getItem("_notesList_") || "[]");

	const [note, setNote] = useState("");
	const [notesList, setNotesList] = useState(initialNotes);

	useEffect(() => {
		window.localStorage.setItem("_notesList_", JSON.stringify(notesList));
	}, [notesList]);

	const removeNote = noteId => {
		const updatedNotes = notesList.filter(note => note.id !== noteId);
		setNotesList(updatedNotes);
	};

	const EditNewNote = (noteId, newText) => {
		const updatedNotes = notesList.map(note =>
			note.id === noteId ? { ...note, text: newText } : note
		);
		setNotesList(updatedNotes);
	};

	const doThis = event => {
		event.target.style.height = "34px";
		event.target.style.height = `${event.target.scrollHeight}px`;
		event.target.style.marginBottom = "0.5rem";

		if (event.target.value === "") {
			event.target.style.height = "34px";
			event.target.style.marginBottom = "0rem";
		}
	};

	const onKeyPress = event => {
		if (event.key === "Enter") {
			if (event.key === "Enter" && event.shiftKey) return;

			event.preventDefault();

			if (event.target.value !== "") {
				const newNote = {
					id: uuidv4(),
					text: event.target.value,
					timestamp: new Date(),
					height: event.target.style.height,
				};

				event.target.style.height = "34px";
				event.target.style.marginBottom = "0rem";
				event.target.value = "";

				setNotesList([...notesList, newNote]);
				setNote("");
			}
		}
	};

	return (
		<Container>
			<h1 className="shrink">
				Today
				<div className="key_func">
					<div className="func">Add Line: </div>
					<div className="key">Shift</div> +<div className="key">Enter</div>
				</div>
				<div className="key_func">
					<div className="func">Add New Thought: </div>
					<div className="key">Enter</div>
				</div>
			</h1>
			<form
				action=""
				// onSubmit={onSubmit}
			>
				<textarea
					onKeyPress={onKeyPress}
					onChange={doThis}
					placeholder="What's on your mind today?"
					name=""
					id=""
				></textarea>
				{/* {console.log(notesList)} */}
				{/* <button type="submit">
					<svg
						width="50"
						height="50"
						viewBox="0 0 50 50"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clipPath="url(#clip0_432_122)">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
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
				</button> */}
			</form>
			<div className="hr shrink"></div>
			<div className="notes">
				{notesList &&
					notesList.map((note, index) => (
						<TextareaComponent
							data={note}
							editNote={EditNewNote}
							removeNote={removeNote}
							key={index}
						/>
					))}
			</div>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;

	opacity: 0;

	animation: notes_fade_in 0.5s 0.5s forwards ease-in;

	.shrink {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		.key_func {
			opacity: 0.5;
			padding: 0 0.5rem;
			display: flex;
			align-items: center;
			gap: 0.2rem;
			font-size: 0.8rem;
			font-weight: 400;

			.key {
				background: hsl(240, 50%, 100%, 0.2);
				padding: 0.2rem;
				border-radius: 0.1rem;
			}
		}
	}

	@keyframes notes_fade_in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media only screen and (max-width: 600px) {
		.key_func {
			display: none !important;
		}
	}

	form {
		display: flex;
		align-items: flex-end;
		width: 100%;
		padding: 1rem;
		padding-bottom: 0.5rem;
		border-radius: 0.5rem;
		transition: background 0.2s ease-in;
		background: hsl(240, 50%, 100%, 0);
		height: max-content;
		/* border: 1px solid; */

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

		button {
			background: none;
			outline: none;
			border: none;
			cursor: pointer;

			height: 30px;
			width: 30px;

			margin-bottom: 0.5rem;
			padding: 0.2rem;

			svg {
				height: 100%;
				width: 100%;
			}
		}
	}

	form:hover,
	form:focus {
		background: hsl(240, 50%, 100%, 0.1);
	}

	.notes {
		/* border: 1px solid; */
		width: 100%;
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		padding-top: 2rem;
	}
`;

export default Notes;
