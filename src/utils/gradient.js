export default (start, end, dir) => {
	return `linear-gradient(${[dir, start, end]
		.filter(a => a !== undefined && a !== null)
		.join(",")})`;
};
