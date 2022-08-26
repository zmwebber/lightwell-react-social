import React from "react";
import { ButtonUnstyled } from "@mui/base";
import { styled } from "@mui/system";

//https://mui.com/base/react-button/
const CustomButton: any = styled(ButtonUnstyled)`
	font-weight: bold;
	background-color: ${"#FFFFFF"};
	color: black;
	border-radius: 20px;
	padding: 8px 18px;
	shape = RoundedCornerShape(
		50,50,50,50
	);
	
	&:hover {
		background-color: ${"#dcdcdc"};
	}
`;

//TODO: extract You Might Like & Show More to bookend entire YML card such that they aren't repeated with every new card produced.

function YouMightLike() {
	return (
		<div className="yml-card">
			<header className="yml-header">
				<h3>You might like</h3>
			</header>

			<div className="yml-card-contents">
				<div className="items">
					<div className="image">
						<img
							src="https://th.bing.com/th/id/R.19121048bd3e6595c24b348d9c79afaf?rik=qUxJZyLVWVcH1A&pid=ImgRaw&r=0"
							alt=""
							className="profile-picture"
						></img>
					</div>
					<div className="names">
						<h5 className="real-name">Name</h5>
						<h5 className="username">Username</h5>
					</div>
				</div>
				<div className="follow-button">
					<CustomButton type="submit">Follow</CustomButton>
				</div>
			</div>

			<div className="yml-card-contents">
				<div className="items">
					<div className="image">
						<img
							src="https://th.bing.com/th/id/R.19121048bd3e6595c24b348d9c79afaf?rik=qUxJZyLVWVcH1A&pid=ImgRaw&r=0"
							alt=""
							className="profile-picture"
						></img>
					</div>
					<div className="names">
						<h5 className="real-name">Name</h5>
						<h5 className="username">Username</h5>
					</div>
				</div>
				<div className="follow-button">
					<CustomButton type="submit">Follow</CustomButton>
				</div>
			</div>

			<footer className="show-more">
				<h5>Show more</h5>
			</footer>
		</div>
	);
}

export default YouMightLike;
