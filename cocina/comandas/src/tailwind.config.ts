import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	// 1. Habilitamos el modo oscuro basado en clase
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 2. Importante: Decirle a Tailwind que busque clases dentro de la librería Skeleton
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {},
	},
	plugins: [
		forms,
		// 3. Registramos el plugin de Skeleton con un tema
		skeleton({
			themes: {
				preset: [
					{ name: 'crimson', enhancements: true },
					{ name: 'modern', enhancements: true }
				]
			}
		})
	]
} satisfies Config;