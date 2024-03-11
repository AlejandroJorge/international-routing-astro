export type AllowedLanguage = "en" | "es" | "fr";

export const allowedLanguages: readonly [
	AllowedLanguage,
	...AllowedLanguage[],
] = ["en", "es", "fr"] as const;
