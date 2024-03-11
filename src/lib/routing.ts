function removeLang(seq: string, starting: number) {
	const index = seq.indexOf("/", starting);
	if (index === -1) {
		return "/";
	}
	return seq.slice(index);
}

export function removeLangFromPath(path: string) {
	return removeLang(path, 1);
}

export function removeLangFromSlug(slug: string) {
	return removeLang(slug, 0);
}
