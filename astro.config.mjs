import { defineConfig } from "astro/config";
import { allowedLanguages } from "./src/config";

// https://astro.build/config
export default defineConfig({
	i18n: {
		locales: allowedLanguages,
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: true,
		},
		fallback: {
			es: "en",
			fr: "en",
		},
	},
});
