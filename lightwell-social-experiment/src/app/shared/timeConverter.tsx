// https://bobbyhadz.com/blog/typescript-calculate-time-between-dates#:~:text=To%20calculate%20the%20time%20between,epoch%20an%20the%20given%20date.

export default function timeCalculator(tweetDate: Date) {
	const currentTime = new Date().valueOf();
	const tweetTime = new Date(tweetDate).valueOf();
	var timeDifference: number = currentTime - tweetTime;

	return convertMsToTime(timeDifference);
}

function convertMsToTime(milliseconds: number) {
	let seconds = Math.floor(milliseconds / 1000);
	let minutes = Math.floor(seconds / 60);
	let hours = Math.floor(minutes / 60);
	let days = Math.floor(hours / 24);
	let weeks = Math.floor(days / 7);
	let years = Math.floor(weeks / 52);

	seconds = seconds % 60;
	minutes = minutes % 60;

	if (years > 0) {
		return `${years}y`;
	}
	if (days > 7 && days < 365) {
		return `${weeks}w`;
	}
	if (days >= 1 && days < 7) {
		return `${days}d`;
	}
	if (minutes === 0 && hours === 0 && days === 0) {
		return `${seconds}s`;
	}
	if (hours === 0 && days === 0) {
		return `${minutes}m`;
	}
	if (hours > 0 && days < 1) {
		return `${hours}h`;
	}
}
