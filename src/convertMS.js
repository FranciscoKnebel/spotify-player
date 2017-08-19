export default function convertMS(duration) {
	const seconds = `${parseInt((duration / 1000) % 60, 10)}`.padStart(2, 0);
	const minutes = `${parseInt((duration / (1000 * 60)) % 60, 10)}`;

	return `${minutes}:${seconds}`;
}
