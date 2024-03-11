export function removeFirstPathPart(path: string) {
	const startingIndex = path.startsWith("/") ? 1 : 0;
	const cutIndex = path.indexOf("/", startingIndex);
	if (cutIndex === -1) {
		return "/";
	}
	return path.slice(cutIndex);
}
