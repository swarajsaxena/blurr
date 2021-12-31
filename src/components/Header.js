import styled from "styled-components";
import Logo from "./Logo";

const Header = () => {
	return (
		<Container className="header" as="header">
			{" "}
			<Logo />
			<nav>
				<a
					href="http://swarajsaxena.vercel.app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Meet The Creator
				</a>
				<a
					href="http://swarajsaxena.vercel.app"
					target="_blank"
					rel="noopener noreferrer"
					style={{ padding: "0" }}
				>
					<svg
						width="50"
						height="50"
						viewBox="0 0 50 50"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M33.7961 17.5105C33.7081 17.3937 33.6141 17.2816 33.5144 17.1746C33.6147 16.9074 33.6908 16.6317 33.742 16.351C33.893 15.3238 33.7618 14.275 33.3627 13.3167C33.3627 13.3167 32.149 12.9374 29.3639 14.8121C28.1815 14.4857 26.9602 14.3216 25.7336 14.3245C24.5034 14.3223 23.2786 14.4864 22.0924 14.8121C19.3074 12.9157 18.0936 13.3167 18.0936 13.3167C17.6993 14.2649 17.5682 15.302 17.7143 16.3185C17.7658 16.6109 17.8456 16.8976 17.9528 17.1746C17.8552 17.2829 17.7577 17.4021 17.671 17.5105C16.8623 18.5248 16.4331 19.7896 16.4573 21.0866C16.4547 21.3943 16.4692 21.7018 16.5006 22.0078C16.8473 26.8085 20.0443 27.9247 23.0894 28.2714C22.6584 28.6722 22.3661 29.1998 22.255 29.7778C22.1542 30.1632 22.1068 30.5606 22.1141 30.959V32.3781C20.9023 32.4858 19.6579 32.3095 19.2725 31.228C18.8581 30.1931 18.1711 29.2898 17.2845 28.614C17.2201 28.5788 17.1588 28.5381 17.1014 28.4923C17.0235 28.2875 16.8855 28.1111 16.7055 27.9863C16.5255 27.8614 16.3119 27.794 16.0928 27.7928H16.0876C15.8011 27.7927 15.5262 27.9061 15.3231 28.1082C15.12 28.3103 15.0052 28.5847 15.0039 28.8712C14.9997 29.7517 15.8807 30.32 16.2421 30.5136C16.6636 30.9383 17.0027 31.4374 17.2422 31.9857C17.6369 33.0948 18.791 34.7796 22.0817 34.5605C22.0828 34.5986 22.0839 34.6346 22.0844 34.6674L22.0891 34.9574C22.0891 35.0997 22.1171 35.2406 22.1715 35.3721C22.226 35.5036 22.3058 35.6231 22.4064 35.7237C22.5071 35.8244 22.6265 35.9042 22.758 35.9586C22.8895 36.0131 23.0305 36.0411 23.1728 36.0411L23.1762 36.0404V36.0411H28.2815C28.4238 36.0411 28.5648 36.0131 28.6963 35.9587C28.8278 35.9042 28.9472 35.8244 29.0479 35.7238C29.1485 35.6231 29.2283 35.5037 29.2828 35.3722C29.3372 35.2407 29.3652 35.0997 29.3652 34.9574C29.3652 34.9574 29.3731 31.5333 29.3731 30.959C29.3803 30.5607 29.3329 30.1633 29.2323 29.7778L29.2303 29.7712L29.2339 29.7778C29.2246 29.7399 29.2104 29.709 29.2002 29.6722C29.0792 29.1354 28.7996 28.6473 28.3978 28.2714L28.4103 28.294C28.4029 28.2874 28.396 28.2779 28.3886 28.2714C31.4337 27.9247 34.6089 26.7868 34.9557 22.0078C34.9871 21.7018 35.0016 21.3942 34.999 21.0866C35.0182 19.7922 34.5937 18.5302 33.7961 17.5105V17.5105Z"
							fill="white"
						/>
					</svg>
				</a>
			</nav>{" "}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	/* border: 1px solid; */
	justify-content: space-between;
	padding: 1.5rem;
	/* max-width: 720px; */
	width: 100%;

	nav {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.logo {
		background: hsla(254, 50%, 100%, 0.05);
		border-radius: 0.5rem;
		width: 52px;
		height: 52px;
	}

	a {
		border-radius: 0.5rem;
		text-decoration: none;
		background: hsla(254, 50%, 100%, 0);
		color: white;
		padding: 1rem;
		transition: all 200ms ease-in-out;
		display: grid;
		place-items: calc();

		svg {
			width: 48px;
			height: 48px;
			/* padding: 1rem; */
		}
	}

	a:hover {
		background: hsla(254, 50%, 100%, 0.1);
	}
`;

export default Header;
