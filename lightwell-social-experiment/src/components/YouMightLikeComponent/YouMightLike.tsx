import React from "react";
import { ButtonUnstyled } from "@mui/base";
import { FollowButton } from "../../app/shared/buttons";
import { styled } from "@mui/system";
import AppStyle from "../../App.module.scss"
import YouMightLikeStyle from "./youMightLikeStyle.module.scss";

//TODO: extract You Might Like & Show More to bookend entire YML card such that they aren't repeated with every new card produced.

function YouMightLike() {
	return (
		<div className={YouMightLikeStyle.ymlCard}>
			<header className={YouMightLikeStyle.ymlHeader}>
				<h3>You might like</h3>
			</header>

			<div className={YouMightLikeStyle.ymlCardContents}>
				<div className={YouMightLikeStyle.items}>
						<img
							src="https://th.bing.com/th/id/R.19121048bd3e6595c24b348d9c79afaf?rik=qUxJZyLVWVcH1A&pid=ImgRaw&r=0"
							alt=""
							className={AppStyle.profilePicture}
						></img>
					<div className={YouMightLikeStyle.names}>
						<h5 className={YouMightLikeStyle.realName}>Name</h5>
						<h5 className={YouMightLikeStyle.username}>Username</h5>
					</div>
				</div>
				<div className={YouMightLikeStyle.followButton}>
					<FollowButton type="submit">Follow</FollowButton>
				</div>
			</div>

			<div className={YouMightLikeStyle.ymlCardContents}>
				<div className={YouMightLikeStyle.items}>
						<img
							src="https://th.bing.com/th/id/R.19121048bd3e6595c24b348d9c79afaf?rik=qUxJZyLVWVcH1A&pid=ImgRaw&r=0"
							alt=""
							className={AppStyle.profilePicture}
						></img>
					<div className={YouMightLikeStyle.names}>
						<h5 className={YouMightLikeStyle.realName}>Name</h5>
						<h5 className={YouMightLikeStyle.username}>Username</h5>
					</div>
				</div>
				<div className={YouMightLikeStyle.followButton}>
					<FollowButton type="submit">Follow</FollowButton>
				</div>
			</div>

			<footer className={YouMightLikeStyle.showMore}>
				<h5>Show more</h5>
			</footer>
		</div>
	);
}

export default YouMightLike;
